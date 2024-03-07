import Image from 'next/image';
import React from 'react';

const BannerRight = () => {
    const items = [
        {
            title: "Hello World",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: 'Bringing the benefits of AI to everyone. Googles mission has always been to organize the worlds information and make it universally accessible and useful. We ...'
        },
        {
            title: "Hello World",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: 'Bringing the benefits of AI to everyone. Googles mission has always been to organize the worlds information and make it universally accessible and useful. We ...'
        },
        {
            title: "Hello World",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: 'Bringing the benefits of AI to everyone. Googles mission has always been to organize the worlds information and make it universally accessible and useful. We ...'
        },
        {
            title: "Hello World",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: 'Bringing the benefits of AI to everyone. Googles mission has always been to organize the worlds information and make it universally accessible and useful. We ...'
        },
    ]
    return (
        <div className=''>
            <h1 className='text-primary'>Recent News</h1>
            <div className='h-96 overflow-scroll'>
                {
                    items.map((item, index) => (
                        <div key={index} className='flex gap-4 my-4'>
                            <Image
                                src={item.img}
                                className="animate-fade-in block h-28 w-28 scale-100 transform object-cover object-center opacity-100 transition duration-300"
                                alt=""
                                height={300}
                                width={300}
                            />
                            <div>
                                <h1>{item.title}</h1>
                                <p className='text-xs'>{item.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BannerRight;