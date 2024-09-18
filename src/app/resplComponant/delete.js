'use client'
import Button from '@mui/material/Button';

const DeleteUser=({id})=>{
    console.log(id);
   async  function dalet() {
      await  fetch(`http://localhost:3000/api/users/${id}`,{
            method:'DELETE'
        })
           
          }
    return (
        <>
         <Button variant="outlined" onClick={()=> dalet()} >DELETE</Button>
        
        </>
    )

}
export default DeleteUser;
