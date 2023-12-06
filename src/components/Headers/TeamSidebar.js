import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @deprecated, does nto exists anymore
 */
const TeamSidebar = () => {
  return (
    <div
      className='z-10 inset-0 overflow-y-invisible invisible lg:visible'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed flex items-end min-h-screen ml-2 mt-2 pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='inset-y-0 left-0 bg-black w-16 lg:w-32 transition-opacity text-left'
          aria-hidden='true'
        >
          {[
            'Profile',
            'Templates',
            'Social',
            'Biography',
            'Contact',
            'Roster',
            'Store',
            'Photos',
            'Videos',
            'Stream',
            'Options',
          ].map((name) => {
            return (
              <Link
                onClick={() =>
                  document
                    .getElementById(`${name}`)
                    .scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              >
                <p className='p-2 text-white cursor-pointer hover:text-purple-400 hover:underline'>
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSidebar;
