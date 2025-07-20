import axios from "axios"
import todoSchema from "../models/todoModel.js"

export async function addTodo(req, res) {
    try {
        const newTodo = new todoSchema({
            userId: req.body.userId,
            taskName: req.body.taskName,
            isDone: req.body.isDone,
        })
        const savedTodo = await newTodo.save()
        res.status(200).json(savedTodo)
    } catch (err) {
        res.status(500).json(err)
    }
}

export async function editTodo(req, res) {
    try {
        const todo = await todoSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json(err)
    }
}

export async function deleteTodo(req, res) {
    try {
        const todo = await todoSchema.findByIdAndDelete(req.params.id)

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ id: todo._id, message: 'Deleted Successfully' })
    }
    catch (err) {
        res.status(500).json(err)
    }
}

export async function getAllTodo(req, res) {
    try {
        const userId = req.params.id;
        const todoList = await todoSchema.find({ userId: userId });
        res.status(200).json(todoList)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

export async function getAllTodosByStatus(req, res) {
    try {
        const userId = req.params.id;
        const isDone = req.params.isDone === 'true'; // Convert string to boolean

        const todoList = await todoSchema.find({ userId: userId, isDone: isDone });
        res.status(200).json(todoList);
    }
    catch (err) {
        res.status(500).json(err)
    }
}

export async function deleteAllCompletedTodos(req, res) {
    try {
        const userId = req.params.id;
        const result = await todoSchema.deleteMany({ userId: userId, isDone: true });
        res.status(200).json({ message: 'All completed todos deleted successfully', count: result.deletedCount });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}