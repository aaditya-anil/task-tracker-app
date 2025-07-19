import mongoose, { Schema } from "mongoose";
import { use } from "react";
const {schema} = mongoose;

const todoSchema = new Schema({
        taskName: { type: String, required: true },
        isDone: { type: Boolean, required: true },
        userId: { type: String, required: true }
    });
    
    const Todo = mongoose.model("Todo", todoSchema);
    export default Todo