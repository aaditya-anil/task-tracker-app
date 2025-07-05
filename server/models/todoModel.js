import mongoose, { Schema } from "mongoose";
const {schema} = mongoose;

const todoSchema = new Schema({
        taskName: { type: String, required: true },
        isDone: { type: Boolean, required: true },
    });
    
    const Todo = mongoose.model("Todo", todoSchema);
    export default Todo