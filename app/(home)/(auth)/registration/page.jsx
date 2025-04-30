'use client'
import { showAlert } from '@/utils/sweetAlert';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const RegistrationPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);

    const onSubmit = async (formData) => {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            showAlert({
                title: "Error!",
                text: data.message || "Registration failed",
                icon: "error",
            });
        } else {
            showAlert({ title: "Success!", text: "Registration successful" });
            reset();
        }
    };

    return (
        <div className='flex justify-center items-center my-10'>
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
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500 bg-secondary dark:bg-white"
                        />

                        <label
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Mail
                        </label>
                        <input
                            {...register("email")}
                            required
                            type="email"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500 bg-secondary dark:bg-white"
                        />

                        <label
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Password
                        </label>
                        <div className='relative'>
                            <input
                                {...register("password")}
                                required
                                type={`${show ? 'text' : 'password'}`}
                                className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500 bg-secondary dark:bg-white"
                            />
                            {
                                show ? <IoIosEye className='absolute top-3 right-3 text-2xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} /> : <IoIosEyeOff className='absolute top-3 right-3 text-2xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} />
                            }
                        </div>

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
                        <div className='text-sm dark:text-gray-300 text-center'>Don&apos;t have an account please <Link href="/login" className='text-blue-500 underline'>Log In</Link></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;