import React from 'react';
import BannerLeft from './BannerLeft'

const Banner = () => {
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            <div className='col-span-2'>
                <BannerLeft />
            </div>
            <span className=''>sfdsd</span>
        </div>
    );
};

export default Banner;