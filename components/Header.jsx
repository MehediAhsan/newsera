import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='container mx-auto pt-4 flex justify-between'>
            <span className='flex items-center gap-1'>
                <FaPhone className='text-primary'></FaPhone> +888 777 788
            </span>
            <div>
                <span className=' flex items-center gap-3 text-lg'>
                    <FaFacebook></FaFacebook>
                    <FaYoutube></FaYoutube>
                    <FaInstagram></FaInstagram>
                </span>
            </div>
        </div>
    );
};

export default Header;