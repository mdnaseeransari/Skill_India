import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const AdminHomePage = () => {
    const navigate=useNavigate();
    const user=useLoaderData();

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/Login",{ replace: true }); 
  };
  return (
    <>
    <div className="bg-primary min-h-screen p-6">
      <div className="max-w-6xl mx-auto mb-10">
        {/*  Dashboard Header */}
        <div className="border-color border bg-secondary p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer m-4">
          <div className="flex items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180"
              alt="profile"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h2 className="text-2xl font-bold text-primary">{user.fullName}</h2>
              <p className="text-secondary text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-accent-secondary w-full md:w-auto px-6 py-2 rounded-xl  text-button transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    <div className='flex  justify-evenly items-center'>
        <div className='rounded-xl bg-secondary max-w-[350px] w-full  border border-color flex flex-col gap-10 pb-4'>
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

        <div className='rounded-xl bg-secondary max-w-[350px] w-full  border border-color flex flex-col gap-10 pb-4'>
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
    </div>
    </>
  )
}

export default AdminHomePage
