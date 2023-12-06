import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/Home/searchv2.png";
import background from "../../img/Home/bgSearch.jpg";


const bgImage = {
  backgroundImage: `url(${background})`, 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'inset 0 0 15px 10px black'
}

const Search = () => {
  return (
    <div style={bgImage}>
      <div className='grid sm:grid-cols-2 grid-cols-1 justify-center mx-auto sm:pt-28 pt-10 pb-28 sm:max-w-5xl w-full'>
        
        <div className='text-center md:pt-16 pt-5 sm:pr-10 pl-5 sm:row-start-1 row-start-2'>
          <p className='font-black font-head md:text-4xl text-2xl tracking-widest pb-8 text-white'>SEARCH</p>
          <p className='text-red-500 font-bold md:text-lg text-xs font-body'>ePleyer<font className='text-black font-light font-body text-white'> brings the eSports community</font></p>
          <p className='text-black font-light md:text-lg text-xs font-body text-white'>together with its searchable<font className='font-body text-red-500 font-bold md:text-lg text-xs'> Collector</font></p>
          <p className='text-red-500 font-bold md:text-lg text-xs pb-6 font-body'>Card Database</p>
          <p className='font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm'>Search for Your Favorite Gamers!​</p>
          <p className='font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm'>Challenge Your Next Opponent!​</p>
          <p className='font-head font-extrabold text-gray-300 pb-1 md:text-lg text-sm pb-4'>Join a Team!​</p>
          <Link to="/login" className='btn font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin mt-4  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'>START NOW</Link>
        </div>
        <img src={bg} className='w-full sm:pt-14 pt-16'></img> 
      </div>
    </div>
  );
};

export default Search;