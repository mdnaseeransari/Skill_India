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
    <div className='flex justify-start items-center ml-4'>
        <h1 className='text-primary text-3xl'>Manage Courses</h1>
    </div>
    <div className='mt-4'>
   {courseList.map((value) => (
      <div
        key={value._id}
        className=" bg-primary  w-full mx-auto border border-color cursor-pointer flex justify-between items-center">
        <div className="m-4">
          <h1 className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">
            {value.title}
          </h1>
        </div>
        <div>
        <button className='mx-4 px-4 py-1 rounded text-button cursor-pointer bg-accent-primary' onClick={()=>navigate(`editcourse/${value._id}`)}>Edit</button>
        <button className='mx-4 px-4 py-1 rounded text-button cursor-pointer  bg-red-800' onClick={()=>handleDelete(value._id)}>Delete</button>
        </div>
      </div>
    ))}    
    </div>
    </div>
    </>
  )
}

export default ManageCourse
