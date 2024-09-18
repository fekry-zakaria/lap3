
import userModel from '@/app/_lip/models/user'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default function Registers() {
    
   async function CreateNewTodo(formData){
        'use server'
        
 const name= formData.get('name')
 const userName=  formData.get('username')
 const email=   formData.get('email')
await userModel.create({
    name,
    userName,
    email,
 })

 revalidatePath('/allusers')

 redirect('/allusers')



    }
    

    return (
        <>
          <div>
            <form action={CreateNewTodo}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
    
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      );
}
