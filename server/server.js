import express from "express";
import connectDb from "./connectDb.js";
import cors from "cors";
import courseRoutes from "./routes/courses.js";
import userRoutes from "./routes/userRoutes.js";
const app=express();
connectDb();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/courses",courseRoutes);

app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log("server is running");
})