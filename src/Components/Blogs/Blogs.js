import React, { useEffect, useState } from 'react';
import Blog from '../Blog-single/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <h1 className='text-blue-600 text-4xl font-semibold my-4'>Blogs</h1>
            <div className="mx-auto">
              {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
              }
        </div>
        </div>
    );
};

export default Blogs;








/* const min =
[
    {
      userId: 1,
      id: 1,
      url:"https://static01.nyt.com/images/2021/09/14/science/14inspiration1/merlin_194683284_8c91749e-658e-4e8c-b2ab-f5917bea6051-jumbo.jpg?quality=90&auto=webp",
      title: "Do You Think You Will Ever Travel to Space?",
      body: "A SpaceX rocket launched the first all-civilian crew into orbit. Do you think spaceflight will one day become as ordinary as air travel?"
    },
    {
      userId: 1,
      id: 2,
      url:"https://static01.nyt.com/images/2021/06/23/learning/lesson-plans/oakImage-1624490577667/oakImage-1624490577667-jumbo.png?quality=90&auto=webp",
      title: "Explore the Space Race With The New York Times’s Archive",
      body: "In this extended lesson plan, students will use the Times archive to explore the questions: What was the space race? Who won it? And why did it matter? Then they will connect the past to the current competition for space."
    },
    {
      userId: 1,
      id: 3,
      url:"https://static01.nyt.com/images/2021/09/13/science/13SCI-mammoth-1/merlin_194440842_d8a2470e-84a4-444d-82da-ae25dee9764d-jumbo.jpg?quality=90&auto=webp",
      title: "Should We Bring Back Animals From Extinction?",
      body: "A new company hopes to genetically resurrect the woolly mammoth thousands of years after it went extinct. Should these efforts be applauded or feared?"
    },
    {
      userId: 1,
      id: 4,
      url:"https://static01.nyt.com/images/2021/09/02/climate/02cli-nystorm-6-LN/merlin_193929357_4817c546-af81-4ba6-bd99-0597d0b59ced-jumbo.jpg?quality=90&auto=webp",
      title: "How Have You Experienced Extreme Weather?",
      body: "This summer brought record heat, floods, droughts and wildfires. Tell us how the mounting consequences of climate change have affected you."
    },
    
] */