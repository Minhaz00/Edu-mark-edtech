import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Hsc from '../Hsc/Hsc';
import Skill from '../Skill/Skill';
import Ssc from '../SSC/Ssc';

const Service = () => {
    const [sscCourse, setSscCourse] = useState([]);
    const [hscCourse, setHscCourse] = useState([]);
    const [skillCourse, setSkillCourse] = useState([]);

    useEffect(() => {
        fetch('./sscCourse.json')
            .then(res => res.json())
            .then(data => setSscCourse(data));
    },[])
    useEffect(() => {
        fetch('./hscCourses.json')
            .then(res => res.json())
            .then(data => setHscCourse(data));
    },[])
    useEffect(() => {
        fetch('./skills.json')
            .then(res => res.json())
            .then(data => setSkillCourse(data));
    },[])

    return (
        <div>
            <h1 className='text-blue-600 text-4xl font-semibold my-4'>All Courses</h1>
            <h4 className='text-2xl mb-2 mt-16 font-bold'>SSC Courses</h4>
            <div className='grid grid-cols-3 gap-2 w-3/4 mx-auto mb-10'>
                {
                    sscCourse.map(ssc => <Ssc
                        key={ssc.title}
                        ssc={ssc}
                    ></Ssc>)
                }
            </div>
            <hr />
            <h4 className='text-2xl mb-2 mt-12 font-bold'>HSC Courses</h4>
            <div className='grid grid-cols-3 gap-2 w-3/4 mx-auto mb-10'>
                {
                    hscCourse.map(hsc => <Hsc
                        key={hsc.title}
                        hsc={hsc}
                    ></Hsc>)
                }
            </div>
            <hr />
            <h4 className='text-2xl mb-2 mt-12 font-bold'>Skill Development</h4>
            <div className='grid grid-cols-3 gap-2 w-3/4 mx-auto mb-10'>
                {
                    skillCourse.map(skill => <Skill
                        key={skill.title}
                        skill={skill}
                    ></Skill>)
                }
            </div>
            
        </div>
    );
};

export default Service;

