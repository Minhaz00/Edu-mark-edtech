import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <h4 className='text-blue-500 text-2xl p-5 font-semibold'>EduMark</h4>
            <div className='flex justify-evenly my-4'>
                <div>
                    <nav className='text-left'>
                        <h4 className='font-semibold'>Navigate to</h4>
                        <NavLink className='ml-2 block text-sm' to="/home">Home</NavLink>
                        <NavLink className='ml-2 block text-sm' to="/about">About</NavLink>
                        <NavLink className='ml-2 block text-sm' to="/service">Service</NavLink>
                        <NavLink className='ml-2 block text-sm' to="/blog">Blog</NavLink>
                    </nav>
                </div>
                <div className=' w-52'>
                    <h4 className='font-semibold'>Adress</h4>
                    <p className='text-sm'>Street:  house #390, road #29, new d.o.h.s., 1206,Dhaka.Zip code:1206</p>
                </div>
                <div >
                    <h4 className='font-semibold'>Contact</h4>
                    <p className='text-sm'>+88017665</p>
                    <p className='text-sm'>+88017663</p>
                    <p className='text-sm'>+88017664</p>
                </div>
            </div>
            <p className='text-xs pb-6'>&copy; Copyright 2021 | EduMark</p>
        </div>
    );
};

export default Footer;




