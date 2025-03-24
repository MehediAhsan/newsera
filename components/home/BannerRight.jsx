import Image from 'next/image';
import React from 'react';

const BannerRight = () => {
    const items = [
        {
            title: "AI Innovation",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "Bringing AI benefits to everyone. Google's mission has always been to organize the world's information and make it universally accessible and useful."
        },
        {
            title: "Tech Breakthrough",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "Discover how new technologies are shaping the future of industries, from AI to quantum computing."
        },
        {
            title: "Sustainable Future",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "Learn how AI and green technologies are working together to create a more sustainable planet."
        },
        {
            title: "Space Exploration",
            img: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "AI-driven missions are expanding our reach into space. Discover the latest advancements in space technology."
        },
    ]
    return (
        <div className=''>
            <h1 className='text-primary'>Recent News</h1>
            <div className='h-96 overflow-y-auto'>
                {
                    items.map((item, index) => (
                        <div key={index} className='flex gap-4 my-4 pr-4'>
                            <Image
                                src={item.img}
                                className="h-28 w-28 object-cover"
                                alt=""
                                height={100}
                                width={100}
                            />
                            <div>
                                <h1 className='text-gray-100'>{item.title}</h1>
                                <p className='text-xs text-muted mt-2'>{item.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BannerRight;