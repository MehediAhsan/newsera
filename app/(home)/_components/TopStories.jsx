import Button from '@/components/ui/Button';
import { Calendar, MessageCircleMore, UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import LatestBlogs from './LatestBlogs';

const TopStories = () => {
    return (
        <div className='mb-20'>
            <div className='mb-5'>
                <h1 className='text-secondary text-xl md:text-2xl font-semibold mb-2 uppercase'>Top Stories</h1>
                <div className='flex'>
                    <div className='bg-primary h-1 w-14' />
                    <div className='h-1 border-y border-r border-fourth w-full' />
                </div>
            </div>

            <div className='grid grid-cols-5 gap-5'>
                <div className='col-span-3'>
                    <div className='relative'>
                        <Image
                            src="https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=''
                            width={1000}
                            height={1000}
                            className='w-full h-80 object-cover'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 w-full"></div>
                        <Button className='absolute top-3 left-3'>Buisness</Button>
                        <div className='flex items-center gap-5 bg-sixth text-third w-max px-5 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 text-sm'>
                            <span className='flex items-center gap-2'>
                                <UserRound />
                                John Throat
                            </span>
                            |
                            <span className='flex items-center gap-2'>
                                <Calendar />
                                3 Months
                            </span>
                            |
                            <span className='flex items-center gap-2'>
                                <MessageCircleMore />
                                3 Comment
                            </span>
                        </div>
                    </div>
                    <div className='text-center mt-3 px-5 md:px-10'>
                        <h1 className='text-lg font-semibold text-light'>All The Red Carpet Looks From The 2016
                            Critics’ Business Awards</h1>
                        <p className='text-third mt-2 text-sm'>Sed cursus eget risus non vestibulum. Sed in molestie elit, vitae condimentum justo. Aenean vulputate leo metus, sed imperdiet lorem fermentum et metus, sed imperdiet .</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-4 text-muted'>
                    {
                        Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className='flex gap-2 border-b border-gray-600 pb-3'>
                                <Image
                                    src="https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=''
                                    width={100}
                                    height={100}
                                    className='w-28 h-20 object-cover'
                                />
                                <div className='space-y-2'>
                                    <h1 className='underline'>The day signs man image...</h1>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='flex items-center gap-2'>
                                            <Calendar className='text-primary' size={16} />
                                            John Throat
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <LatestBlogs />
            </div>

        </div>
    );
};

export default TopStories;