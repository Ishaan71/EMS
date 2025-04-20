import React from 'react'

const Taskform = () => {
  return (
    <>
    <div className=" px-10 h-full w-full bg-gray-800 ">
        <form className=' px-15 flex justify-around items-start gap-5'>
            <div className=" flex flex-col gap-3" id='left'>
            <div className="">
                <h3 className='ml-2 text-white font-bold '>Task Title</h3>
                <input type="text" placeholder='Enter Your Title' className='bg-[#3674B5] py-3 px-15 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white w-5/3' />
            </div>
            <div className="">
                <h3 className='text-white font-bold ml-2'>Date</h3>
                <input type="date" className='bg-[#3674B5] py-3 px-15 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white w-5/3' />
            </div>
            <div className="">
                <h3 className='text-white font-bold ml-2'>Assign To</h3>
                <input type="text" placeholder='Employee Name' className='bg-[#3674B5] py-3 px-15 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white w-5/3' />
            </div>
            <div className="">
                <h3 className='text-white font-bold ml-2'>Category</h3>
                <input type="text" placeholder='Design  Dev etc' className='bg-[#3674B5] py-3 px-15 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white w-5/3'/>
            </div>
            </div>
            <div className="flex flex-col ">
            <h3 className='text-white font-bold ml-2'>Description</h3>
            <textarea placeholder='desc' className='bg-[#3674B5] py-23 px-20 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white'></textarea>

            <button className='bg-[#3674B5] py-3 px-20 rounded-2xl placeholder:text-indigo-200 font-bold outline-none text-white mt-4'>Create Task</button>
        </div>
        </form>
        
    </div>
    </>
  )
}

export default Taskform