import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='grid grid-cols-2 place-items-center min-h-[67vh]'>
        <div className='rounded-xl bg-primary max-w-[350px] w-full  border border-color flex flex-col gap-10 pb-4'>
            <div className='flex justify-center items-center border-b border-color rounded-t-xl p-2'>
            <h1 className='text-primary font-bold text-lg sm:text-xl lg:text-2xl'>Manage Courses</h1>
            </div>
            <div className='flex justify-center items-center'>
            <p className='text-secondary text-sm sm:text-base'>update or delete existing courses</p>
            </div>
            <div  className='flex justify-center items-center'>
            <button className='mx-4 px-4 py-3 rounded-xl text-button cursor-pointer hover-bg-accent-primary bg-accent-primary w-full' 
            onClick={()=>navigate("managecourse")}>Click to manage Courses</button>
            </div>
        </div>

        <div className='rounded-xl bg-primary max-w-[350px] w-full  border border-color flex flex-col gap-10 pb-4'>
            <div className='flex justify-center items-center border-b border-color rounded-t-xl p-2'>
            <h1 className='text-primary font-bold text-lg sm:text-xl lg:text-2xl '>Manage Users</h1>
            </div>
            <div className='flex justify-center items-center'>
            <p className='text-secondary text-sm sm:text-base'>View or delete users</p>
            </div>
            <div  className='flex justify-center items-center'>
            <button onClick={()=>navigate("manageuser")} className='mx-4 px-4 py-3 rounded-xl text-button cursor-pointer hover-bg-accent-primary bg-accent-primary w-full'>Click to manage Users</button>
            </div>
        </div>


    </div>
    </>
  )
}

export default AdminHomePage
