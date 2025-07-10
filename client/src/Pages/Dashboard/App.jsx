import React from 'react'
import TodoList from '@/Components/TodoList.jsx'
import Navbar from '@/Components/Navbar.jsx'
import './index.css'

const App = () => {
  return (
    <div className='page'>
      <Navbar />
      <TodoList />
    </div>
  )
}

export default App