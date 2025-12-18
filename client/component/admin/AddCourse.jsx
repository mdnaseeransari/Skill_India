import axios from "axios";
import React, { useState } from "react";

const AddCourse = () => {
    let[courseInput,setCourseInput]=useState({
    img:"",
    title:"",
    duration:"",
    price:"",
    students:"",
    rating:"",
    description:"",
    level:"",
    category:""
    })
    function handleCourseInput(e){
        setCourseInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:3000/admin/addCourse",
        {...courseInput, rating: Number(courseInput.rating),students: Number(courseInput.students)},
        {headers: {Authorization: `Bearer ${token}`}});
        alert("Course added successfully");
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
        console.log("Added Course:", res.data);
        }catch(err){
            console.error(err);
            alert(err.response?.data?.message ||"Something went wrong while adding course");
        }
    }
    return (
        <div className="bg-primary flex flex-col items-center pt-10 gap-2 px-4">
            <h1 className="text-primary text-4xl md:text-3xl sm:text-2xl font-bold">
                Add New Course
            </h1>

            <h2 className="text-secondary text-xl md:text-lg sm:text-base text-center">
                Create a new course for the platform
            </h2>

            {/* FORM START */}
            <form className="border border-color rounded p-6 w-full max-w-[600px] my-6" onSubmit={handleFormSubmit}>

                <h1 className="text-primary text-2xl md:text-xl sm:text-lg font-bold">
                    Course Details
                </h1>

                <h2 className="text-secondary text-xl md:text-lg sm:text-base pb-5">
                    Fill in the information for the new course
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
                >Add Course</button>

            </form>
        </div>
    );
};

export default AddCourse;
