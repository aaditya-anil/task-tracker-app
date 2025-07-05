import React from 'react'
import TodoList from './Components/TodoList'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='page'>
      <Navbar />
      <TodoList />
    </div>
  )
}

export default App