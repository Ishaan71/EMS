import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer,Bounce} from 'react-toastify'
import { auth, } from '../firebase/firebaseconfig'
import { signOut } from 'firebase/auth'


const Header = () => {

  const navigate = useNavigate()
  const logoutHandler = async()=>{
    
     setTimeout(async()=>{
      await signOut(auth)
      navigate('/login' ,{replace:true})
     },2000)
   
    toast.error("Logging Out Successfully")
  }

  return (
<>

<div className="flex justify-between items-center w-full  p-8">
    <h1 className='text-white font-bold text-2xl'>Hello <br /><span className='text-orange-300 text-5xl font-sans'>Faisal 👋</span></h1>
    <button className='bg-red-600 font-bold  text-white px-5 py-2 rounded cursor-pointer' onClick={logoutHandler}>Logout</button>
</div>

</>
  )
}

export default Header