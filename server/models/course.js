import mongoose from "mongoose";
const courseSchema=mongoose.Schema({
    img:{type:String},
    title:{type:String},
    time:{type:String},
    price:{type:String},
    students:{type:Number},
    rating:{type:Number},
    description:{type:String}
})

const courses=mongoose.model("course",courseSchema);
export default courses;

