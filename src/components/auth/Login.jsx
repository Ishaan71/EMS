import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth,db } from '../../firebase/firebaseconfig'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    const submitHandler = async(e)=>{
        e.preventDefault()

    let role = null
    
        try {
           const userCredential = await signInWithEmailAndPassword(auth,email,password)
           const user = userCredential.user

           if(user.emailVerified){
            const docref = doc(db,"users", user.uid)
            const docsnap = await getDoc(docref)
            if(docsnap.exists()){
                const userData = docsnap.data()
                 role = userData.role
                
            toast.success("Successfully Loged In!! " ,{
                position:'top-right'
               })
               
            } else {
                toast.error("User don't exist in database")
            }
            setTimeout(()=>{   
                if(role === "admin"){
                    navigate("/admindashboard", {replace : true})
                }
                else if (role === "employee"){
                    navigate('/employee' ,{ replace:true }) 
                    
                }
                else{
                    toast.error(error.message)
                }
               
            },2000)

           }
           else{
            toast.warning("Email verify karo")
           }
          
           
            

        } catch (error) {
            toast.error(error.message)
            
        }
        setEmail("")
        setPassword("")
    }
  return (
    <>
    <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="border-3 border-emerald-600 p-30 flex justify-center items-center ">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className=' flex flex-col justify-center items-center'>
              
                <input type="email" 
                required 
                placeholder='Enter Your Email' 
                className='border-2 border-emerald-600 rounded-full py-3 px-6 outline-none placeholder:text-gray-400 text-white font-bold'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />

                <input type="password" 
                required placeholder='Enter Your Password' className='border-2 border-emerald-600 rounded-full py-3 px-6 outline-none placeholder:text-gray-400 mt-4 text-white font-bold'
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                
                />
                <button className='border-emerald-600 border text-white px-6 py-3 rounded-full bg-emerald-600 w-65 mt-6 font-bold cursor-pointer'>Login</button>
            </form>
        </div>
 
    </div>
    </>
  )
}

export default Login