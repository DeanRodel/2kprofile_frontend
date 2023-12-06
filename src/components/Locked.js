import React from 'react';
import { Link } from 'react-router-dom';

import Lock from '../img/icons/padlock-white.png';

const Locked = ({ tier }) => {
  return (
    <div className='max-w-3xl border-2 border-dashed border-gray-400 flex justify-between md:ml-auto ml-0 mr-7 justify-self-center ml-7'>
      <img
        className='md:w-8 w-6 md:h-8 h-6 my-4 md:mx-6 mx-2'
        src={Lock}
        alt='lock'
      ></img>
      <Link
        to={'/pricing'}
        className='text-gray-300 sm:mt-5 mt-5 sm:text-base text-xs font-body font-medium md:mx-6 mx-0 hover:underline hover:text-blue-400'
      >
        Please Upgrade to {tier} or Higher
      </Link>
      <img
        className='md:w-8 w-6 md:h-8 h-6 my-4 md:mx-6 mx-2'
        src={Lock}
        alt='lock'
      ></img>
    </div>
  );
};

export default Locked;
