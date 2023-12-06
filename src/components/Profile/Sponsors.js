import React, { useState, useEffect } from 'react';

import Cog from '../../img/icons/cog-solid.svg';
import Locked from '../Locked';
import NameModal from './Settings/NameModal';

const Sponsors = ({ account, setPlayer, type, showSettings }) => {
  const [background, setBackground] = useState({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Sponsors'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Sponsors/Sponsors-${account.templates[index].template}.png)`,
      });
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);

  if (type === 'team') {
    typeProfile = 'OUR SPONSORS';
  } else {
    typeProfile = 'MY SPONSORS';
  }

  if (account.membership.tier !== 'Platinum') {
    return (
      <div
        className='w-full flex bg-cover justify-center bg-gray-900 py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
        // style={background}
        id='Sponsors'
      >
        <div className='max-w-4xl w-full'>
          <div className='md:mx-4 mx-0 mb-8'>
            <div className='flex'>
              <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
                {typeProfile}
              </h5>
            </div>
            <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
          </div>
          <Locked tier={'Platinum'} />
        </div>
      </div>
    );
  }

  return (
    <div
      className='w-full flex bg-cover justify-center bg-gray-900 py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      // style={background}
      id='Sponsors'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          setPlayer={setPlayer}
          component={'Sponsors'}
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
                    alt='Setting'
                    src={Cog}
                    className='h-6 sm:h-12 relative '
                  ></img>
                </div>
              </div>
            ) : null}
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
              {typeProfile}
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
        </div>
        <div className='sm:grid grid-cols-4 gap-2'>
          {account.sponsors.map((sponsor) => (
            <div key={sponsor}>
              {sponsor.image !== '' ? (
                <div className=' md:space-y-0 space-y-1 p-4  sm:mb-0 mb-8 min-h-full h-44 flex justify-center'>
                  <a
                    href={
                      account.sponsors[account.sponsors.indexOf(sponsor)]
                        .website
                    }
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='animate-pulse h-32 w-32 object-contain mb-4 mt-4'
                      alt='sponsor'
                      src={
                        account.sponsors[account.sponsors.indexOf(sponsor)]
                          .image
                      }
                    />
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
