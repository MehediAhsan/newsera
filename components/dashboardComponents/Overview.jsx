import React from 'react';
import { FaCarSide, FaCaravan } from 'react-icons/fa';
import { GiMountainRoad } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";

const Overview = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
            <div className="bg-[#FFE2E5] p-4 rounded-lg">
                <div className='flex justify-between items-center pb-3'>
                    <h1 className="font-medium text-[#FA5A7D]">Total News</h1>
                    <GiMountainRoad className='bg-[#FA5A7D] rounded-full text-2xl text-white p-1' />
                </div>
                <h1 className="font-medium text-gray-900 text-xl mb-2">
                    1000
                </h1>
                <div className="text-gray-700 pb-3 text-sm">
                    Maximum News 1200
                </div>
            </div>
            <div className="bg-[#FFF4DE] p-4 rounded-lg">
                <div className='flex justify-between items-center pb-3'>
                    <h1 className="font-medium text-[#FF947A]">Todays News</h1>
                    <FaCarSide className='bg-[#FF947A] rounded-full text-2xl text-white p-1' />
                </div>
                <h1 className="font-medium text-gray-900 text-xl mb-2">
                    100
                </h1>
                <div className="text-gray-700 pb-3 text-sm">
                    Number of Trip : 6
                </div>
            </div>
            <div className="bg-[#DCFCE7] p-4 rounded-lg">
                <div className='flex justify-between items-center pb-3'>
                    <h1 className="font-medium text-[#3CD856]">Users</h1>
                    <FaCaravan className='bg-[#3CD856] rounded-full text-2xl text-white p-1' />
                </div>
                <h1 className="font-medium text-gray-900 text-xl mb-2">
                    10
                </h1>
                <div className="text-gray-700 pb-3 text-sm">
                    Number of Stops : 5
                </div>
            </div>
            <div className="bg-[#F3E8FF] p-4 rounded-lg">
                <div className='flex justify-between items-center pb-3'>
                    <h1 className="font-medium text-[#BF83FF]">Idling Time</h1>
                    <MdElectricCar className='bg-[#BF83FF] rounded-full text-2xl text-white p-1' />
                </div>
                <h1 className="font-medium text-gray-900 text-xl mb-2">
                    20
                </h1>
                <div className="text-gray-700 pb-3 text-sm">
                    Number of Idling : 1
                </div>
            </div>
        </div>
    );
};

export default Overview;