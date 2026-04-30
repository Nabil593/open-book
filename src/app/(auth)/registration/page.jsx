"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegistrationPage = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleSignUp = async (data) => {

        const {email, name, photo, password} = data

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/login",
        });
        
        if(error) {
            toast.error(error.message);
        } else {
            toast.success("Account created successfully!");
            router.push("/login");
        }
    }


    return (
        <div className='flex items-center justify-center flex-col space-y-4 mt-30'>
            <h2 className='text-3xl font-bold'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Name</label>
                    <input type="text" className="input" {...register("name", { required: "Name field is required" })} placeholder="Name" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" {...register("photo", { required: "Photo field is required" })} placeholder="Photo url" />
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' {...register("email", { required: "Email field is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' {...register("password", { required: "Password field is required" })} placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </form>
            <p>Already have an account? <Link href={'/login'}><span className='text-blue-300'>Login</span></Link></p>
        </div>
    );
};

export default RegistrationPage;