import React from 'react'
import { useState } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth,storage } from '../../firebase/firebaseconfig'
import db from '../../firebase/firebaseconfig'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'



 
const Signup = () => {
    const [emailsent, setEmailsent] = useState(false)
    const [Name, setName] = useState("")
    const [Last, setLast] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    
    

    const submitHandler = async(e)=>{
        e.preventDefault()

        if(!file){
            toast.warning("file upload karo please")
            return
        }

        try {
            // await createUserWithEmailAndPassword(auth,Email,Password)
            // const user = auth.currentUser
            // console.log(user)
            const userCredential = await createUserWithEmailAndPassword(auth,Email,Password)
            const user = userCredential.user
            console.log(user)


            if(user){
                await sendEmailVerification(user)
                toast.success("Email Sended To You", {
                    position: "top-right",
                  });
                  setEmailsent(true)    

                  const storageRef = ref(storage,`/document${user.uid}/${file.name}`)
                  await uploadBytes(storageRef,file)
                  const fileURL = await getDownloadURL(storageRef)
                  console.log("File uploaded, URL:", fileURL)

                await setDoc(doc(db,"users" , user.uid),{
                    Email:user.email,
                    firstName: Name,
                    lastName: Last,
                    role : "employee",
                    isVerifiedByAdmin: false, // Ye future admin approval ke liye useful hoga
                    documentURL: fileURL

                })
                 

            

        
                setName("")
                setLast("")
                setEmail("")
                setPassword("")
                setFile(null)
        

              }

                    
              
            
            
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
            
        }

        
      

    }

    const checkverification = async ()=>{
        await auth.currentUser.reload()
        if(auth.currentUser.emailVerified){
            toast.success("Email verify hoagaya chalo login pe")
            setTimeout(() => {
                navigate("/login" ,{ replace:true})
            }, 2000);
            

        }
        else{
            toast.warning("verify nahi hua abhi tak")
        }
    }

  return ( 
    <>

    <div className="bg-gray-800 h-screen w-screen flex flex-col justify-center  items-center ">
        { !emailsent ? (
              <form className=' max-w-md space-y-4'  onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <div>
                    <h3 className='text-white font-bold'> First Name</h3>
                    <input className='text-black font-bold bg-white px-5 py-2 rounded outline-none w-full ' value={Name} onChange={(e)=>{
                        setName(e.target.value)
                    }} required  type="text" />
                </div>
                <div>
                    <h3 className='text-white font-bold'> Last Name</h3>
                    <input className='text-black font-bold bg-white px-5 py-2 rounded outline-none w-full   ' required type="text" value={Last} onChange={(e)=>{
                        setLast(e.target.value)
                    }} />
                </div>
                <div>
                    <h3 className='text-white font-bold'>Email</h3>
                    <input className='text-black font-bold bg-white px-5 py-2 rounded outline-none w-full ' value={Email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required type="email" />
                </div>
                <div>
                    <h3 className='text-white font-bold'>Password</h3>
                    <input className='text-black font-bold bg-white px-5 py-2 rounded outline-none w-full  ' value={Password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required  type="password" />
                    <div>
                    <h3 className='text-white font-bold'>Upload documet (ID or Prove) </h3>
                    <input type="file" className='text-black font-bold bg-transparent px-5 py-2 rounded outline-white ' onChange={(e)=>{
                        setFile(e.target.files[0])
                    }}/>

                    </div>
                </div>
                <button className='text-white font-bold py-2 mt-4 rounded w-full bg-emerald-600 cursor-pointer'>Submit</button>
                    <p className='text-white text-center'>Already have an account ? <Link className='text-white font-bold' to={"/login"}>Login here</Link></p>
            </form>

        ):(
            
        <div className="text-center">
        <h3 className="text-white text-lg mb-4">Click button after verify</h3>
        <button onClick={checkverification}  className='bg-blue-500 text-white px-5 py-2 rounded'> Click </button>
    </div>
        )}
        
      





    </div>

 
    </>
  )
}

export default Signup