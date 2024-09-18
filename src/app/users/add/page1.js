'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

export default function Registers() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' });
   const router= useRouter()
    useEffect(() => {
       
    }, [errors]);

    const regist = async(data) => {
     const res=await fetch('http://localhost:3000/api/users',{

            method: 'POST',
            
            body: JSON.stringify(data)
            

        })
        console.log(res)
        
        
        
        if(res)
        {
            router.push('/allusers')
        }else{
            alert('Registration Failed')
        }
    };

    const password = watch('password');

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f0f2f5' }}>
            <div className='row w-100 '>
                <div className="col-md-6 col-lg-4 bg-white p-5 shadow rounded mx-auto " style={{ backgroundColor: '#ffffff' }}>
                    <h2 className='text-center mb-4' style={{ color: '#007bff' }}>Create Account</h2>
                    <form onSubmit={handleSubmit(regist)} className=''>
                        <Form.Group className="mb-3 ">
                            <Form.Label className="fw-bold" style={{ color: '#333333' }}>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                isInvalid={!!errors.name}
                                {...register('name', { required: true })}
                            />
                            {errors.name && <Form.Text className="text-danger">Name is required</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold" style={{ color: '#333333' }}>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Choose a username"
                                isInvalid={!!errors.userName}
                                {...register('userName', { required: true, pattern: /^\S+$/ })}
                            />
                            {errors.userName?.type === 'required' && <Form.Text className="text-danger">Username is required</Form.Text>}
                            {errors.userName?.type === 'pattern' && <Form.Text className="text-danger">No spaces allowed in username</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold" style={{ color: '#333333' }}>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                isInvalid={!!errors.email}
                                {...register('email', { required: true, pattern: /^[a-zA-Z]{4,10}@gmail\.com|yahoo\.com$/ })}
                            />
                            {errors.email?.type === 'required' && <Form.Text className="text-danger">Email is required</Form.Text>}
                            {errors.email?.type === 'pattern' && <Form.Text className="text-danger">Enter a valid email address</Form.Text>}
                        </Form.Group>

                    
                        <button type="submit" className='btn btn-primary btn-lg w-100' style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Sign Up</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}
