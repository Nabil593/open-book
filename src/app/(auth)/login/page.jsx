"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegistrationPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLogin = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Login successful!");
        }

        console.log(res, error)
    }

    return (
        <div className='flex items-center justify-center flex-col space-y-4 mt-30'>
            <h2 className='text-3xl font-bold'>Login In</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' {...register("email", { required: "Email field is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' {...register("password", { required: "Password field is required" })} placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Log In</button>
                </fieldset>
            </form>
            <p>Dont have an account? <Link href={'/registration'}><span className='text-blue-300'>Sign Up</span></Link></p>
        </div>
    );
};

export default RegistrationPage;