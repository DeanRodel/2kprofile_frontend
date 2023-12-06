import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/Home/comingv2.png";
import background from "../../img/Home/bgComing.jpg";


const bgImage = {
  backgroundImage: `url(${background})`, 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 15px 10px black'
}


const Coming = () => {

  

  return (
    <div style={bgImage}>
      <div className='sm:grid grid-cols-2 justify-center mx-auto sm:pt-28 pt-10 pb-28 sm:max-w-5xl w-full'>
        <img src={bg} className='w-full sm:pt-0 pt-16' alt="android"></img> 
        <div className='text-center md:pt-16 pt-5 sm:pr-10 pr-0'>
          <p className='font-black font-head md:text-4xl text-2xl tracking-widest text-white'>COMING SOON</p>
          <p className='font-black font-head md:text-4xl text-2xl tracking-widest pb-8 text-white'>FALL 2021</p>
          <p className='text-red-600 font-bold md:text-lg text-xs font-body'>ePleyer Mobile App<font className='text-white font-light font-body'> brings all of your favorite</font></p>
          <p className='text-white font-light md:text-lg text-xs pb-12 font-body'>features to your phone</p>

          <p className='font-head font-extrabold text-gray-300 pb-4 md:text-lg text-sm'>SHOW YOUR GAME. GET NOTICED.</p>
          <Link to="/login" className='btn font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>START NOW</Link>
        </div>
       
      </div>
    </div>
  );
};

export default Coming;