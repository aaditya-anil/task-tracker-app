import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Dashboard/App.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import TodoDetails from './Components/TodoDetails.jsx'
import CreateTodoPopUp from './Components/CreateTodoPopUp.jsx'
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/Register', element: <Register /> },
  { path: '/popup', element: <CreateTodoPopUp /> },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
