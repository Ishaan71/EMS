import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseconfig'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

const protechtecRoutes = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const loadwork = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
    
      return () => loadwork()
    }, [])
    
if(loading){
  return <h2 className='text-green-400 font-bold'>Loading...</h2>
}
    if(!user || !user.emailVerified){
      return  <Navigate to={"/"} replace/>
    }
  return children
}

export default protechtecRoutes