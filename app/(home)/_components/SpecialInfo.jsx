import React from 'react';
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";
import { FaMoneyBill1 } from "react-icons/fa6";

const SpecialInfo = () => {
    return (
        <div className='border p-8 flex flex-col gap-8'>
            <div className='flex items-center text-secondary gap-3 border-b pb-6'>
                <FaRegFileAlt size={32} className='text-third' />
                <div>
                    <h2 className='uppercase text-sm font-medium'>free delivery</h2>
                    <p className='text-third text-xs'>On Order Over</p>
                </div>
            </div>
            <div className='flex items-center text-secondary gap-3 border-b pb-6'>
                <AiOutlineFileProtect size={32} className='text-third' />
                <div>
                    <h2 className='uppercase text-sm font-medium'>order projection</h2>
                    <p className='text-third text-xs'>On Order Over</p>
                </div>
            </div>
            <div className='flex items-center text-secondary gap-3 border-b pb-6'>
                <BsFillGiftFill size={32} className='text-third' />
                <div>
                    <h2 className='uppercase text-sm font-medium'>promotion gift</h2>
                    <p className='text-third text-xs'>On Order Over</p>
                </div>
            </div>
            <div className='flex items-center text-secondary gap-3'>
                <FaMoneyBill1 size={32} className='text-third' />
                <div>
                    <h2 className='uppercase text-sm font-medium'>money back</h2>
                    <p className='text-third text-xs'>On Order Over</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialInfo;