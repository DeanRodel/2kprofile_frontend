import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedOutSidebar from './LoggedOutSidebar';
import Logo from '../../img/logos/emailLogo.png';
import FullLogo from '../../img/logos/NBA2K.png';

const LoggedOutHeader = ({ props }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loggedOutProfile, setLoggedOutProfile] = useState(false);
  const [profile, setProfile] = useState('');
  const [menuItems, setMenuItems] = useState([
    'Stream',
    'Stats',
    'Photos',
    'Videos',
    'Bio',
    'Store',
    'Sponsors',
    'Contact',
  ]);

  useEffect(() => {
    if (window.location.pathname.includes('/team/')) {
      setProfile(window.location.pathname);
      setLoggedOutProfile(true);
    } else if (window.location.pathname.includes('/player/')) {
      setProfile(window.location.pathname);
      setLoggedOutProfile(true);
    } else {
      setLoggedOutProfile(false);
    }
  }, [window.location.pathname]);

  function checkVisible() {
    let items = [
      'Stream',
      'Stats',
      'Photos',
      'Videos',
      'Bio',
      'Contact',
      'Store',
      'Sponsors',
      'Discord',
    ];
    let itemsTemp = [];
    items.map((item) => {
      if (document.getElementById(item) !== null) {
        itemsTemp.push(item);
      }
    });
    setMenuItems(itemsTemp);
  }

  return (
    <header className='flex flex-row sticky overflow-visible top-0 bg-black z-50 w-full py-2 h-24'>
      {showSidebar && <LoggedOutSidebar setShowSidebar={setShowSidebar} />}
      <nav
        className='flex lg2:pl-7 text-white shadow-sm lg2:justify-between w-full'
        role='navigation'
      >
        {loggedOutProfile ? (
          <div className='flex flex-row invisible lg2:visible  w-1/2 md:w-3/5 '>
            <div className='flex flex-row lg:flex hidden self-center'>
              {menuItems.map((name, index) => {
                return (
                  <>
                    {index !== 0 && <div className='m-auto'>|</div>}
                    <Link
                      onClick={() => {
                        if (window.location.pathname === profile) {
                          const el = document.getElementById(`${name}`);
                          if (el)
                            el.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                              inline: 'nearest',
                            });
                        }
                      }}
                      to={{
                        pathname: profile,
                        hash: `${name}`,
                      }}
                    >
                      <p className='p-2 hover:text-purple-400 hover:underline self-center lg2:flex'>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </p>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <div className='flex flex-row w-1/2 md:w-3/5'>
            <img
              className='sm:w-40 w-24 ml-2 my-auto' //sm:ml-6ml-0 md:mr-40 mr-0
              // src={FullLogo}
              src='https://assets.2k.com/1a6ngf98576c/4wOVLHKVnz4AshkUWRTUEY/f58184233da1f259119b3a0186dcfd88/NBA2K-LOGO_2xk.png'
              alt='epleyer'
            ></img>
            <div className='flex flex-row justify-start invisible lg2:visible w-full'>
              <div className='flex flex-row justify-center lg2:flex hidden'>
                <Link
                  to='/about'
                  className='p-4 font-heading text-1xl font-bold hover:text-purple-400 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                >
                  About
                </Link>
                <Link
                  to='/services'
                  // className='p-4 font-heading text-1xl font-bold hover:text-purple-400 hover:underline self-center text-center'
                  className='p-4 font-heading text-1xl font-bold hover:text-purple-400 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                >
                  Terms of Service
                </Link>
                <Link
                  to='/policy'
                  // className='p-4 font-heading text-1xl font-bold hover:text-purple-400 hover:underline self-center'
                  className='p-4 font-heading text-1xl font-bold hover:text-purple-400 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                >
                  Policy
                </Link>
                <Link
                  to='/contactUs'
                  // className='p-4 font-heading text-1xl font-bold hover:text-purple-400 hover:underline self-center text-center'
                  className='p-4 font-heading text-1xl font-bold hover:text-purple-400 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className='flex justify-end w-1/2 md:w-2/5'>
          <div className='flex justify-end text-2xl'>
            <div className='flex-row lg:justify-end invisible lg:visible lg:flex hidden '>
              <Link
                // className='p-4 hover:text-purple-400 hover:underline self-center lg:flex'
                className='p-4 font-heading text-1xl font-bold hover:text-red-500 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                to='/search'
              >
                Search
              </Link>
              <p className='self-center lg2:flex'>|</p>
              <Link
                // className='p-4 hover:text-purple-400 hover:underline self-center lg:flex'
                className='p-4 font-heading text-1xl font-bold hover:text-red-500 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                to='/pricing'
              >
                Pricing
              </Link>
              <Link
                // className='p-4 hover:text-purple-400 hover:underline self-center lg:flex'
                className='p-4 font-heading text-1xl font-bold hover:text-red-500 duration-500 ease-in-out sm:transform transform-none sm:hover:-translate-y-0.5 translate-y-0 sm:hover:scale-70 scale-0  self-center'
                to='/login'
              >
                Login
              </Link>
            </div>
          </div>

          <div className='flex justify-end'>
            <div className='px-4  self-center cursor-pointer lg2:hidden flex'>
              <Link
                className='p-4 hover:text-purple-400 hover:underline self-center lg2:flex text-sm'
                to='/search'
              >
                Search
              </Link>
              <svg
                onClick={() => setShowSidebar(true)}
                className='w-6 h-6 self-center'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                xlinkHref='data:image/png;base64'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>

            <div className='flex flex-row pr-3 self-center lg:justify-end lg:flex'>
              <Link
                to={{
                  pathname: '/home',
                  hash: ``,
                }}
              >
                <img
                  className='w-16' //sm:ml-6ml-0 md:mr-40 mr-0
                  src={Logo}
                  alt='epleyer'
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LoggedOutHeader;
