import express from "express";
import connectDb from "./connectDb.js";
import cors from "cors";
import courseRoutes from "./routes/courses.js";
const app=express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDb();

app.use("/courses",courseRoutes);
app.listen(3000,()=>{
    console.log("server is running");
})