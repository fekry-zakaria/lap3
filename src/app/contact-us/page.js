'use client'

import { signOut } from 'next-auth/react'


const ContactUS=()=> {
   const signOutGoogel=async()=>{
    await signOut({callbackUrl:'/login'})
  

    }
    return (<>
        
        <h1>
            SIGN OUT
        </h1>
        <button className="btn btn-danger" onClick={signOutGoogel}>Sign Out</button>
        </>
    
    )
    
}
// export const  revalidate=50

export default ContactUS;