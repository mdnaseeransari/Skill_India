import express from "express";
import courses from "../models/course.js";
const courseRoutes=express.Router();
courseRoutes.get("/",async(req,res)=>{
    try {
        const coursesData = await courses.find();
        res.json(coursesData); 
    } catch (error) {
        console.log(error);
    }
})
courseRoutes.get("/:id",async(req,res)=>{
    try {
        const singleCourseData = await courses.findById(req.params.id);
        res.json(singleCourseData); 
    } catch (error) {
        console.log(error);
    }
})

export default courseRoutes; 