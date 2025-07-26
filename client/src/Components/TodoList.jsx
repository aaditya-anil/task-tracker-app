import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, getAllTodos, editTodo, deleteAllCompletedTodos, getAllTodosByStatus } from '../slices/todoSlice.js';
import TodoDetails from './TodoDetails.jsx';

const TodoList = () => {

    const todoList = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem('userId') || !localStorage.getItem('token')) {
            window.location.href = '/Login';
        }
        dispatch(getAllTodos(localStorage.getItem('userId')))
    }, []);



    const handleEdit = (id) => {
        const taskName = prompt("Enter task name");
        if (taskName) {
            dispatch(editTodo({ id: id, data: { taskName, isDone: false } }));
        }
    }

    const handleDeleteAllCompleted = () => {
        dispatch(deleteAllCompletedTodos(localStorage.getItem('userId')))
    }

    return (
        <div className='todo-list'>
            <div className="actionbar">
                <select name='todo-status' id='todo-status' onChange={(e) => {
                    const status = e.target.value;
                    if (status === 'all') {
                        dispatch(getAllTodos(localStorage.getItem('userId')));
                    } else {
                        const isDone = status == 'completed';
                        dispatch(getAllTodosByStatus({ id: localStorage.getItem('userId'), isDone: isDone }));
                    }
                }}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='pending'>Pending</option>
                </select>
                <div className='buttons'>
                    <button onClick={() => { window.location.href = '/popup' }}>Add Item</button>
                    <button className='delete' onClick={() => handleDeleteAllCompleted()}>Delete All Done Tasks</button>
                </div>
            </div>

            <ul>
                <div className="todo-li">
                    {todoList.map((task) => (
                        <TodoDetails key={task._id} task={task} onEdit={() => handleEdit(task._id)} onDelete={() => dispatch(deleteTodo(task._id))} onComplete={() => dispatch(editTodo({ id: task._id, data: { taskName: task.taskName, isDone: !task.isDone } }))} />
                    ))}
                </div>
            </ul >

        </div >
    )
}

export default TodoList
