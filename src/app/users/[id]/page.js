'use client';
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { getUsers, getUsersByid } from "@/app/_lip/date-api"; 


export async function  generatMetadata({params}){
  const user=  await getUsersByid(params.id)
  return {
    title:user.name
  }
}


export async function  generateStaticParams(){
     const users=await getUsers()
     return users.map(user=>({params:{id:user.id}}))
}

const Deatlis = ({ params }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await getUsersByid(params.id);
        setUsers(data);
    };
 

    useEffect(() => {
      

        fetchUsers();
       
    }, []);
    
   

    return (
        <>
            <h1>User Details</h1>
            {users.map(user => (
                <Box key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company?.name}, {user.company?.catchPhrase}, {user.company?.bs}</p>
                </Box>
            ))}
        </>
    );
}

export default Deatlis;