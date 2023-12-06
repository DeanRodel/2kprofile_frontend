import React from "react";
import bg from "../../img/Home/classic-games.jpg";
import background from "../../img/Home/bgAbout.png";


const bgImage = {
  backgroundImage: `url(${background})`, 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 15px 10px black'
}


const About = () => {
  return (
    <div className="bg-black pb-12" style={bgImage}>
        <div className='justify-center mx-auto sm:pt-28 pt-10 pb-14 sm:max-w-6xl w-full'>
            <p className='text-center font-black font-head md:text-4xl text-2xl text-white'>ABOUT ePL TESTING<font className='text-red-600'>E</font>YER</p>
        </div>
        <div className='sm:grid grid-cols-3 pb-40 justify-center mx-auto w-full sm:max-w-6xl sm:pr-7 pr-0'>
            <div className='text-black sm:pl-7 pl-0'>
                <div className='border-red-700 ms:w-80 w-72 mx-auto' style={{borderWidth:"0.8rem"}}>
                    <img src={bg} className='-mb-10 pt-5 ml-5' alt="customize"></img> 
                </div>
            </div>
            <div className='col-span-2 text-white sm:pl-10 pl-9 sm:pr-0 pr-2 sm:pt-0 pt-5 '>
                <div className='border-red-700 w-full mt-10 pb-5'  style={{borderWidth:"0.8rem"}}>
                    <div className='bg-gray-800 -ml-10 -mt-10 lg:pt-10 pt-5 lg:pr-32 pr-0 pl-4 lg:mr-10 mr-0'>
                        <p className='font-body text-xs mt-5'><font className='text-red-500 font-bold'>ePleyer</font> puts the needs of the eSports enthusiast first in every element of its product design. We have consulted directly with sponsors, agencies, players and teams to understand what it takes to get noticed in the eSports industry.</p>
                         <p className='font-body text-xs pt-4'>We have created a personalized eSports marketing platform, a place where gamers, players, teams and esports enthusiasts of all levels can show their game and get noticed by industry professionals.</p>
                         <p className='font-body text-xs pt-4'><font className='text-red-500 font-bold'>ePleyer's</font> customizable profiles bring together the important aspects of your game play, a one stop shop for all your gaming greatness. Whether you are just starting out or a seasoned pro, this is where it all begins.</p>
                         <p className='font-body text-xs mb-5 pt-4'>Create your brand, incorporate social media, showcase game stats, live streaming, media gallery, sponsorship, ecommerce and more.</p>
                         <p className='font-body text-xs mb-5 pb-8'>At  <font className='text-red-500 font-bold'>ePleyer.gg </font> it’s all about your opportunity to SHOW YOUR GAME. GET NOTICED. </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default About;