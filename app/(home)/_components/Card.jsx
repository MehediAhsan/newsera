import Image from 'next/image';
import React from 'react';

const Card = ({img, height}) => {
    return (
        <div className='relative group'>
            <div className="animate-expanded"></div>
            <Image alt='' src={img} height={100} width={1000} className={`w-full object-cover ${height}`} />
        </div>
    );
};

export default Card;