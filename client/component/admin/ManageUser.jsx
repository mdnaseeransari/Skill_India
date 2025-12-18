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
    <div>
        {
            userList.map((curr)=>{
                return(
                    <div key={curr._id} className='bg-primary  w-full  border border-color cursor-pointer flex justify-between items-center p-4'>
                        <p className="text-primary font-bold text-lg sm:text-xl lg:text-2xl ">{curr.fullName}</p>
                        <button onClick={()=>handleDelete(curr._id)} className='mx-4 px-4 py-1 rounded text-button cursor-pointer  bg-red-800'>Remove User</button>
                    </div>
                )
            })
        }
    </div>

    </>
  )
}

export default ManageUser
