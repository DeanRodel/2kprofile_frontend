import React from 'react';
import { Link } from 'react-router-dom';
import Whitebar from '../../img/white-bar.png';
import Logo from '../../img/logos/emailLogo.png';

const Sidebar = (props) => {
  function navigate(name) {
    if (window.location.pathname === '/profile') {
      document.getElementById(`${name}`).scrollIntoView();
    }
    props.toggleSidebar();
  }

  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-end w-screen min-h-screen pb-20 sm:block sm:p-0'>
        <div
          className='fixed inset-y-0 lg:right-0 bg-black w-screen lg:w-1/2 transition-opacity'
          aria-hidden='true'
        >
          <button
            type='button'
            className='mt-3 w-12 inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-white float-right'
            onClick={() => props.toggleSidebar()}
          >
            X
          </button>
          <br />
          <br />
          {[
            ['Discord', 'Discord'],
            ['Name', 'Name'],
            ['Profile', 'Profile'],
            ['Stream', 'Stream'],
            ['Stats', 'Stats'],
            ['Team', 'Team'],
            ['Photos', 'Photos'],
            ['Videos', 'Videos'],
            ['Store', 'Store'],
            ['Biography', 'Bio'],
            ['Sponsors', 'Sponsors'],
            ['Contact', 'Contact'],
          ].map((name) => {
            return (
              <Link
                onClick={() => {
                  if (window.location.pathname === '/profile') {
                    document.getElementById(`${name[1]}`).scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest',
                    });
                  }
                  props.toggleSidebar();
                }}
                to={{
                  pathname: '/profile',
                  hash: `${name[1]}`,
                }}
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                  {name[0]}
                </p>
              </Link>
            );
          })}
          <div className='absolute bottom-0 w-screen mb-8'>
            <img src={Whitebar} className='mb-2' alt='separator' />
            <div className='flex justify-center'>
              {/* <Link to="/profile" onClick={() => props.toggleSidebar()}>
                <img
                  className="mb-1 mr-1 rounded-full border-2 w-12 max-h-20"
                  src={`${props.player.gravatar}?s=340`}
                  alt="epleyer"
                ></img>
              </Link> */}
              <div className='flex flex-row pr-3 self-center lg:justify-end lg:flex'>
                <Link to='/home' onClick={() => props.toggleSidebar()}>
                  <img
                    className='w-12' //sm:ml-6ml-0 md:mr-40 mr-0
                    src={Logo}
                    alt='epleyer'
                  ></img>
                </Link>
              </div>
              <div className='flex'>
                {/* <Link to="/search" onClick={() => props.toggleSidebar()}>
                  <p className="p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase">
                    Search
                  </p>
                </Link> */}
                <Link to='/dashboard' onClick={() => props.toggleSidebar()}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Account
                  </p>
                </Link>
                <Link to='/login' onClick={() => props.logoutHandler()}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Logout
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

export default Sidebar;
