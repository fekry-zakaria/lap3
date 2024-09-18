
import { Box, Card, CardContent, Typography } from "@mui/material"
import DeleteUser from "../resplComponant/delete"
import UpdateUser from "../resplComponant/update"
const { GET } = require("../api/users/route")

const  Allusers= async()=>{
   const res=await GET()
  const data = await res.json() 

   
  
    return(
        <>
              {data.map((user) => (
                    <Box sx={{ minWidth: 275, mb: 2 }} key={user.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.name}
                                </Typography>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Email: {user.email}
                                </Typography>
                                
                                <DeleteUser  id={user._id} />
                                <UpdateUser 
                                 initialName={user.name}
                                 initialEmail={user.email}
                                 id={user._id}
                                 

                                 
                                />

                               
                            </CardContent>
                        </Card>
                    </Box>
                ))}
             
        </>
    )
}

export default Allusers;