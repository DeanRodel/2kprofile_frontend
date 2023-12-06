import React, { useState } from 'react';

import DeleteTeamModal from './DeleteTeamModal';
import LeaveTeamModal from './LeaveTeamModal';
import Subscription from '../Subscription';

const Delete = ({ team, role }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  function hideDeleteModal() {
    setShowDeleteModal(false);
  }

  function hideLeaveModal() {
    setShowLeaveModal(false);
  }

  return (
    // <div className='flex h-screen items-center justify-center  mt-48 mb-32'>
    <div className='flex items-center justify-center  mt-48' id='Options'>
        <div className='grid'>
      {/* <div className='grid  shadow-xl -11/12 md:w-9/12 lg:w-1/2'> */}
        <div className='md:flex-row flex-none md:justify-start justify-center md:w-h40 w-full pb-10'>
          <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest md:text-left text-center'>
            Other Options
          </h5>
        </div>
        {/* {role === 'Admin' ? (
          <div className='grid grid-cols-1 md:grid-cols-1 gap-1 mt-5 mx-7 mt-14'>
            <Subscription player={team} />
          </div>
        ) : null} */}
        {showLeaveModal ? (
          <LeaveTeamModal team={team} hideLeaveModal={hideLeaveModal} />
        ) : null}
        {showDeleteModal ? (
          <DeleteTeamModal team={team} hideDeleteModal={hideDeleteModal} />
        ) : null}
       
        {role === 'Admin' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
        
            <div className='grid grid-cols-1'>
              <label className='md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head'>
                Delete Team
              </label>
              <button
                className='sm:w-80 w-60 h-9 bg-red-700 hover:bg-red-800  shadow-xl font-medium text-white px-4 mt-2'
                onClick={() => setShowDeleteModal(true)}
              >
                DELETE TEAM
              </button>
            </div>
            <div className='grid grid-cols-1'>
              <label className='md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head'>
                Leave Team
              </label>
              <button
                className='sm:w-80 w-60 h-9 bg-red-700 h-9 hover:bg-red-800 shadow-xl font-medium text-white px-4 mt-2'
                onClick={() => setShowLeaveModal(true)}
              >
                LEAVE TEAM
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7'>
              <button
                className='sm:w-80 w-60 h-9 bg-red-700 hover:bg-red-800 shadow-xl font-medium text-white px-4 mt-2'
                onClick={() => setShowLeaveModal(true)}
              >
                LEAVE TEAM
              </button>
            </div>
          </>
        )}
        )
      </div>
    </div>
  );
};

export default Delete;
