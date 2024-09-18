import mongoose from "mongoose";

 const UserSchema=mongoose.Schema({
    name: String,
    userName: String,
    email: String,
   
    
})

const userModel= mongoose.models.user|| mongoose.model('user', UserSchema);

export default userModel;