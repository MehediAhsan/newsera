import React from 'react';
import { ImGift } from "react-icons/im";

const Coupon = () => {
    return (
        <div className='text-sm text-center relative group'>
            <div className="animate-expanded"></div>
            <div className='grid grid-cols-5 gap-1'>
                <div className='bg-dark flex items-center p-2 rounded-s justify-center gap-3 text-white'><ImGift size={25} /> <h2>Gift Special</h2></div>
                <div className='bg-fifth col-span-4 p-2 rounded-e '><p>Wrap new offers/ gift every single day on Weekends - New Coupon code: <span className='text-primary drop-shadow-[0_35px_35px_#fff] text-lg font-semibold'>Happy2025</span> </p></div>
            </div>
        </div>
    );
};

export default Coupon;