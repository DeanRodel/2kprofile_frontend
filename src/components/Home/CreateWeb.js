import React from "react";
// import bg from "../../img/Home/header-bg-light.jpg"
import bg from "../../img/Home/dark_bg.png"


const CreateWeb = () => {
  return (
      < div className="">
        <img src={bg} className='w-full' alt="gamers"></img>
        <h2 className='font-head font-bold md:text-4xl text-xl text-center  sm:pb-2 pb-1 sm:-mt-52 -mt-24 text-white'>Create Your eSports Profile</h2>
        <div className='flex justify-center mx-auto max-w-5xl'>
          <div className='text-center md:text-base text-xs bg-black'>
            <p className='text-white'><font className='pl-8 font-bold'>FINALLY! </font>It's here and it's all about you!</p>
              <p className='text-white'>Live streaming, game stats, media gallery, sponsorship section, merch store, digital collector card and social media links   </p>
              <p className='font-bold text-white'> ALL IN ONE PLACE.</p> 
          
          </div>
        </div>
      </div>
    );
};

export default CreateWeb;