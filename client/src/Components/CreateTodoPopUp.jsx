import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice.js';

const CreateTodoPopUp = () => {

    const todoList = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        const taskName = e.target.taskName.value;
        const description = e.target.taskDescription.value;
        e.preventDefault();
        if (taskName) {
            dispatch(addTodo({ taskName: taskName, description: description, isDone: false, userId: localStorage.getItem('userId') }));
            window.location.href = '/';
        }
    };

    return (
        <div className='create-todo-popup'>
            <div className="top-bar">
                <h1>Add New Task</h1>
                <p className='close-popup' onClick={() => window.location.href = '/'}>X</p>
            </div>
            <form className='create-todo-form' onSubmit={handleAdd}>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" name="taskName" required />
                <label htmlFor="taskDescription">Description:</label>
                <textarea id="taskDescription" name="taskDescription" required></textarea>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default CreateTodoPopUp