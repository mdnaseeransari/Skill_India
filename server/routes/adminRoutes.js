import express from "express";
import courses from "../models/course.js";
import {isAdminMiddleware, jwtAuthMiddleware } from "../jwt.js";
import users from "../models/user.js";

const adminRoutes=express.Router();
adminRoutes.get("/",jwtAuthMiddleware,isAdminMiddleware,(req,res)=>{

});

//  Add Course
adminRoutes.post("/addCourse",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
      const course = await courses.create(req.body);
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);



// Update Course
adminRoutes.put("/courses/:id",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
      const updated = await courses.findByIdAndUpdate(req.params.id,req.body,{ new: true });
      if (!updated) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(updated);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);


// Delete Course
adminRoutes.delete("/courses/:id",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
      const deleted = await courses.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json({ message: "Course deleted successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// routes/admin.js
adminRoutes.get("/users",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
      const allUsers = await users.find({ role: { $ne: "admin" } }).select("-password");
      res.json(allUsers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);


adminRoutes.get("/profile",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
         // req.user is set by JWT middleware
      const admin = await users.findById(req.user.id).select("-password");
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);



adminRoutes.delete("/users/:id",jwtAuthMiddleware,isAdminMiddleware,async (req, res) => {
    try {
      const user = await users.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Prevent admin from deleting another admin (optional but recommended)
      // if (user.role === "admin") {
      //   return res.status(403).json({ message: "Cannot delete admin user" });
      // }
      await users.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted successfully"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);



export default adminRoutes;