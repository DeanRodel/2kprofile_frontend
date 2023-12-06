import React, { useState } from 'react';
import { Redirect } from 'react-router';

const TeamMember = ({ name, position, slug, gravatar }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div className='container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white'>
      <div className=' mb-6'>
        <img
          className='w-full'
          src={`${gravatar}?s=340`}
          alt='Profile'
        />
      </div>
      <div
        className=' px-6 text-center tracking-wide'
        style={{ marginTop: '-20px', marginBottom: '20px' }}
      >
        <p className='text-black tracking-wide uppercase text-lg font-bold'>
          {name}
        </p>
        <p className='text-gray-400 text-sm'>{position}</p>
        <button
          className='font-head bg-yellow-500 w-44 h-12 hover:bg-yellow-700 rounded-lg shadow-xl font-medium text-white px-4 tracking-widest bg-gradient-to-r from-yellow-700 to-black-400'
          onClick={() => setRedirect(true)}
        >
          VIEW PROFILE
        </button>
        {redirect ? <Redirect to={{ pathname: `/player/${slug}` }} /> : null}
      </div>
    </div>
  );
};

export default TeamMember;
