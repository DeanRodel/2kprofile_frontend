import React from "react";
import search from "../../img/Home/icons/search.png";
import couple from "../../img/Home/icons/couple.png";
import icon from "../../img/Home/icons/icon.png"


const Growing = () => {
  return (
    <div className="bg-white-off flex justify-center pb-20">
      <div className='mx-7 md:pt-28 pt-10 pb-28'>
        <p className='text-center font-black font-head md:text-4xl text-xl sm:pb-24 pb-10'>ePL<font className='text-red-700'>E</font>YER GROWING</p>
        <div className='sm:grid grid-cols-3 justify-center mx-auto justify-between w-full'>
            <div className='text-center'>
              <img src={icon} className='h-5 mx-auto mb-1' alt="epleyer"></img>
              <p className='font-head md:text-sm text-xs mb-1'>ePL<font className='text-red-700'>E</font>YERs</p>
              <p className='text-red-700 font-black md:mb-0 mb-5'>10,000<font className='text-xs items-top'>+</font></p>
            </div>
            <div className='text-center'>
              <img src={couple} className='h-5 mx-auto mb-1' alt="team"></img>
              <p className='font-head md:text-sm text-xs mb-1'>Teams</p>
              <p className='text-red-700 font-black sm:mb-0 mb-5'><font className='text-sm'>1</font>,8<font className='text-sm'>00</font><font className='text-xs'>+</font></p>
            </div>
            <div className='text-center'>
              <img src={search} className='h-5 mx-auto mb-1' alt="searches"></img>
              <p className='font-head md:text-sm text-xs mb-1'>Searches</p>
              <p className='text-red-700 font-black sm:mb-0 mb-5'>33,33<font className='text-sm'>0</font><font className='text-xs'>+</font></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Growing;