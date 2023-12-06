import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/Home/share.png";
import background from "../../img/Home/share.jpg";

const bgImage = {
  backgroundImage: `url(${background})`, 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 15px 10px black'
}

const Share = () => {
  return (
    <div style={bgImage}>
      <div className='sm:flex justify-center mx-auto sm:pt-28 pt-3 pb-28 sm:max-w-5xl w-full'>
        <img src={bg} className='sm:w-3/5 w-full sm:pt-0 pt-14 pr-9 col-span-3 ' alt="share"></img> 
        <div className='text-center md:pt-10 pt-5 sm:pl-10 pr-0 sm:-ml-10 ml-0 sm:w-1/2 w-full '> 
          <div className='sm:w-96 w-full' >
            <p className='font-black font-head md:text-4xl text-2xl tracking-widest pb-8 tect-center sm:ml-10 ml-0 text-white'>SHARE</p>
       
            <p className='text-red-700 font-bold md:text-lg text-xs font-body sm:ml-12 ml-0'>ePleyer<font className='text-white font-light font-body'> profiles bring your game </font></p>
            <div className='sm:w-78 w-full sm:ml-8 ml-0 font-body' style={{background:"rgba(0, 0, 0, 0.9)",
            boxShadow: "0 0px 70px 50px black"}}>
              <p className='text-white font-light pb-8 md:text-lg text-xs' 
                >together all in one place!</p>
              <p className='font-head font-extrabold md:text-lg text-sm text-gray-300'
                >Share your Game Stats!​</p>
              <p className='font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm' 
                >Showcase your Media Gallery!​</p>
              <p className='pb-4 font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm' 
                >Personalize your Biography!</p>
            </div> 
            <Link to="/login" className='btn sm:ml-16 ml-0 font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>START NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;