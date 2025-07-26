import React from 'react'



const TodoDetails = (props) => {
    return (
        <div className={`todo-details ${props.task.isDone ? 'completed' : ''}`}>
            <h1 className='todo-title'>{props.task.taskName}</h1>
            <p className='todo-description'>{props.task.description}</p>
            <div className="buttons">
                {props.task.isDone ? <button className="btn-complete" onClick={props.onComplete}>Completed</button> : <button className="btn-incomplete" onClick={props.onComplete}>Incomplete</button>}
                <button className="btn btn-primary" onClick={props.onEdit}>Edit</button>
                <button className="btn btn-danger" onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoDetails

