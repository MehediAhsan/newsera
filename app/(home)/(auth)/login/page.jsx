import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <div className='flex justify-center items-center mt-44'>
            <div
                className="md:w-4/12  rounded shadow flex flex-col justify-between p-3"
            >
                <form className="text-orange-500">
                    <fieldset className="border-2 border-dotted border-gray-500 p-6">
                        <legend className="px-2 italic -mx-2">Welcome newsEra!</legend>
                        
                        <label
                            for="email"
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Mail
                        </label>
                        <input
                            required=""
                            type="email"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500"
                        />
                        <label
                            for="password"
                            className="text-xs font-bold after:content-['*'] after:text-red-400"
                        >Password
                        </label>
                        <input
                            required=""
                            type="password"
                            className="w-full p-2 mb-4 mt-1 outline-none ring-none focus:ring-2 focus:ring-orange-500"
                        />
                        <Link
                            className="block text-right text-xs text-orange-500 mb-4"
                            href="#"
                        >Forgot Password?</Link>
                        <button
                            className="w-full rounded bg-orange-500 text-orange-50 p-2 text-center font-bold hover:bg-orange-400"
                        >
                            Log In
                        </button>
                        <div className='flex gap-7 justify-center items-center text-2xl mt-10 mb-5'>
                            <FaGoogle className='text-red-500'/>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-sky-500'/>
                        </div>
                        <div className='text-sm text-gray-300 text-center'>Don not have an account please <Link href="/" className='text-blue-500 underline'>Sign Up</Link></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;