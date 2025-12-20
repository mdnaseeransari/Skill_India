import React, { useState } from 'react'
import axios from "axios";
import { useLoaderData } from 'react-router-dom'

const ManageUser = () => {
    let initialUsersList=useLoaderData();
    const [userList, setUserList] = useState(initialUsersList);

async function handleDelete(userId) {
  const token = localStorage.getItem("token");
  if (!window.confirm("Are you sure you want to delete this user?")) return;
  try {
    await axios.delete(`http://localhost:3000/admin/users/${userId}`,{headers: {Authorization: `Bearer ${token}`}});
    alert("User deleted successfully");
    // Update UI
    setUserList(prev => prev.filter(user => user._id != userId));
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Delete failed");
  }
}    
  return (
    <>
    <br /><br />
    <div className='mx-10'>
        {
            userList.map((curr)=>{
                return(
                    <div
          key={curr._id}
          className='group relative bg-secondary w-full border border-color rounded-2xl flex justify-between items-center 
          p-6 mb-6 transition-all duration-500 hover:bg-section/50 hover:-translate-y-1 shadow-sm'
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
              {curr.fullName.charAt(0).toUpperCase()}
            </div>

            <div className="flex flex-col">
              <p className="text-primary font-bold text-xl lg:text-2xl tracking-tight group-hover:text-accent-primary transition-colors">
                {curr.fullName}
              </p>
              <p className="text-muted text-sm font-medium">Verified Member</p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={() => handleDelete(curr._id)}
              className='px-6 py-2.5 rounded-xl  font-semibold text-sm cursor-pointer 
              bg-red-500/10 border border-red-500/20 text-red-500 
              hover:bg-red-600 hover:text-white hover:border-transparent
              active:scale-90 transition-all duration-300 shadow-sm'
            >
              Remove Account
            </button>
          </div>
        </div>
                )
            })
        }
    </div>
<br></br>
    </>
  )
}

export default ManageUser