import Image from 'next/image';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const Card = ({img, height}) => {
    return (
        <div className='relative group'>
            <div className="animate-expanded"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black/10 z-40 w-full"></div>
            <div className='absolute z-50 bottom-4 left-4 flex items-center gap-2'><span className='bg-dark text-secondary px-2 py-0.5 font-semibold text-sm uppercase'>Title</span><p className='text-xs text-secondary flex gap-1'><FaCalendar/> October 24th,2025</p></div>
            <Image alt='Image' loading='lazy' src={img} height={500} width={1000} className={`w-full object-cover ${height}`} />
        </div>
    );
};

export default Card;