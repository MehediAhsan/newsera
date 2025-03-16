'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const RegistrationPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {
        console.log(formData);
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <div className='flex justify-center items-center mt-44'>
            <div
                className="md:w-7/12 lg:w-4/12  rounded shadow flex flex-col justify-between p-3"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="text-orange-500">
                    <fieldset className="border-2 border-dotted border-gray-500 p-6">
                        <legend className="px-2 -mx-1 font-medium">Sign Up newsEra!</legend>

                        <label
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Name
                        </label>
                        <input
                            {...register("name")}
                            required
                            type="name"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500"
                        />

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
                            Sign Up
                        </button>
                        <div className='text-center text-gray-400 my-5 text-sm'>--- Or Sign Up With ---</div>
                        <div className='flex gap-7 justify-center items-center text-2xl mb-5'>
                            <FaGoogle className='text-red-500 cursor-pointer' />
                            <FaFacebook className='text-blue-500 cursor-pointer' />
                            <FaTwitter className='text-sky-500 cursor-pointer' />
                        </div>
                        <div className='text-sm text-gray-300 text-center'>Don&apos;t have an account please <Link href="/login" className='text-blue-500 underline'>Log In</Link></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;