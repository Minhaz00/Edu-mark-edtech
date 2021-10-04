import React, { useState } from 'react';
import { useEffect } from 'react';
import home from '../../39015.jpg';
import Intro from '../intro/Intro';
const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./Home.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <div>
            <div className='flex'>
                <img className='w-96' src={home} alt="" />
                <div>
                    <h1 className='text-blue-600 text-5xl mt-16'>Welcome to EduMark</h1>
                    <p className='px-20 py-10 text-center mx-auto w-3/4'>Start your journey today with us.Get your desired course and learn form the experts.Take a look of our services and subscribe now!</p>
                    <button className='bg-blue-600 text-white px-3 py-2 rounded-3xl mx-auto'>Get Subscription</button>
                </div>
            </div>
            <hr />
            <div>
                <p className='text-blue-600 text-4xl font-semibold mt-16 '>Explore our courses</p>
                <div>
                    {
                        course.map(intro => <Intro
                            key={intro.name}
                            intro={intro}
                        ></Intro>)
                    }
                </div>
            </div>
            
        </div>
        
    );
};

export default Home;



/* const ssc =
[
    {
        url:"https://thumbs.dreamstime.com/b/physics-doodles-lettering-physics-doodles-lettering-education-vector-illustration-137829167.jpg'",
        Name: "SSC Courses",
        body: "Preparation for SSC examination with Quality lectures.Exams,quiz,assignment and many more..."
    },    
    {
        url: "https://demmelearning.com/wp-content/uploads/2020/07/Make-Math-Engaging-for-Kids-with-Philosophy-.png",
        Name: "HSC Courses",
        body: "Preparation for HSC examination with Quality lectures.Exams,quiz,assignment and many more..."
    },    
    {
        url:"https://i.pinimg.com/originals/98/4f/d6/984fd6e2d143e963a24e81ce14ce6e3e.png",
        Name: "Skill Development",
        body: "Develop your skills.Learn from high profiles.Explore your desired course..."
    }    
] */