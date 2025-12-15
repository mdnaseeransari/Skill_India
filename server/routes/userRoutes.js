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
    const token = generateToken({id: plainUser._id, username: plainUser.email});
    console.log("token is:", token);
    res.json({
        message: "person added",
        token: token
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
        const token = generateToken({id: user._id, username: user.email});

        res.json({message: "Login successful",token});
        
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

userRoutes.get("/dashboard",jwtAuthMiddleware,async(req,res)=>{
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


export default userRoutes; 