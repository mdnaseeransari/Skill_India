import axios from 'axios';
import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditCourse = () => {
    const loadedCourse = useLoaderData();
    const navigate=useNavigate();
    let[courseInput,setCourseInput]=useState({
    title: loadedCourse.title || "",
    duration: loadedCourse.duration || "",
    price: loadedCourse.price || "",
    students: loadedCourse.students || "",
    rating: loadedCourse.rating || "",
    description: loadedCourse.description || "",
    level: loadedCourse.level || "",
    category: loadedCourse.category || "",
    img: loadedCourse.img || "",
    })
    function handleCourseInput(e){
        setCourseInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:3000/admin/courses/${loadedCourse._id}`,
        {...courseInput, rating: Number(courseInput.rating),students: Number(courseInput.students)},
        {headers: {Authorization: `Bearer ${token}`}});
        alert("Course updated successfully");
        setCourseInput({
        img: "",
        title: "",
        duration: "",
        price: "",
        students: "",
        rating: "",
        description: "",
        level: "",
        category: "",
        });
        navigate("/admin/managecourse");
        }catch(err){
            console.error(err);
            alert("Failed to update course ");
        }
    }    
  return (
    <>
<div className="bg-primary flex flex-col items-center pt-10 gap-2 px-4">
            <h1 className="text-primary text-4xl md:text-3xl sm:text-2xl font-bold">
                Edit or Update the existing Course
            </h1>

            {/* FORM START */}
            <form className="border border-color rounded p-6 w-full max-w-[600px] my-6" onSubmit={handleFormSubmit}>

                <h1 className="text-primary text-2xl md:text-xl sm:text-lg font-bold">
                    Course Details
                </h1>

                <h2 className="text-secondary text-xl md:text-lg sm:text-base pb-5">
                    Fill in the information for the updated course
                </h2>

                {/* TITLE */}
                <label className="text-primary block">Title *</label>
                <input
                    value={courseInput.title}
                    name="title"
                    onChange={handleCourseInput}
                    type="text"
                    required
                    placeholder="Title of the course"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                />

                {/* PRICE + RATING */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Price *</label>
                        <input
                            value={courseInput.price}
                            name="price"
                            onChange={handleCourseInput}                           
                            required
                            placeholder="Price of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Rating *</label>
                        <input
                            value={courseInput.rating}
                            name="rating"
                            onChange={handleCourseInput}
                            type="number"
                            required
                            placeholder="Rating of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* STUDENTS + DURATION */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Student Enrolled *</label>
                        <input
                            value={courseInput.students}
                            name="students"
                            onChange={handleCourseInput}
                            type="number"
                            required
                            placeholder="student enrolled"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Duration *</label>
                        <input
                            value={courseInput.duration}
                            name="duration"
                            onChange={handleCourseInput}
                            type="text"
                            required
                            placeholder="Duration of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* LEVEL + CATEGORY */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Level *</label>
                        <input
                            value={courseInput.level}
                            name="level"
                            onChange={handleCourseInput}
                            type="text"
                            required
                            placeholder="Beginner/Intermediate/Advanced"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Category *</label>
                        <input
                            value={courseInput.category}
                            name="category"
                            onChange={handleCourseInput}
                            type="text"
                            required
                            placeholder="Category of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* DESCRIPTION */}
                <label className="text-primary block mt-4">Description *</label>
                <textarea
                    value={courseInput.description}
                    name="description"
                    onChange={handleCourseInput}
                    required
                    placeholder="Description of the course"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                    rows={3}
                />

                {/* IMG URL */}
                <label className="text-primary block mt-4">Img URL *</label>
                <input
                    value={courseInput.img}
                    name="img"
                    onChange={handleCourseInput}
                    type="text"
                    required
                    placeholder="Image URL"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                />

                {/* BUTTON */}
                <button type="submit" className="bg-accent-primary mt-5 w-full p-3 rounded text-primary hover:bg-accent-primary"
                >Update Course</button>

            </form>
        </div>    

    </>
  )
}

export default EditCourse
