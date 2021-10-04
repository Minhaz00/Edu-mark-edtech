import React from 'react';
import { NavLink } from 'react-router-dom';
import './intro.css'
const Intro = (props) => {
    const { url, Name, body } = props.intro;
    return (
        <div className='ml-20'>
            <div className='border border-blue-300 rounded m-10 p-6 flex w-4/5'>
                <img className='h-40 w-60' src={url} alt="" />
                <div  className='pl-3'>
                    <h1 className='text-2xl text-blue-600 py-3 font-semibold'>{Name}</h1>
                    <h1 className='py-3 text-justify'>{body}</h1>
                    <NavLink className='bg-blue-600 text-white px-3 py-1 rounded-3xl' to="/service">Explore Courses</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Intro;