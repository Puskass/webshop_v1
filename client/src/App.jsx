import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header component</h1>

{/* Outlet služi kao placeholder za komponente definirane u routeru */}
      <main>
        <Outlet /> 
      </main>
      
      <h1>Footer component</h1>
    </div>
  )
}

export default App