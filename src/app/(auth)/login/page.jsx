"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegistrationPage = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [googleLoading, setGoogleLoading] = useState(false);

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
    }

    const handleGoogle = async () => {
        setGoogleLoading(true)
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (error) {
            toast.error();
        } else {
            toast.success("Login successful!");
        }
    }

    return (
        <div className='flex items-center justify-center flex-col space-y-4 my-20'>
            <h2 className='text-3xl font-bold'>Login In</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' {...register("email", { required: "Email field is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <div className='relative'>
                        <label className="label">Password</label>
                        <input type={showPassword ? "text" : "password"} className="input" name='password' {...register("password", { required: "Password field is required" })} placeholder="Password" />
                        <span className='absolute bottom-3.5 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <button className="btn btn-neutral mt-4">Log In</button>
                    <div className="divider">OR</div>
                </fieldset>
            </form>
            <button onClick={handleGoogle} className='btn'>{googleLoading ? <span className="loading loading-xs loading-spinner text-neutral"></span> : <FaGoogle />} Login with Google</button>
            <p>Dont have an account? <Link href={'/registration'}><span className='text-blue-300'>Sign Up</span></Link></p>
        </div>
    );
};

export default RegistrationPage;