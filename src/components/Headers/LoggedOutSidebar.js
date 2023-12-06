import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Whitebar from '../../img/white-bar.png';
import Logo from '../../img/logos/emailLogo.png';

const LoggedOutSidebar = ({ setShowSidebar }) => {
  const [profile, setProfile] = useState('');
  const [loggedOutProfile, setLoggedOutProfile] = useState(false);

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

  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-end w-screen min-h-screen pb-20 sm:block sm:p-0'>
        <div
          className='fixed inset-y-0 lg2:right-0 bg-black w-screen lg2:w-1/2 transition-opacity'
          aria-hidden='true'
        >
          <button
            type='button'
            className='mt-3 w-12 inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-white float-right'
            onClick={() => setShowSidebar(false)}
          >
            X
          </button>
          <br />
          <br />

          {loggedOutProfile ? (
            [
              'Stream',
              'Stats',
              'Photos',
              'Videos',
              'Bio',
              'store',
              'Sponsors',
              'Contact',
            ].map((name) => {
              return (
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
                    setShowSidebar(false);
                  }}
                  to={{
                    pathname: profile,
                    hash: `${name}`,
                  }}
                >
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </p>
                </Link>
              );
            })
          ) : (
            <>
              <Link
                to={{
                  pathname: '/about',
                }}
                onClick={() => setShowSidebar(false)}
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                  About Us
                </p>
              </Link>
              <Link
                to={{
                  pathname: '/services',
                }}
                onClick={() => setShowSidebar(false)}
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                  Terms of Service
                </p>
              </Link>
              <Link
                to={{
                  pathname: '/policy',
                }}
                onClick={() => setShowSidebar(false)}
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                  Privacy Policy
                </p>
              </Link>
              <Link
                to={{
                  pathname: '/contactUs',
                }}
                onClick={() => setShowSidebar(false)}
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                  Contact Us
                </p>
              </Link>
            </>
          )}
          <div className='fixed bottom-16 w-screen'>
            <img src={Whitebar} className='mb-2' alt='separator' />
            <div className='flex justify-center'>
              <div className='flex flex-row pr-3 self-center lg2:justify-end lg2:flex'>
                <Link to='/home' onClick={() => setShowSidebar(false)}>
                  <img
                    className='w-12' //sm:ml-6ml-0 md:mr-40 mr-0
                    src={Logo}
                    alt='epleyer'
                  ></img>
                </Link>
              </div>
              <div className='flex'>
                {/* <Link to='/search' onClick={() => setShowSidebar(false)}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Search
                  </p>
                </Link> */}
                <p className='self-center lg2:flex'>|</p>
                <Link to='/pricing' onClick={() => setShowSidebar(false)}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Pricing
                  </p>
                </Link>
                <Link to='/login' onClick={() => setShowSidebar(false)}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedOutSidebar;
