import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, getAllTodos, editTodo } from '../slices/todoSlice.js';

const TodoList = () => {

    const todoList = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, []);
    
    const handleAdd = () => {
        const taskName = prompt("Enter task name");
        if (taskName) {
        dispatch(addTodo({ taskName, isDone: false }));
        }
    };

    const handleEdit = (id) => {
        const taskName = prompt("Enter task name");
        if (taskName) {
            dispatch(editTodo({id: id, data: { taskName, isDone: false }}));
        }
    }

    return (
    <div className='todo-list'>
        <ul>
            {todoList.map((task) => (
                <div key={task._id} className='ind-list'>
                <input type='checkbox' id={task._id} />    
                <li >{task.taskName}</li>
                <button onClick={()=>handleEdit(task._id)}>edit</button>
                <button onClick={()=>dispatch(deleteTodo(task._id))}>del</button>
                </div>
            ))}
        </ul>
        <div className='buttons'>
        <button onClick={()=>handleAdd}>Add Item</button>
        <button >Delete All Done Tasks</button>
        </div>
    </div>
  )
}

export default TodoList
