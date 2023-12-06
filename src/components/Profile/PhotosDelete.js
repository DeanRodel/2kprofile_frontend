import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cog from '../../img/icons/cog-solid.svg';
import NameModal from './Settings/NameModal';
import Locked from '../Locked';

const Photos = ({ account, setPlayer, type, showSettings }) => {
  const [background, setBackground] = useState({});
  const [allPhotos, setAllPhotos] = useState(account.photos);
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(6);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [enabled, setEnabled] = useState(
    // account.membership.tier === 'Silver' ||
    //   account.membership.tier === 'Gold' ||
    //   account.membership.tier === 'Platinum'
    false
  );

  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  function deletePhoto(photo) {
    let photosTemp = array;
    photosTemp = allPhotos.filter((e) => e !== photo);
    setAllPhotos(photosTemp);
    photosTemp = photosTemp.filter((item, index) => {
      return index < count;
    });
    setArray(photosTemp);
    if (type === 'player') {
      axios.put('/api/players/deletePhoto', { photo });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/deletePhoto`, { photo });
    }
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Photos'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Photos/Photos-${account.templates[index].template}.png)`,
      });
    }
    setArray(
      allPhotos.filter((item, index) => {
        return index < count;
      })
    );
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [count, account]);

  if (type === 'team') {
    typeProfile = 'OUR PHOTOS';
  } else {
    typeProfile = 'MY PHOTOS';
  }

  if (account.membership.tier === 'Bronze') {
    return (
      <div
        className='w-full flex justify-center bg-gray-900 py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
        // style={background}
        id='Photos'
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
          <Locked tier={'Silver'} />
        </div>
      </div>
    );
  }

  return (
    <div
      className='w-full flex justify-center bg-gray-900 py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      // style={background}
      id='Photos'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          setPlayer={setPlayer}
          setPhotos={setAllPhotos}
          component={'Photos'}
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

        <div className='sm:grid grid-cols-3 gap-4 mx-7 '>
          {array.map((photo) => (
            <div key={photo} className='w-full md:pb-0 pb-6 mx-auto'>
              <img
                className='object-cover w-full h-48'
                src={photo}
                alt='uploaded content'
              />
              {showSettings ? (
                <div className='flex justify-center'>
                  <button
                    className='bg-white hover:bg-red-400 border-red-400 border-2 hover:text-white text-red-400 text-xl w-auto px-4 mt-4 mb-4 sm:mb-0 rounded justify-center focus:outline-none focus:shadow-outline'
                    onClick={() => deletePhoto(photo)}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-white mx-7 hover:bg-yellow-400 border-yellow-400 border-4 hover:text-white text-yellow-400 text-3xl sm:w-96 w-64 h-16 mt-24 mb-24 px-4 rounded  focus:outline-none focus:shadow-outline '
            type='button'
            onClick={() => setCount(count + 6)}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
