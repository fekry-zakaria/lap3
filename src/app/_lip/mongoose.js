import mongoose from "mongoose";

export function connectDb(){
    mongoose.connect('mongodb://127.0.0.1:27017/users').then(()=>{
        console.log('connect is sucssful');
    }).catch((err)=>{
        console.log(err);
    })
}