import React from "react";
import bg from "../../img/Home/bg_promote.png";
import circle from "../../img/Home/icons/circle.png";
import custom from "../../img/Home/icons/custom.png";
import arrow from "../../img/Home/icons/arrow.png";


const Team= () => {
  return (
    <div className="bg-black pb-60 sm:pt-12 pt-0">
        <p className='font-black font-head md:text-4xl text-2xl pt-32 text-center text-white'>INDIVIDUAL & TEAM</p>
        <p className='font-black font-head md:text-3xl text-xl pb-20 text-red-700 text-center pt-2'>PROFILE TEMPLATES</p>
        <div className='sm:grid grid-cols-3 gap-3 p-7 sm:max-w-5xl w-full mx-auto'>
          <div className="flex flex-col md:w-72 w-60 mx-auto sm:pb-0 pb-10">
            <div className='bg-red-700 rounded-full h-20 w-20 text-white  text-center self-center flex relative'>
              <p className='self-center my-auto mx-auto font-black relative text-3xl'>1</p>
            </div>
            <div className='border-4 border-red-700 h-72 -mt-9 bg-white'>
              <div className='w-full'>
                <p className='text-center font-extrabold font-head md:text-2xl text-xl pt-12 pb-10'>SELECT</p>  
                <img src={circle} className='w-14 mx-auto'></img>
                <p className='text-thin font-body text-xl text-gray-600 text-center pt-7'>a game template</p>
              </div>
            </div>
          </div><div className="flex flex-col md:w-72 w-60 mx-auto sm:pb-0 pb-10">
            <div className='bg-red-700 rounded-full h-20 w-20 text-white  text-center self-center flex relative'>
              <p className='self-center my-auto mx-auto font-black text-3xl'>2</p>
            </div>
            <div className='border-4 border-red-700 h-72 -mt-9 bg-white'>
              <div className='w-full'>
                <p className='text-center font-extrabold font-head md:text-2xl text-xl pt-12 pb-10'>CUSTOMIZE</p>  
                <img src={custom} className='w-14 mx-auto'></img>
                <p className='text-thin font-body text-xl text-gray-600 text-center pt-7 '>with ease</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-72 w-60 mx-auto">
            <div className='bg-red-700 rounded-full h-20 w-20 text-white  text-center self-center flex relative'>
              <p className='self-center my-auto mx-auto font-black text-3xl'>3</p>
            </div>
            <div className='border-4 border-red-700 h-72 -mt-9 bg-white'>
              <div className='w-full'>
                <p className='text-center font-extrabold font-head md:text-2xl text-xl  pt-12 pb-10'>PUBLISH</p>  
                <img src={arrow} className='w-14 mx-auto'></img>
                <p className='text-thin font-body text-xl text-gray-600 text-center pt-7'>your eSports site</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-red-700 h-28 -mt-52 sm:visible invisible'></div>
    </div>
  );
};

export default Team;