"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegistrationPage = () => {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(true);
    const [googleLoading, setGoogleLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleSignUp = async (data) => {

        const { email, name, photo, password } = data

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/login",
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Account created successfully!");
            router.push("/login");
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
        <div className='max-w-md mx-auto my-14 lg:px-0 px-3'>
            <div className=' flex items-center justify-center flex-col space-y-4 my-20 bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden py-8'>
                <h2 className='text-3xl font-bold'>Sign Up</h2>
                <div className='w-full max-w-xs space-y-4'>
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

                            <div className='relative'>
                                <label className="label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="input" name='password' {...register("password", { required: "Password field is required" })} placeholder="Password" />
                                <span className='absolute bottom-3.5 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>

                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className='btn w-full flex items-center justify-center gap-2'>{googleLoading ? <span className="loading loading-xs loading-spinner text-neutral"></span> : <FaGoogle />} Login with Google</button>
                    <p className='flex items-center justify-center'>Already have an account? <Link href={'/login'}><span className='text-blue-300'> Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;