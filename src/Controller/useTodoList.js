import { useState,useEffect } from "react";

const useTodoList= () =>{
    const [todoList, setTodoList] = useState(()=>{
        const storedList = localStorage.getItem('todoList')
        return storedList ? JSON.parse(storedList) : []
    })
    
    function addItemToTodoList(){
        var itemToAdd = prompt("Enter the data");
        if (itemToAdd.trim()){
            setTodoList([...todoList, {id: Math.random() , taskName : itemToAdd, isDone: false}])
    
        }
    }
    
    function deleteItemInTodoList(deleteId){
        setTodoList(todoList.filter(task => task.id != deleteId))
    }
    
    function deleteAllDoneTasks(){
        setTodoList(todoList.filter(task => task.isDone == false))
    }
    
    function changeDoneStatus(e,taskId){
        setTodoList(todoList.map((tasks)=> {
            if (tasks.id == taskId){
                return {...tasks,  isDone : e.target.checked}
            } 
            return tasks
        }
        ))
    }
    
    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    return {
        todoList,
        addItemToTodoList,
        deleteItemInTodoList,
        deleteAllDoneTasks,
        changeDoneStatus
    }
}

export default useTodoList;

