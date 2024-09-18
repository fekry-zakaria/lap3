import userModel from "@/app/_lip/models/user";
import { connectDb } from "@/app/_lip/mongoose";
import { schame } from "./layer";

connectDb()
export async function GET (){
    try {
        const user =await userModel.find()
        return new Response(JSON.stringify(user),{status:200})
        
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({message: 'Error fetching users'}), {status: 500})
        
    }

 }


 export async function POST (request){
    const req = await request.json()
    try {

        

       const valditLayer= schame.safeParse(req)
       if (!valditLayer.success) {
        return new Response(JSON.stringify({message: valditLayer.error.errors}), {status: 500})
       }


        
        const user = await userModel.create(req)
        return new Response(JSON.stringify(user),{status:201})
        
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({message: 'Error creating user'}), {status: 500})
        
    }

 }



