import express from "express";

import {jwtAuthMiddleware} from "../jwt.js";
import {generateToken} from "../jwt.js";
import users from "../models/user.js";
const userRoutes=express.Router();

userRoutes.post("/signup", async (req, res) => {
    const existingUser = await users.findOne({ email:req.body.email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please login."
      });
    }
    const savedData = await users.create(req.body);
    const plainUser = savedData.toObject();
    const token = generateToken({id: plainUser._id, email: plainUser.email,role:plainUser.role});
    console.log("token is:", token);
    res.json({
        message: "person added",
        token: token,
        role:plainUser.role
    });
});

userRoutes.post("/login",async(req,res)=>{
    try {
        const{username,password}=req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password both are required" });}
        const user=await users.findOne({email:username});
        const isMatch = user && await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const token = generateToken({id: user._id, email: user.email,role:user.role});

        res.json({message: "Login successful",token, role: user.role});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Server Error"});
    }

})

// userRoutes.get("/",jwtAuthMiddleware,async(req,res)=>{
//     try {
//         const data=await Person.find();
//         console.log("data fetched");
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:"Internal server Error"});     
//     }
// })

userRoutes.get("/userdata",jwtAuthMiddleware,async(req,res)=>{
    try {
        const userData=req.user;
        console.log("user Data:",userData);
        const userId=userData.id;
        const user=await users.findById(userId);
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server Error"});     
    }

})

userRoutes.get("/enrolledcourses",jwtAuthMiddleware,async (req, res) => {
    try {
      const user = await users.findById(req.user.id).populate("enrolledCourses.course");
      res.json(user.enrolledCourses);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch enrolled courses" });
    }
  }
);

userRoutes.post("/enroll",jwtAuthMiddleware, async (req, res) => {
    try {
        const { courseId } = req.body;
        const user = await users.findById(req.user.id);
        const alreadyEnrolled = user.enrolledCourses.some((c) => c.course.toString() === courseId);
        if (alreadyEnrolled) {
          return res.status(409).json({ message: "Already enrolled" });
        }
        user.enrolledCourses.push({
          course: courseId,
          progress: 0,
        });
        await user.save();
        res.status(201).json({ message: "Enrolled successfully" });
    } catch (error) {
        console.log("error in enrolling the course",error);
        res.status(500).json({message: "Server error while enrolling course"});
    }
});


// Update progress for a specific course of a logged-in user
userRoutes.put("/progress", jwtAuthMiddleware, async (req, res) => {
  try {
    const { courseId, progress } = req.body; //  Extract courseId and progress from request body
    if (!courseId || progress === undefined) {//  Validation: both courseId and progress must be provided
      return res.status(400).json({message: "courseId and progress are required"});
    }
    if (progress < 0 || progress > 100) {  //  Validation: progress must be between 0 and 100
      return res.status(400).json({message: "Progress must be between 0 and 100"});
    }
    const user = await users.findById(req.user.id);    //  Find the logged-in user using ID from JWT middleware
    if (!user) {    // If user does not exist (very rare case)
      return res.status(404).json({ message: "User not found" });
    }
    const enrolledCourse = user.enrolledCourses.find(    //  Find the enrolled course inside user's enrolledCourses array
      (c) => c.course.toString() === courseId
    );
    if (!enrolledCourse) {    // If user is not enrolled in this course
      return res.status(404).json({
        message: "Course not enrolled",
      });
    }
    enrolledCourse.progress = progress;    // Update progress for the specific course
    await user.save();    // Save changes to database
    res.status(200).json({message: "Progress updated successfully",courseId,progress});   //  Send success response
  } catch (error) {
    //  Catch any unexpected errors
    console.error("Progress update error:", error);
    res.status(500).json({
    message: "Server error while updating progress"});
  }
});



export default userRoutes; 