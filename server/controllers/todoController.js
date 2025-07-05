import axios from "axios"
import todoSchema from "../models/todoModel.js"

export async function addTodo(req,res) {
    try{
        const newTodo = new todoSchema({
            taskName : req.body.taskName,
            isDone : req.body.isDone
        })
        const savedTodo = await newTodo.save()
        res.status(200).json(savedTodo)
    }catch(err){
        res.status(500).json(err)
    }
}

export async function editTodo(req,res){
    try{
        const todo = await todoSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        
        res.status(200).json(todo)
    }catch(err){
        res.status(500).json(err)
    }
}

export async function deleteTodo(req,res){
    try{
        const todo = await todoSchema.findByIdAndDelete(req.params.id)

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ id: todo._id, message: 'Deleted Successfully' })
    }
    catch(err){
        res.status(500).json(err)
    }
}

export async function getAllTodo(req,res){
    try{
        const todoList = await todoSchema.find()
        res.status(200).json(todoList)
    }
    catch(err){
        res.status(500).json(err)
    }
}