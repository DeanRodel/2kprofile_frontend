import React, { useEffect } from 'react';
import HomeFooter from '../components/Home/HomeFooter';

const About = (props) => {
  useEffect(() => {
    props.setShowFooterLogo(false);
    return () => {
      props.setShowFooterLogo(true);
    };
  }, []);
  return (
    <div className='bg-white-off w-full'>
      <div className=' w-3/4 mx-auto'>
        <div className='flex-col text-center pt-16 mx-7'>
          <h5 className='font-medium sm:text-4xl text-3xl pb-8 text-black font-body underline m-7'>
            About ePleyer
          </h5>
          <p className='text-gray-900 pb-8 mx-7 '>
            ePleyer puts the needs of the eSports enthusiast first in every
            element of its product design. We have consulted directly with
            sponsors, agencies, players and teams to understand what it takes to
            get noticed in the eSports industry.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            We have created a personalized eSports marketing platform, a place
            where gamers, players, teams and esports enthusiasts of all levels
            can show their game and get noticed by industry professionals.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            ePleyer’s customizable profiles bring together the important aspects
            of your game play, a one stop shop for all your gaming greatness.
            Whether you are just starting out or a seasoned pro, this is where
            it all begins.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            Create your brand, incorporate social media, showcase game stats,
            live streaming, media gallery, sponsorship, ecommerce and more.
          </p>
          <p className='text-gray-900 pb-8 mx-7'>
            At ePleyer.gg it’s all about your opportunity to SHOW YOUR GAME. GET
            NOTICED.
          </p>
        </div>
      </div>

      <div className='flex w-full  flex-col text-center pt-16 bg-white-off mb-auto pb-16'>
        <h5 className='font-medium sm:text-4xl text-3xl pb-8 font-body m-7 underline'>
          Mission Statement
        </h5>
        <p className='text-gray-900 mx-7'>
          We provide gamers the ability to promote themselves within the eSport
          community;
        </p>
        <p className='text-gray-900 mx-7'>
          fostering dynamic connections between gamers, fans and industry
          professionals.
        </p>
      </div>
      <HomeFooter />
    </div>
  );
};

export default About;
