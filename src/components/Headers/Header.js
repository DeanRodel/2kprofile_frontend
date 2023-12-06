import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoggedOutHeader from './LoggedOutHeader';
import Sidebar from './Sidebar';

import Logo from '../../img/logos/emailLogo.png';
import TeamHeader from './TeamHeader';

const Header = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [teamPage, setTeamPage] = useState(false);
  const [playerPage, setPlayerPage] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname.includes('/teamDashboard/') ||
      window.location.pathname.includes('/teamdashboard/') ||
      window.location.pathname.includes('/team/') ||
      window.location.pathname.includes('/teamProfile/')
    ) {
      setTeamPage(true);
    } else {
      setTeamPage(false);
    }
    if (
      window.location.pathname.includes('/profile') ||
      window.location.pathname.includes('/player/')
    ) {
      setPlayerPage(true);
    } else {
      setPlayerPage(false);
    }
  }, [window.location.pathname]);

  const logoutHandler = () => {
    if (localStorage.getItem('jwtToken')) {
      props.setIsLoggedIn(false);
      localStorage.removeItem('jwtToken');
      setShowSidebar(false);
    }
  };

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  // Header for Logged out
  if (props.isLoggedIn === false) {
    return <LoggedOutHeader props={props} />;
  }

  if (teamPage) {
    return <TeamHeader props={props} />;
  }
  // Regular header for logged in
  return (
    <header className='flex flex-row sticky top-0 bg-black z-50 w-full py-2'>
      {showSidebar && (
        <Sidebar
          logoutHandler={logoutHandler}
          toggleSidebar={toggleSidebar}
          {...props}
        />
      )}
      {props.player.gravatar && (
        <Link className='pb-1 pl-3 self-center' to='/profile'>
            {/* <div className='flex overflow-hidden border rounded-full justify-center align-items-center w-16 h-16'>
              <img
                className='w-16 h-16 object-cover'
                src={props.player.gravatar}
                alt='player icon'
              />
            </div> */}
          <div className='flex overflow-hidden  justify-center align-items-center w-22 h-9'>
            <img
              className='w-22 h-9'
              src='https://assets.2k.com/1a6ngf98576c/4wOVLHKVnz4AshkUWRTUEY/f58184233da1f259119b3a0186dcfd88/NBA2K-LOGO_2xk.png'
              alt='player icon'
            />
          </div>
        </Link>
      )}
      <nav
        className='flex lg:pl-7 text-white shadow-sm lg:justify-between w-full'
        role='navigation'
      >
        <div className='flex flex-row invisible lg:visible'>
          <div className='flex flex-row lg:flex hidden self-center'>
            {[
              'Discord',
              'Name',
              'Profile',
              'Stream',
              'Stats',
              'Team',
              'Photos',
              'Videos',
              'Store',
              'Bio',
              'Sponsors',
              'Contact',
            ].map((name, index) => {
              return (
                <>
                  {index !== 0 && <div className='m-auto'>|</div>}
                  <Link
                    key={name}
                    // onClick={() => document.getElementById("Stream").scrollIntoView()}
                    onClick={() => {
                      if (window.location.pathname === '/profile') {
                        document.getElementById(`${name}`).scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                          inline: 'nearest',
                        });
                      }
                    }}
                    to={{
                      pathname: '/profile',
                      hash: `${name}`,
                    }}
                  >
                    <p className='p-2 hover:text-purple-400 hover:underline self-center lg:flex'>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </p>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div className='flex justify-end w-full'>
          <div className='flex justify-end text-2xl'>
            <div className='flex-row lg:justify-end invisible lg:visible lg:flex hidden '>
              <Link
                className='p-4 hover:text-purple-400 hover:underline self-center lg:flex'
                to='/search'
              >
                Search
              </Link>
              <p className='self-center lg:flex'>|</p>
              <Link
                className='p-4 hover:text-purple-400 hover:underline self-center lg:flex'
                to='/dashboard'
              >
                Account
              </Link>
              <Link
                className='p-2 hover:text-purple-400 hover:underline self-center lg:flex'
                to='/login'
                onClick={logoutHandler}
              >
                Logout
              </Link>
            </div>
          </div>

          <div className='flex justify-end'>
            <div className='px-4  self-center cursor-pointer lg:hidden flex'>
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

export default Header;
