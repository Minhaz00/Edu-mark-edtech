import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../Education-Logo-PNG-HD-Quality.png';
const Header = () => {
    return (
        <div className='flex items-baseline justify-between bg-gray-100'>
            <div className='flex items-center'>
                <img className='h-6 ml-4 ' src={logo} alt="" />
                <h1 className='text-2xl font-bold text-blue-500 py-6'>EduMark</h1>
            </div>
            
            <nav className='px-20  text-blue-600'> 
                <NavLink className='ml-4 font-semibold' to="/home">Home</NavLink>
                <NavLink className='ml-4 font-semibold' to="/about">About</NavLink>
                <NavLink className='ml-4 font-semibold' to="/service">Service</NavLink>
                <NavLink className='ml-4 font-semibold' to="/blog">Blog</NavLink>
            </nav>

            <div className='text-white px-20'>
                <button className='ml-2 bg-blue-600 rounded px-2 py-1'>Log In</button>
                <button className='ml-2 bg-blue-600 rounded px-2 py-1'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;
