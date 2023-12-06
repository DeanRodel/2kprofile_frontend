
import React, { useState, useEffect } from 'react';
import Blog1 from '../../img/blog-01.png';
import Blog2 from '../../img/blog-02.png';
import Blog3 from '../../img/blog-03.png';

const Blog = ({ account }) => {
  const [background, setBackground] = useState({});
  // let typeProfile ='';

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Blog'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Blog/Blog-${account.templates[index].template}.png)`,
      });
    }
  }, []);

  // if (props.type === 'team') {
  //   typeProfile = 'OUR BLOG'
  // } else {
  //   typeProfile = 'MY BLOG'
  // }

  return (
    <div
      className='flex justify-center px-4 sm:pt-20 pt-10  pb-32 sm:pb-10  bg-cover'
      style={background}
      id='Blog'
    >
      <div className='max-w-4xl w-full'>
        <div className='p-4'>
          <h5 className='sm:text-4xl text-3xl pb-8 text-white font-semibold '>
            {/* {typeProfile} */}
            MY BLOG
          </h5>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 sm:mx-0'></div>
        </div>
        <div className='sm:grid grid-cols-3 gap-2 '>
          <div className='md:space-y-0 space-y-1 p-4  sm:mb-0  h-auto'>
            <img className='w-full object-cover mb-4 mt-4' src={Blog1} />
          </div>
          <div className='md:space-y-0 space-y-1 p-4  sm:mb-0 min-h-full h-auto'>
            <img className='w-full  object-cover mb-4 mt-4' src={Blog2} />
          </div>
          <div className='md:space-y-0 space-y-1 p-4  sm:mb-0  min-h-full h-auto'>
            <img className='w-full  object-cover mb-4 mt-4 ' src={Blog3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
