import mongoose from "mongoose";
const courseSchema=mongoose.Schema({
    img:{type:String},
    title:{type:String},
    duration:{type:String},
    price:{type:String},
    students:{type:Number},
    rating:{type:Number},
    description:{type:String},
    level:{type:String},
    category:{type:String}
})

const courses=mongoose.model("course",courseSchema);
export default courses;

