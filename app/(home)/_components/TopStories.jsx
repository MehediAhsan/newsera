import Button from '@/components/ui/Button';
import { Calendar, MessageCircleMore, UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TopStories = () => {
    return (
        <div className='mb-20'>
            <div className='mb-5'>
                <h1 className='text-muted text-2xl md:text-3xl font-semibold mb-2'>Top Stories</h1>
                <div className='flex'>
                    <div className='bg-primary h-2 w-14' />
                    <div className='h-2 border-y border-r border-muted w-full' />
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
                            className='w-full h-96 object-cover'
                        />
                        <Button className='absolute top-3 left-3'>Buisness</Button>
                        <div className='flex items-center gap-5 bg-muted text-primary w-max px-5 py-2 absolute bottom-0 left-1/2 -translate-x-1/2'>
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
                        <h1 className='text-xl font-semibold'>All The Red Carpet Looks From The 2016
                            Critics’ Business Awards</h1>
                        <p className='text-muted mt-2'>Sed cursus eget risus non vestibulum. Sed in molestie elit, vitae condimentum justo. Aenean vulputate leo metus, sed imperdiet lorem fermentum et metus, sed imperdiet .</p>
                    </div>
                </div>
                <div className='col-span-2 flex flex-col gap-4 text-muted'>
                    {
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className='flex gap-2 border-b border-gray-600 pb-4'>
                                <Image
                                    src="https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=''
                                    width={100}
                                    height={100}
                                    className='w-20 h-20 object-cover'
                                />
                                <div className='space-y-2'>
                                    <h1>The day signs man image</h1>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <span className='flex items-center gap-2'>
                                            <Calendar className='text-primary' size={16} />
                                            John Throat
                                        </span>
                                        <span className='flex items-center gap-2'>
                                            <MessageCircleMore className='text-primary' size={16} />
                                            3 Comment
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default TopStories;