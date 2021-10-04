import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-blue-600 text-4xl font-semibold my-4'>About Us</h1>
            <div className='my-6'>
                <h4 className='text-blue-600 text-2xl font-semibold p-4'>Our Mission</h4>
                <p className='mx-10 text-justify'>The Edumart prepares students to understand, contribute to, and succeed in a rapidly changing society, thus making the world a better and more just place. We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</p>
            </div>

            <div className='my-6 mb-12'>
                <h4 className='text-blue-600 text-2xl font-semibold p-4'>Our Vision</h4>
                <p className='mx-10 text-justify'>We are and will be a platform where design and social research drive approaches to studying issues of our time, such as democracy, urbanization, technological change, economic empowerment, sustainability, migration, and globalization. We will be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</p>
            </div>

            <div className='mb-16'>
                {/* <h4 className='text-blue-600 text-2xl font-semibold p-4'>Our Community</h4> */}
                <div className='flex justify-evenly'>
                    <div className='border-4 border-blue-600 rounded p-6'>
                        <h4 className='text-5xl'>4000</h4>
                        <p>Students</p>
                    </div>
                    <div className='border-4 border-blue-600 rounded p-6'>
                        <h4 className='text-5xl'>300</h4>
                        <p>Instructors</p>
                    </div>
                    <div className='border-4 border-blue-600 rounded p-6'>
                        <h4 className='text-5xl'>100+</h4>
                        <p>Courses</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default About;