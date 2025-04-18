import React from 'react';
import { FaFacebookF, FaGoogle, FaPinterest, FaRegPaperPlane, FaTwitter } from "react-icons/fa";

const Subscribe = () => {
    return (
        <div className='bg-[#111010] text-secondary grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-12 px-10'>
            <div className='flex gap-4 justify-center'>
                <FaRegPaperPlane className='text-4xl' />
                <div>
                    <h1 className='text-2xl font-semibold mb-2'>Signup For Newsletter</h1>
                    <p className='text-sm'>We’ll never share your email address with a third-party.</p>
                </div>
            </div>
            <div className="flex">
                <input type="text" className="w-full bg-transparent border border-primary pl-4 text-sm outline-0 rounded-tl-lg rounded-bl-lg text-black" placeholder="Your email address..." id="" />
                <input type="button" value="Subscribe" className="bg-primary p-3 rounded-tr-lg rounded-br-lg text-white font-semibold cursor-pointer" />
            </div>

            <div className='flex gap-5 justify-end'>
                <FaFacebookF />
                <span className='text-xs text-gray-500'>|</span>
                <FaTwitter />
                <span className='text-xs text-gray-500'>|</span>
                <FaGoogle />
                <span className='text-xs text-gray-500'>|</span>
                <FaPinterest />
            </div>
        </div>
    );
};

export default Subscribe;