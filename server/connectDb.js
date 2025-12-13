import mongoose from "mongoose";
// import courses from "./models/course.js";
async function connectDb() {
    try {
        await mongoose.connect("mongodb+srv://amityuvraj33399_db_user:10GEtCOn24bDtgkZ@cluster0.rtdlcep.mongodb.net/skill_india_db");
        console.log("MongoDb connected");
        // courses.insertMany(courseList);
    } catch (error) {
        console.log("Error in connecting mongoDb",error.message);
        process.exit(1);
    }
}
export default connectDb;