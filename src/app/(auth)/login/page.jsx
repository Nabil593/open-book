import React from 'react';

const LoginPage = () => {
    return (
        <div className='flex items-center justify-center flex-col space-y-4 mt-40'>
            <h2 className='text-3xl font-bold'>Log In</h2>
            <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    );
};

export default LoginPage;