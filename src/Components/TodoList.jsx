import React, { useEffect, useState } from 'react'
import listModel from '../Models/taskModel'
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
    <div>
        <ul>
            {todoList.map((task) => (
                <div key={task.id}>
                <input type='checkbox' id={task.id} onChange={(e)=> changeDoneStatus(e,task.id)}/>    
                <li >{task.taskName}</li>
                <button onClick={()=>deleteItemInTodoList(task.id)}>del</button>
                </div>
            ))}
        </ul>
        <button onClick={addItemToTodoList}>Add Item</button>
        <button onClick={deleteAllDoneTasks}>Delete All Done Tasks</button>
    </div>
  )
}

export default TodoList
