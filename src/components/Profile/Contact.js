import React, { useState, useEffect } from 'react';

import Cog from '../../img/icons/cog-solid.svg';
import NameModal from './Settings/NameModal';

const Contact = ({ account, setPlayer, type, showSettings }) => {
  const [contactImage, setContactImage] = useState('');
  const [background, setBackground] = useState({});
  let typeProfile = '';
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Contact'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setContactImage(
        `${process.env.PUBLIC_URL}/templates/Contact/Icons/Contact-gorilla.png`
      );
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Contact/Backgrounds/Contact-${account.templates[index].template}.png)`,
      });
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);

  if (type === 'team') {
    typeProfile = 'OUR CONTACT';
  } else {
    typeProfile = 'MY CONTACT';
  }

  return (
    <div
      className='w-full flex justify-center py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      id='Contact'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          setPlayer={setPlayer}
          component={'Contact'}
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
        <div className='max-w-4xl  w-full sm:grid grid-cols-2 gap-20'>
          <div className='flex justify-center mb-4 mt-4 sm:mb-0 mb-24'>
            <img className='sm:h-80 h-64' src={contactImage} alt='contact' />
          </div>
          <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black'>
            <div className='flex-auto p-5 lg:p-10'>
              <form id='feedbackForm' action='' method=''>
                {account.contact.user.phone !== '' ? (
                  <div className='flex flex-row relative w-full mb-3 border-white border-2 rounded-lg mb-8'>
                    <p className='text-white pl-3 py-2'>
                      {account.contact.user.phone}
                    </p>
                  </div>
                ) : null}
                {account.contact.user.email !== '' ? (
                  <div className='flex flex-row relative w-full mb-3 border-white border-2 rounded-lg mb-8'>
                    <a
                      href={`mailto:${account.contact.user.email}`}
                      target='_blank'
                      rel='noreferrer'
                      className='border-0 px-3 py-3 text-sm font-body shadow w-full text-white'
                    >
                      EMAIL ME
                    </a>
                  </div>
                ) : null}
                {account.contact.coach.email !== '' ? (
                  <div className='flex flex-row relative w-full mb-3 border-white border-2 rounded-lg mb-8'>
                    <a
                      href={`mailto:${account.contact.coach.email}`}
                      target='_blank'
                      rel='noreferrer'
                      className='border-0 px-3 py-3 text-sm font-body shadow w-full text-white'
                    >
                      EMAIL MY COACH
                    </a>
                  </div>
                ) : null}
                {account.contact.manager.email !== '' ? (
                  <div className='flex flex-row relative w-full mb-3 border-white border-2 rounded-lg mb-8'>
                    <a
                      href={`mailto:${account.contact.manager.email}`}
                      target='_blank'
                      rel='noreferrer'
                      className='border-0 px-3 py-3 text-sm font-body shadow w-full text-white'
                    >
                      EMAIL MY MANAGER
                    </a>
                  </div>
                ) : null}
                {account.contact.agency.email !== '' ? (
                  <div className='flex flex-row relative w-full mb-3 border-white border-2 rounded-lg mb-8'>
                    <a
                      href={`mailto:${account.contact.agency.email}`}
                      target='_blank'
                      rel='noreferrer'
                      className='border-0 px-3 py-3 text-sm font-body shadow w-full text-white'
                    >
                      EMAIL MY AGENT
                    </a>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
