import React from 'react'
import Login from './components/auth/login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/admindashboard'
import Signup from './components/auth/Signup'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer, Bounce, Slide } from 'react-toastify'
import ProtechtedRoutes from './components/protechtedRoutes'


const App = () => {
  return (
  <>

<ToastContainer
position='top-right'
theme='colored'
transition={Slide}
closeOnClick ={true}
autoClose={2000}
hideProgressBar={false}
pauseOnHover={true}
reverseOrder={true}
/>
  

    <Routes>
      <Route path='/employee' element={
        <ProtechtedRoutes>
        <Employeedashboard/> 
        </ProtechtedRoutes>
        
        } />
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/admindashboard' element={<Admindashboard/>}/>
    </Routes>
  </>
  )
}

export default App