import axios from 'axios';
import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const ManageCourse = () => {
    const initialCourses = useLoaderData();
    const navigate=useNavigate();
    const [courseList, setCourseList] = useState(initialCourses);
    async function handleDelete(id){
        const confirmDelete = window.confirm("Are you sure you want to delete this course?");
        if (!confirmDelete) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/admin/courses/${id}`,
            {headers: {Authorization: `Bearer ${token}`}});
            // Remove deleted course from UI
            setCourseList((prev) =>prev.filter((course) => course._id !== id));
            alert("Course deleted successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to delete course");
        }
    }
  return (
    <>
    <div className='bg-secondary'>
    <div className='flex justify-end items-center'>
        <button className='mr-4 mt-4 px-4 py-3 rounded-xl text-button cursor-pointer bg-green-700' onClick={()=>navigate("addcourse")}>+ Add Course</button>
    </div>
    <div className='flex justify-start items-center ml-10'>
        <h1 className='text-primary text-3xl font-bold'>Manage Courses</h1>
    </div>
    <div className=' m-10'>
   {courseList.map((value) => (
      <div
  key={value._id}
  className="group relative bg-secondary w-full border border-color rounded-2xl flex justify-between items-center 
             p-6 mb-6 transition-all duration-500 hover:bg-section/50 hover:-translate-y-1 shadow-sm"
>
  {/* Subtle Glow Effect on Hover */}
  <div className="absolute inset-0 rounded-2xl bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

  <div className="flex items-center gap-6 relative z-10">
    

    <div className="flex flex-col">
      <h1 className="text-primary font-bold text-xl lg:text-2xl tracking-tight group-hover:text-accent-primary transition-colors">
        {value.title}
      </h1>
      <p className="text-muted text-sm font-medium">Active Curriculum</p>
    </div>
  </div>

  <div className="flex items-center gap-2 sm:gap-4 relative z-10">
    <button 
      className='px-5 py-2 rounded-xl text-white font-semibold text-sm cursor-pointer 
                 bg-accent-primary hover:bg-opacity-90 active:scale-90 transition-all shadow-md'
      onClick={() => navigate(`editcourse/${value._id}`)}
    >
      Edit
    </button>
    
    <button 
      className='px-5 py-2 rounded-xl font-semibold text-sm cursor-pointer 
                 bg-red-500/10 border border-red-500/20 text-red-500 
                 hover:bg-red-600 hover:text-white hover:border-transparent
                 active:scale-90 transition-all duration-300 shadow-sm'
      onClick={() => handleDelete(value._id)}
    >
      Delete
    </button>
  </div>
</div>
    ))}    
    </div>
    </div><br /><br />
    </>
  )
}

export default ManageCourse