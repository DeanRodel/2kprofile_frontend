import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';

import empty from '../../img/mascots/empty.png';
import ImageSwapper from '../ImageSwapper';
import ImageSlider from '../ImageSlider';
import { Link } from 'react-router-dom';

import Cog from '../../img/icons/cog-solid.svg';
import NameModal from './Settings/NameModal';

import divider1 from '../../img/patterns/divider-1.svg';
import divider2 from '../../img/patterns/divider-2.svg';
import divider3 from '../../img/patterns/divider-3.svg';
import divider4 from '../../img/patterns/divider-4.svg';
import divider5 from '../../img/patterns/divider-5.svg';
import divider6 from '../../img/patterns/divider-6.svg';
import divider7 from '../../img/patterns/divider-7.svg';
import divider8 from '../../img/patterns/divider-8.svg';
import divider9 from '../../img/patterns/divider-9.svg';
import divider10 from '../../img/patterns/divider-10.svg';

const dividers = [
  divider1,
  divider2,
  divider3,
  divider4,
  divider5,
  divider6,
  divider7,
  divider8,
  divider9,
  divider10,
  divider1,
];

const Name = ({
  account,
  team,
  setTeam,
  setPlayer,
  type,
  profile,
  showSettings,
}) => {
  const [background, setBackground] = useState({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [images, setImages] = useState(account.theme.banner);
  function hideModal() {
    setShowSettingsModal(false);
  }
  function hideThemeModal() {
    setShowThemeModal(false);
  }

  useEffect(() => {
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);
  return (
    <div
      className='w-full flex bg-cover bg-black justify-center md:h-l50 h-72'
      id='Name'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          team={team}
          setPlayer={setPlayer}
          setTeam={setTeam}
          component={'Name'}
          type={type}
          setPhotos={setImages}
        />
      ) : null}

      {showThemeModal ? (
        <NameModal
          hideModal={hideThemeModal}
          player={account}
          setPlayer={setPlayer}
          component={'Theme'}
          type={type}
          setPhotos={setImages}
        />
      ) : null}
      <div className='grid w-full h-full'>
        <ImageSlider
          images={images}
          solid={empty}
          className='w-full min-h-full max-h-full'
        ></ImageSlider>
        <div className='col-start-1 row-start-1 flex flex-col max-w-4xl w-full h-full justify-self-center z-3 px-10 sm:px-0'>
          {showSettings ? (
            <div className='sm:grid grid-flow-col-dense sm:text-left w-full h-auto pt-10 sm:pb-20 z-3'>
              <div className='md:px-4 px-0 z-3'>
                <div
                  className={
                    showSettings ? 'flex cursor-pointer z-3' : 'flex z-3'
                  }
                  onClick={() => {
                    if (showSettings) setShowSettingsModal(true);
                  }}
                >
                  <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1 z-3'>
                    <div className='z-3'>
                      <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0 z-3'></div>
                      <img
                        alt='Setting'
                        src={Cog}
                        className='h-6 sm:h-12 relative z-3'
                      ></img>
                    </div>
                  </div>
                  <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
                    BANNER
                  </h5>
                </div>
                <div
                  className={
                    showSettings ? 'flex cursor-pointer z-3' : 'flex z-3'
                  }
                  onClick={() => {
                    if (showSettings) setShowThemeModal(true);
                  }}
                >
                  <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1 z-3'>
                    <div className='z-3'>
                      <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0 z-3'></div>
                      <img
                        alt='Setting'
                        src={Cog}
                        className='h-6 sm:h-12 relative z-3'
                      ></img>
                    </div>
                  </div>
                  <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
                    THEME
                  </h5>
                </div>

                <div className='flex z-3'>
                  <Link
                    to={{ pathname: `/${type}/${account.slug}` }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex'>
                      <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1 z-3'>
                        <div className='z-3'>
                          <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0 z-3'></div>
                          <div className='h-6 w-6 sm:w-12 sm:h-12 relative z-3'>
                            <svg
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g data-name='Layer 2'>
                                <path d='M12 5c-6.54 0-9.76 6.29-9.89 6.55l-.23.45.22.45C2.24 12.71 5.46 19 12 19s9.76-6.29 9.89-6.55l.22-.45-.22-.45C21.76 11.29 18.54 5 12 5zm0 12c-4.38 0-7-3.7-7.85-5C5 10.7 7.62 7 12 7s7 3.7 7.85 5c-.85 1.3-3.47 5-7.85 5z' />
                                <path d='M12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z' />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h5 className='font-semibold sm:text-4xl text-3xl text-white'>
                        PREVIEW
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-6 mb-6'></div>
              </div>
            </div>
          ) : null}

          <div className='max-w-7xl h-full z-4'>
            <div className='flex flex-col mb-auto h-full sm:mx-7 sm:pb-6 pb-5 z-4 '>
              {account.first_name ? (
                <p className='text-yellow-400 font-semibold sm:text-6xl  text-3xl pb-2 mt-auto z-3'>
                  {account.first_name}&nbsp;{account.last_name}
                </p>
              ) : null}
              {profile.teamName ? (
                <p className='text-yellow-400 font-black sm:text-6xl  text-3xl pb-2 mt-auto z-3 '>
                  {profile.teamName}
                </p>
              ) : null}
              <div className='flex z-3'>
                {profile.country !== '' ? (
                  <ReactCountryFlag
                    countryCode={profile.country}
                    svg
                    className='sm:ml-0 ml-0 z-3'
                    style={{
                      width: '2em',
                      height: '2em',
                    }}
                  />
                ) : null}
                {profile.gamertag ? (
                  <p className='text-yellow-400  ml-4 sm:text-3xl text-xxl mb-auto z-3'>
                    {profile.gamertag}
                  </p>
                ) : null}
                {profile.teamTag ? (
                  <p className='text-gray-300 font-bold ml-4 sm:text-3xl mb-auto text-xxl z-3'>
                    {profile.teamTag}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className='col-start-1 row-start-1 h-full relative z-2'>
          <div className='relative h-full z-2'>
            <img
              src={dividers[account.pattern]}
              className='z-2 absolute bottom-0 left-0'
              alt='cosmetic pattern '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
