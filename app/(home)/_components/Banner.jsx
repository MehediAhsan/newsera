import React from 'react';
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => {
    return (
        <div className='md:grid grid-cols-3 gap-5 my-10'>
            <div className='col-span-2'>
                <BannerLeft />
            </div>
            <div className='col-span-1 max-md:mt-10'>
                <BannerRight />
            </div>
        </div>
    );
};

export default Banner;