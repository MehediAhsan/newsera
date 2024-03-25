'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='flex justify-center items-center mt-44'>
            <div
                className="md:w-4/12  rounded shadow flex flex-col justify-between p-3"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="text-orange-500">
                    <fieldset className="border-2 border-dotted border-gray-500 p-6">
                        <legend className="px-2 -mx-1 font-medium">Log In newsEra!</legend>

                        <label
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Mail
                        </label>
                        <input
                            {...register("email")}
                            required
                            type="email"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500"
                        />

                        <label
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Password
                        </label>
                        <input
                            {...register("password")}
                            required
                            type="password"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500"
                        />

                        <Link
                            className="block text-right text-xs text-orange-500 mb-4"
                            href="#"
                        >Forgot Password?</Link>

                        <button
                            type='submit'
                            className="w-full rounded bg-orange-500 text-orange-50 p-2 text-center font-bold hover:bg-orange-400"
                        >
                            Log In
                        </button>
                        <div className='text-center text-gray-300 my-5 text-sm'>--- Or Sign In With ---</div>
                        <div className='flex gap-7 justify-center items-center text-2xl mb-5'>
                            <FaGoogle className='text-red-500 cursor-pointer' />
                            <FaFacebook className='text-blue-500 cursor-pointer' />
                            <FaTwitter className='text-sky-500 cursor-pointer' />
                        </div>
                        <div className='text-sm text-gray-300 text-center'>Don&apos;t have an account please <Link href="/registration" className='text-blue-500 underline'>Sign Up</Link></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;