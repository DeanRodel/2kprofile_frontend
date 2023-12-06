import React, { useState, useEffect } from 'react';
import axios from 'axios';

import discordIcon from '../../img/social-media/discord-red.png';

const Discord = ({ account, tier, type, setPlayer }) => {
  const [success, setSuccess] = useState('');

  function updateSocialMedia() {
    let body = {
      discordWidget: document.getElementById('discordWidget').value,
    };
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    if (type === 'player') {
      axios.put('/api/players/addDiscord', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/addDiscord`, body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.team);
      });
    }
  }

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe sm:pt-28 pt-10'
      id='Discord'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Discord
        </h5>
        <p className="text-left font-body text-white sm:text-base text-xs pb-4">
          In your server settings, go to widget and enable it. Then copy the <strong>Server ID</strong> here.
        </p>
      </div>
      <div className='grid grid-cols-5 pt-5 mr-5'>
        <div className='flex justify-self-center items-center '>
          <img src={discordIcon} className='w-6 h-6' alt='discord'></img>
        </div>
        <div className='flex items-center justify-end md:pr-7 pr-1'>
          <p className='text-center font-body text-white sm:text-base text-xs'>
            Discord
          </p>
        </div>
        <div className='col-span-3 '>
          <input
            className='sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full'
            type='text'
            id='discordWidget'
            onChange={() => setSuccess('')}
            defaultValue={account.social_media.discordWidget}
          />
        </div>
      </div>
      <div className='py-5'>
        {success !== '' ? (
          <p className='sm:ml-0 ml-5 bg-green-300 mr-5 px-5 h-9 pt-2 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
            {success}
          </p>
        ) : null}
      </div>
      <div className='grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0  pt-10'>
        <button
          className=' sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={updateSocialMedia}
          id='updateSocialMedia'
        >
          UPDATE Discord
        </button>
      </div>
    </div>
  );
};

export default Discord;
