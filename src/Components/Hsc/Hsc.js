import React from 'react';

const Hsc = (props) => {
    const {title, instructor, rating, img, lecture} = props.hsc;
    return (
        <div>
            <div className='border border-blue-400 rounded'>
                <img className='w-48 h-32 mx-auto py-3' src={img} alt="" />
                <div>
                    <p className='font-bold'>{title}</p>
                    <p>Instructor: {instructor}</p>
                    <p>Lectures: {lecture}</p>
                    <p>Rating: {rating}/5</p>
                    <button className='bg-blue-600 text-white m-4 px-4 py-1 rounded-3xl mx-auto'>Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default Hsc;