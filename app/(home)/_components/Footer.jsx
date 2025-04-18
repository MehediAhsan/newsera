import React from 'react';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { CgEditBlackPoint } from "react-icons/cg";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from 'next/link';
import { categories } from '../_lib/data';
import Button from '@/components/ui/Button';

const Footer = () => {

    const data = {
        information: [
            { title: "About us", url: "#" },
            { title: "FAQ", url: "#" },
            { title: "Warranty And Services", url: "#" },
            { title: "Support 24/7 page", url: "#" },
            { title: "News Registration", url: "#" },
            { title: "News Support", url: "#" },
        ],
        myAccount: [
            { title: "Brands", url: "#" },
            { title: "Gift Certificate", url: "#" },
            { title: "Affiliates", url: "#" },
            { title: "Specials", url: "#" },
            { title: "FAQs", url: "#" },
            { title: "Custom Link", url: "#" },
        ],
        services: [
            { title: "Contact Us", url: "#" },
            { title: "Returns", url: "#" },
            { title: "Support", url: "#" },
            { title: "Site Map", url: "#" },
            { title: "Customer Service", url: "#" },
            { title: "Custom Link", url: "#" },
        ]
    }

    return (
        <div className='pt-10 px-10 bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-third pb-10'>
                <div className='space-y-2'>
                    <div><Link href="/" className='text-xl font-semibold text-primary'>
                        📙 NewsEra
                    </Link></div>
                    <div className='flex gap-4 items-center text-sm'>
                        <div><FaLocationArrow /></div>
                        <div>Rampura, Banasree | H Block</div>
                    </div>
                    <div className='flex gap-4 items-center text-sm'>
                        <div><FaPhone /></div>
                        <div>+8801929378419</div>
                    </div>
                    <div className='flex gap-4 items-center text-sm'>
                        <div><IoMailOpenOutline /></div>
                        <div>info@xyz.com</div>
                    </div>
                </div>
                <div className=''>
                    <div className=' text-primary font-bold uppercase'>Information</div>
                    <div className='mt-5'>
                        <ul className='space-y-3'>
                            {
                                data.information.map((data, i) => <li key={i}> <Link href={data.url} className='flex gap-2 items-center hover:text-primary cursor-pointer'>
                                    <CgEditBlackPoint size={10} /> {data.title}
                                </Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div className=' text-primary font-bold uppercase'>Our Account</div>
                    <div className='mt-5'>
                        <ul className='space-y-3'>
                            {
                                data.myAccount.map((data, i) => <li key={i}> <Link href={data.url} className='flex gap-2 items-center hover:text-primary cursor-pointer'>
                                    <CgEditBlackPoint size={10} /> {data.title}
                                </Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div className=' text-primary font-bold uppercase'>Services</div>
                    <div className='mt-5'>
                        <ul className='space-y-3'>
                            {
                                data.services.map((data, i) => <li key={i}> <Link href={data.url} className='flex gap-2 items-center hover:text-primary cursor-pointer'>
                                    <CgEditBlackPoint size={10} /> {data.title}
                                </Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div className='text-primary font-bold uppercase'>Categories</div>
                    <div className='mt-5 flex flex-wrap gap-3'>
                        {
                            categories?.map((category, i) => <Button key={i} variant='outline' size='sm'><Link href='/' >{category?.name}</Link></Button>)
                        }

                    </div>
                </div>
            </div>
            <div className='bg-fourth w-full h-0.5' />
            <p className='text-third text-center text-sm italic py-3'>© NewEra. All Rights Reserved. Design by <a href="https://mehediahsan.vercel.app/" className='text-light'>Mehedi Ahsan</a></p>
        </div>
    );
};

export default Footer;