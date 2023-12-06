import React, { useState, useEffect } from 'react';
import WhoIam from '../../img/asset-21.png';
import Teams from '../../img/asset-22.png';
import Career from '../../img/asset-23.png';

import Cog from '../../img/icons/cog-solid.svg';
import NameModal from './Settings/NameModal';

const Bio = ({ account, setPlayer, type, showSettings }) => {
  const [background, setBackground] = useState({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Bio'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Bio/Bio-${account.templates[index].template}.png)`,
      });
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);

  if (type === 'team') {
    typeProfile = 'OUR BIO';
  } else {
    typeProfile = 'MY BIO';
  }

  return (
    <div
      className='flex justify-center py-10 px-10 sm:py-20 sm:px-0 bg-center bg-cover'
      id='Bio'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          setPlayer={setPlayer}
          component={'Bio'}
          type={type}
        />
      ) : null}
      <div className='max-w-4xl w-full'>
        <div className='md:mx-4 mx-0 mb-8'>
          <div
            className={showSettings ? 'flex cursor-pointer' : 'flex'}
            onClick={() => {
              if (showSettings) setShowSettingsModal(true);
            }}
          >
            {showSettings ? (
              <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1'>
                <div>
                  <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0'></div>
                  <img
                    alt='setting'
                    src={Cog}
                    className='h-6 sm:h-12 relative'
                  ></img>
                </div>
              </div>
            ) : null}
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
              {typeProfile}
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 sm:mx-0'></div>
        </div>
        <div className='sm:grid grid-cols-3 gap-10'>
          <div className='hover:bg-gray-50  md:space-y-0 space-y-1 p-4 bg-black bg-opacity-70 rounded-2xl sm:mb-0 mb-8 min-h-full h-96'>
            <div className='flex justify-center '>
              <img
                className='w-20 object-cover mb-4 mt-4'
                src={WhoIam}
                alt='player logo'
              />
            </div>
            <p className='text-red-600 font-bold text-xl font-head tracking-widest pb-2'>
              WHO I AM:
            </p>
            <p className='text-gray-400 text-sm h-44 w-full bg-transparent'>
              {account.biography.section1}
            </p>
          </div>
          <div className=' hover:bg-gray-50 md:space-y-0 space-y-1 p-4 bg-black bg-opacity-70 rounded-2xl sm:mb-0 mb-8 min-h-full h-96'>
            <div className='flex justify-center '>
              <img
                className='w-20 object-cover mb-4 mt-4'
                src={Teams}
                alt='team logo'
              />
            </div>
            <p className='text-red-600 font-bold text-xl font-head tracking-widest pb-2'>
              TEAMS:
            </p>
            <p className='text-gray-400 text-sm h-44 w-full bg-transparent'>
              {account.biography.section2}
            </p>
          </div>
          <div className='hover:bg-gray-50 md:space-y-0 space-y-1 p-4 bg-black bg-opacity-70 rounded-2xl sm:mb-0 mb-8 min-h-full h-96'>
            <div className='flex justify-center '>
              <img
                className='w-20 object-cover mb-4 mt-4'
                src={Career}
                alt='career'
              />
            </div>
            <p className='text-red-600 font-bold text-xl font-head tracking-widest pb-2'>
              CAREER HIGHIGHTS:
            </p>
            <p className='text-gray-400 text-sm h-44 w-full bg-transparent'>
              {account.biography.section3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
