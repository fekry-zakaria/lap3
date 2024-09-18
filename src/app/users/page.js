'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { getUsers } from '../_lip/date-api';
const Users = () => {
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    useEffect(() => {
      

        fetchUsers();
    }, []);
   

    return (
        <>
            {users.map((user) => (
                <Box sx={{ minWidth: 275, mb: 2 ,mt:2  }} key={user.id}>
                    <Card variant="outlined" sx={{backgroundColor:'#d1b120;',color:'white'}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                User Information
                            </Typography>
                            <Typography variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                {user.username}
                            </Typography>
                            <Typography variant="body2">
                                Email: {user.email}
                                <br />
                                Phone: {user.phone}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={`https://${user.website}`} target="_blank">
                                Visit Website
                            </Button>
                            <Button size="small"  >
                         
                             <Link   href={`/users/${user.id}`}>View Details</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    );
}

export default Users;