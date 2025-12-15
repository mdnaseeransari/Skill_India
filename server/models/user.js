import mongoose from "mongoose";
// import bcrypt from "bcrypt";
const userSchema=mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    selectedCode:{type:Number,required:true},
    phoneNumber:{type:Number,required:true},
    address:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin"],default:"user"}
})


// userSchema.pre("save", async function () {
//     const person = this;

//     if (!person.isModified("password")) return;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(person.password, salt);
//     person.password = hashedPassword;
// });



userSchema.methods.comparePassword=function(candidatePassword){
    // try {
    //     const isMatch=await bcrypt.compare(candidatePassword,this.password);
    //     return isMatch;
    // } catch (error) {
    //     throw error;
    // }
    if(candidatePassword==this.password)return true;
    return false;
}
const users=mongoose.model("user",userSchema);
export default users;