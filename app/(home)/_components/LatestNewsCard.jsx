import Image from 'next/image';
import React from 'react';
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const LatestNewsCard = ({ item }) => {
    const myStyle = {
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#BBBBBB'
    }
    return (
        <div className='flex gap-4 pb-6'>
            <Image width={100} height={0} className='w-20 h-20 object-cover' src={item.img} alt="" />
            <div className='pb-10'>
                <h1 className='news-name mb-2'>{item.title}</h1>
                <div>
                    <Rating style={{ maxWidth: 60 }} value={4} itemStyles={myStyle} readOnly={true} />
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCard;