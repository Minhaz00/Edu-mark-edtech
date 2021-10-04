import React from 'react';

const Blog = (props) => {
    const { url, title, body, id } = props.blog;
    return (
        <div> 
            <div className='border border-blue-300 rounded my-10 p-6 flex w-3/5 mx-auto'>
                <img className='h-40 w-48' src={url} alt="" />
                <div className='pl-3'>
                    <h1 className='text-blue-500 font-bold text-2xl pb-2 text-justify'>{title}</h1>
                    <h1 className='pb-3 text-gray-700 text-justify'>{body}</h1>
                    <button className='bg-blue-600 text-white px-2 py-1 rounded-3xl'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;