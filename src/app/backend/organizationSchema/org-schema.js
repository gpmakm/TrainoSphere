import mongoose from 'mongoose';
const orgSchema=new mongoose.Schema({
    orgName:String,
    email:String,
    licenseNo:Number,
    doe:String,
    contactNo:Number
})
const orgmodel=new mongoose.model('orgmodel',orgSchema)
export default orgmodel;