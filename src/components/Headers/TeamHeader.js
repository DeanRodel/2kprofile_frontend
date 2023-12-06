import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logos/emailLogo.png';
import TeamMobileSidebar from './TeamMobileSidebar';
import LoggedOutHeader from './LoggedOutHeader';

const TeamHeader = ({ props }) => {
  const [showSidebar, setShowSidebar] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(
        window.location.hash.replace('#', '')
      );
      window.scrollTo({
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  });

  if (props.isLoggedIn === false) {
    return <LoggedOutHeader props={props} />;
  }

  return (
    <header className='flex flex-row sticky top-0 bg-black z-50 w-full py-2'>
      {showSidebar && (
        <TeamMobileSidebar
          setShowSidebar={setShowSidebar}
          logoutHandler={logoutHandler}
          toggleSidebar={toggleSidebar}
          {...props}
        />
      )}
      {props.team.gravatar && (
        <Link
          className='pb-1 pl-3 self-center'
          to={`/teamProfile/${props.team.slug}`}
        >
          {/* <div className='flex overflow-hidden border rounded-full justify-center align-items-center w-20 h-20'>
            <img
              className='w-20 h-20 object-cover'
              src={props.team.gravatar}
              alt='team icon'
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
        className='flex md:pl-7 text-white shadow-sm md:justify-between w-full'
        role='navigation'
      >
        <div className='flex flex-row invisible lg2:visible'>
          <div className='flex flex-row lg2:flex hidden self-center'>
            {[
              'Discord',
              'Name',
              'Profile',
              'Stream',
              'Roster',
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
                    onClick={() => {
                      if (
                        window.location.pathname ===
                        `/teamProfile/${props.team.slug}`
                      ) {
                        document.getElementById(`${name}`).scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                          inline: 'nearest',
                        });
                      }
                    }}
                    to={{
                      pathname: `/teamProfile/${props.team.slug}`,
                      hash: `${name}`,
                    }}
                  >
                    <p className='p-2 hover:text-purple-400 hover:underline self-center md:flex'>
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
            <div className='flex-row md:justify-end invisible md:visible md:flex hidden '>
              <Link
                className='p-4 hover:text-purple-400 hover:underline self-center md:flex'
                to='/search'
              >
                Search
              </Link>
              <p className='self-center md:flex'>|</p>
              <Link
                className='p-4 hover:text-purple-400 hover:underline self-center md:flex'
                to={`/teamdashboard/${props.team.slug}`}
              >
                Account
              </Link>
              <Link
                className='p-2 hover:text-purple-400 hover:underline self-center md:flex'
                to='/login'
                onClick={logoutHandler}
              >
                Logout
              </Link>
            </div>
          </div>
          <div className='flex justify-end'>
            <div
              className='px-4  self-center cursor-pointer md:hidden'
              onClick={() => setShowSidebar(true)}
            >
              <svg
                className='w-6 h-6'
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
            <div className='flex flex-row pr-3 self-center md:justify-end lg:flex'>
              <Link to='/home'>
                <img
                  className='w-20' //sm:ml-6ml-0 md:mr-40 mr-0
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

export default TeamHeader;
