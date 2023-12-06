import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../img/Home/bg_promote.png';
import background from '../../img/Home/bgPromote.jpg';


const bgImage = {
  backgroundImage: `url(${background})`, 
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 15px 10px black'
}

const Promote = () => {
  return (
    <div style={bgImage}>
      <div className='grid sm:grid-cols-2 grid-cols-1 justify-center mx-auto sm:pt-28 pt-10 pb-28 sm:max-w-5xl w-full'>
        <div className='text-center md:pt-16 pt-5 sm:pr-10 pr-0 sm:row-start-1 row-start-2'>
          <p className='font-bold text-white font-head md:text-4xl text-2xl tracking-widest pb-8'>
            PROMOTE
          </p>
          <p className='text-red-600 font-bold md:text-lg text-xs font-body'>
            ePleyer
            <font className='text-black font-light font-body text-white'>
              {' '}
              helps you stand out from the competition
            </font>
          </p>
          <p className='text-red-600 font-bold md:text-lg text-xs font-body pb-4 '>
            Get noticed
            <font className='text-black font-light font-body text-white'>
              {' '}
              with your own eSports themed profile including:​{' '}
            </font>
          </p>
          <p className='font-head font-extrabold md:text-lg text-sm text-gray-300'>
            eSport Themed Profile!
          </p>
          <p className='font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm'>
            Live Streaming!
          </p>
          <p className='font-head font-extrabold text-gray-300 pb-4 md:text-lg text-sm'>
            Your Social Media!
          </p>
          <Link to="/login" className='btn font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>
            START NOW
          </Link>
        </div>
        <img src={bg} className='w-full sm:pt-0 pt-16'></img>
      </div>
    </div>
  );
};

export default Promote;
