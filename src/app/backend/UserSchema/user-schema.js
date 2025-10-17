import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    aadharNo:Number,
    dob:String,
    contactNo:Number
})
const usermodel = mongoose.models.usermodel || mongoose.model("usermodel", userSchema);
export default usermodel;
