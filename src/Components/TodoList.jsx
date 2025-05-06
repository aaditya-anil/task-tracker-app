import React, { useEffect, useState } from 'react'
import useTodoList from '../Controller/useTodoList'

const TodoList = () => {
    const {
        todoList,
        addItemToTodoList,
        deleteItemInTodoList,
        deleteAllDoneTasks,
        changeDoneStatus
    } = useTodoList();


    return (
    <div className='todo-list'>
        <ul>
            {todoList.map((task) => (
                <div key={task.id} className='ind-list'>
                <input type='checkbox' id={task.id} onChange={(e)=> changeDoneStatus(e,task.id)}/>    
                <li >{task.taskName}</li>
                <button onClick={()=>deleteItemInTodoList(task.id)}>del</button>
                </div>
            ))}
        </ul>
        <div className='buttons'>
        <button onClick={addItemToTodoList}>Add Item</button>
        <button onClick={deleteAllDoneTasks}>Delete All Done Tasks</button>
        </div>
    </div>
  )
}

export default TodoList
