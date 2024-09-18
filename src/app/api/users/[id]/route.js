import userModel from "@/app/_lip/models/user";
export async function DELETE (req,{params}){

    try {

        console.log(params.id);
        const users = await userModel.findByIdAndDelete(params.id)
        console.log(users);
        
        return new Response(JSON.stringify(users),{status:200})
        
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({message: 'Error deleting user'}), {status: 500})
        
    }
}

export async function PATCH (req,{params}){
    try {
        
        const users = await userModel.findByIdAndUpdate(params.id, req.body, {new: true})
        
        return new Response(JSON.stringify(users),{status:200})
    }catch (err){
        console.error(err);
        return new Response(JSON.stringify({message: 'Error updating user'}), {status: 500})
        
    }
}






