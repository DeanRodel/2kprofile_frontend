import React from "react";
import { Link } from "react-router-dom";
import girl from "../../img/Home/egirl-front.png";

const SignUp = () => {
  return (
    <div className="w-full bg-egirl bg-no-repeat bg-left max-h-h40">
      <div className='grid grid-cols-2 max-w-screen-xl justify-center mx-auto'> 
        <img src={girl} className='max-h-h40 ml-auto'></img>  
        <div className='text-center pt-5 sm:pr-11 pr-0 sm:pt-40 pt-12'>
          <p className='font-black font-head md:text-3xl text-xl pb-7 text-white'>SHOW YOUR GAME. GET NOTICED</p>
          <Link to="/login" className='btn font-oswald md:text-base text-xs px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>START NOW</Link>
          <p className='text-black font-extrabold md:text-xl text-xs pt-4 font-body text-white'>Get Your Collector Card Today</p>
        </div>   
      </div>
    </div>
  );
};

export default SignUp;