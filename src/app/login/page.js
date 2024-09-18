
import { signIn } from "../next-auth/auth"

const Login=()=> {
    const goToGoogle= async()=>{
        'use server'
       await signIn('google',{
            redirectTo:'/'
        })
    }
           
    return(<>
        <h1>Login with google</h1>
           <form action={goToGoogle}>
            <button className="btn btn-dark">Login with Google</button>
            
           </form>
        
        
        
        </>)
    
}

export default Login;