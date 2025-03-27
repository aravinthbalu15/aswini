import React from 'react'
import NavBar from '../components/NavbarContainer/Navbar'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './router/Routes'
const App = () => {
  return (
    <div>

        <RouterProvider router={myRoutes}>
        <NavBar/>
        </RouterProvider>
      
    </div>
  )
}

export default App