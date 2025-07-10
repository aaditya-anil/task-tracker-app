import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { addTodo, editTodo, deleteTodo, getAllTodo } from '../server/controllers/todoController.js'
import { loginUser, registerUser } from './controllers/userController.js'

const app = express()
const PORT = 4000
dotenv.config()

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> console.log("Backend Server Started: Listening on Port: " + PORT))

app.post("/todo", addTodo)
app.put("/todo/:id",editTodo)
app.delete("/todo/:id",deleteTodo)
app.get("/todo",getAllTodo)

app.post("/register", registerUser)
app.post("/login", loginUser)

app.get("/", (req, res) => res.send("Yes, Server is running"))

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to Database")).catch((err) => console.log(err))