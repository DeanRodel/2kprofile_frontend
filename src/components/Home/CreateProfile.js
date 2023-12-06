import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/Home/CreateProfilev2.png"
import lebron from "../../img/Home/lebron.png"
import background from "../../img/Home/Profile.png"

const CreateProfile = () => {
  const Container = {
    position: 'relative',
  };

  const lebronImg = {
    position: 'absolute',
    zindex: 2,
    width: '180px',
    right: '80px',
    bottom: '40px'
  }

  const bgImage = {
    backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0 25px 25px 30px black '
  }
  


  return (
    <div style={Container}>
      {/* <div style={lebronImg}>
        <img src={lebron} className='w-full' alt="customize"></img> 
      </div> */}

      <div style={bgImage} className='w-full'>
        <div className='sm:grid grid-cols-2 justify-center mx-auto pt-28 pb-28 sm:max-w-5xl w-full'>
            <img src={bg} className='w-full' alt="customize"></img> 
        <div className='text-center md:pt-24 pt-20 sm:pr-10 pr-0 font-body'>
            <p className='text-white font-bold'> SEARCH. SHARE. PROMOTE </p>
            <p className='text-white pb-2'> your ePleyer profile!</p>
              <Link to="/login" className='btn font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4 mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>START NOW</Link>
            <p className='text-xs sm:pb-0 pb-16 font-body text-white pt-2'>Get a <font className='font-bold text-xs font-body'>FREE Collector Card</font></p>
        </div>
      </div>
    </div>
    

      
      
    </div>
  );
};

export default CreateProfile;