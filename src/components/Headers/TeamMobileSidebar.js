import React from 'react';
import { Link } from 'react-router-dom';
import Whitebar from '../../img/white-bar.png';

const TeamMobileSidebar = ({ setShowSidebar, props }) => {
  const logoutHandler = () => {
    localStorage.removeItem('jwtToken');
    setShowSidebar(false);
  };

  function navigate(name) {
    if (window.location.pathname === `/teamProfile/${props.team.slug}`) {
      document.getElementById(`${name}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    setShowSidebar(false);
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
          className='fixed inset-y-0 md:right-0 bg-black w-screen md:w-1/2 transition-opacity'
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
          {[
            ['Discord', 'Discord'],
            ['Name', 'Name'],
            ['Profile', 'Profile'],
            ['Stream', 'Stream'],
            ['Roster', 'Roster'],
            // ["Stats", "Stats"],
            ['Photos', 'Photos'],
            ['Videos', 'Videos'],
            ['Store', 'store'],
            ['Biography', 'Bio'],
            ['Sponsors', 'Sponsors'],
            ['Contact', 'Contact'],
          ].map((name) => {
            return (
              <Link
                onClick={() => navigate(name[1])}
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
            <img src={Whitebar} className='mb-2' />
            <div className='flex justify-center'>
              <Link
                to={`/team/${props.team.slug}`}
                onClick={() => setShowSidebar(false)}
              >
                <img
                  className='mb-1 mr-1 rounded-full border-2 w-12 max-h-20'
                  src={`${props.team.gravatar}?s=340`}
                  alt='epleyer'
                ></img>
              </Link>
              <div className='flex'>
                <Link to='/search' onClick={() => setShowSidebar(false)}>
                  <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline uppercase'>
                    Search
                  </p>
                </Link>
                <Link to='/login' onClick={logoutHandler}>
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

export default TeamMobileSidebar;
