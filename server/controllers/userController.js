import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export async function registerUser(req, res) {
    try {
        const {  email, password } = req.body;

        const existingUser = await User.findOne({ username });
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email: email, password: hashedPassword });

        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, 'jwt_secret');
        res.status(201).json({ token, message: "User registered successfully" });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ token: null , message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ token: null ,message: "Invalid email or password" });
        }
        const token = jwt.sign({ id: user._id }, 'jwt_secret');
        res.status(200).json({ token, message: "Login successful" });

    } catch (error) {
        console.error("Error logging in user:", error);
        if (error instanceof JsonWebTokenError) {
            return res.status(401).json({ token: null , message: "Invalid token" });
        }
        res.status(500).json({ token: null , message: "Internal server error" });
    }
}