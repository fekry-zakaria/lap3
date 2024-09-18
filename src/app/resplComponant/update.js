'use client'
import Button from '@mui/material/Button';


const UpdateUser=({id})=>{
    console.log(id);
   async  function update() {
      await  fetch(`http://localhost:3000/api/users/${id}`,{
            method:'PATCH'
           
        })
        
          }
    return (
        <>
         <Button variant="outlined"  onClick={()=> update()} >Upddate</Button>
        
        </>
    )

}
export default UpdateUser;
