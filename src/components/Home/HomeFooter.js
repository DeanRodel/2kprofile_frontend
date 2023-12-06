import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../img/logos/logo-white.png';
import Insta from "../../img/social-media/insta-3d-red.png"
import Twit from "../../img/social-media/001-twitter.png"
import You from "../../img/social-media/004-youtube.png"
import Face from "../../img/social-media/003-facebook.png"

const HomeFooter = () => {
  return (
    <div className="bg-gray-900 flex justify-center items-center">
       <div className='sm:flex py-10'>
            <div className='px-10 flex self-center'>
              <img
                className='sm:w-52 w-40 sm:mx-0 mx-auto'
                src={Logo}
                alt='ePleyer logo'
              ></img>
            </div>
            <div className='flex flex-col lg:px-10 px-5 font-oswald tracking-widest font-semybold sm:pt-0 pt-7'>
              <Link to="/about" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>ABOUT</Link> 
              <Link to="/contactUs" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>SUPPORT</Link> 
              <Link to="/contactUs" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>FAQ</Link>
              <Link to="/contactUs" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 transition duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>CONTACT US</Link>  
            </div>
            <div className='border sm:mb-0 mb-4 '></div>
            <div className='flex flex-col lg:px-10 px-4 font-oswald tracking-widest font-semybold '>
              {/* <Link to="" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white  hover:text-red-700'>LEARN MORE</Link>  */}
              <Link to="/pricing" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>PRICING</Link> 
              <Link to="/services" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>TERMS OF USE</Link>
              <Link to="/policy" className='text-center lg:text-lg text-xs lg:h-9 h-7 text-white hover:text-red-700 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-1 translate-y-0 sm:hover:scale-100 scale-0'>PRIVACY POLICY</Link>  
            </div>
            <div className='border'></div>
            <div className='flex items-center justify-center px-8 sm:pt-0 pt-7'>
                <div>
                  <a
                    id="twitter"
                    href={`https://twitter.com/epleyerofficial`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className='w-8 h-8 sm:mx-0 mx-auto'
                      src={Twit}
                      alt='Twitter'
                    ></img>
                  </a>
                </div>
                <div className='lg:px-5 px-2'>
                  <a
                    id="Insta"
                    href={`https://www.instagram.com/epleyerofficial/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className='w-8 h-8 sm:mx-0 mx-auto'
                      src={Insta}
                      alt='Insta'
                    ></img> 
                  </a>
                </div> 
                <div>
                  <a
                    id="Facebook"
                    href={`https://www.facebook.com/ePleyerOfficial`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className='w-8 h-8 sm:mx-0 mx-auto'
                      src={Face}
                      alt='Facebook'
                    ></img> 
                  </a>
                </div>

                <div className='lg:pl-5 pl-2'>
                  <a
                    id="Youtube"
                    href={`https://www.youtube.com/channel/UCKDllAaEQIQlD62IwlSp9lg`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className='w-8 h-8 sm:mx-0 mx-auto'
                      src={You}
                      alt='Youtube'
                    ></img> 
                  </a>
                </div>
            </div>
       </div>
    </div>
  );
};

export default HomeFooter;