import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, getAllTodos, editTodo, deleteAllCompletedTodos, getAllTodosByStatus } from '../slices/todoSlice.js';

const TodoList = () => {

    const todoList = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem('userId') || !localStorage.getItem('token')) {
            window.location.href = '/Login';
        }
        dispatch(getAllTodos(localStorage.getItem('userId')))
    }, []);

    const handleAdd = () => {
        const taskName = prompt("Enter task name");
        if (taskName) {
            dispatch(addTodo({ taskName, isDone: false, userId: localStorage.getItem('userId') }));
        }
    };

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
            <ul>
                {todoList.map((task) => (
                    <div key={task._id} className='ind-list'>
                        <input type='checkbox' className='checkbox' id={task._id} checked={task.isDone} onChange={() => dispatch(editTodo({ id: task._id, data: { taskName: task.taskName, isDone: !task.isDone } }))} />
                        {task.isDone ? <li className='completed'>{task.taskName}</li> : <li >{task.taskName}</li>}
                        <button onClick={() => handleEdit(task._id)}>edit</button>
                        <button onClick={() => dispatch(deleteTodo(task._id))}>del</button>
                    </div>
                ))}
            </ul>
            <div className='buttons'>
                <button onClick={() => handleAdd()}>Add Item</button>
                <button className='delete' onClick={() => handleDeleteAllCompleted()}>Delete All Done Tasks</button>
            </div>
        </div>
    )
}

export default TodoList
