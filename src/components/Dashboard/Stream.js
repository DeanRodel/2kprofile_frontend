import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lock from '../../img/icons/padlock-white.png';
import { Link } from 'react-router-dom';

const Stream = ({ account, setPlayer, type, tier, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(account.templates[3].show);

  function updateStream() {
    let selected = '';
    if (document.getElementById('youtubeSelect').checked) {
      selected = 'youtube';
    }
    if (document.getElementById('twitchSelect').checked) {
      selected = 'twitch';
    }
    let body = {
      youtube: document.getElementById('youtubeStream').value,
      twitch: document.getElementById('twitchStream').value,
      selected: selected,
    };
    if (type === 'player') {
      axios.put('/api/players/updateStream', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      const token = localStorage.getItem('jwtToken');
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios.put(`/api/teams/${account._id}/updateStream`, body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.team);
      });
    }
  }

  function toggle() {
    let toggle = document.getElementById('toggleStream');
    setShow(toggle.checked);
    const body = {
      section: 'Stream',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put('/api/players/toggleSection', body);
      const templates = account.templates;
      templates[3].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[3].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  // useEffect(() => {
  //   if (tier === 'bronze' || tier === 'silver') {
  //     document.getElementById('youtubeSelect').disabled = true;
  //     document.getElementById('youtubeStream').disabled = true;
  //     document.getElementById('twitchSelect').disabled = true;
  //     document.getElementById('twitchStream').disabled = true;
  //     document.getElementById('updateStream').disabled = true;
  //     document.getElementById('toggleStream').disabled = true;
  //   }
  // }, []);

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe pt-5'
      id='Stream'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Stream
        </h5>
      </div>
      <div className='flex sm:justify-start justify-center sm:pb-7 pb-0'>
        <div className='mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggleStream'
              className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
              onChange={toggle}
              checked={show}
            />
            <p
              for='toggle'
              className='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
            ></p>
          </div>
          <label
            for='toggle'
            className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right'
          >
            Show
          </label>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-5 md:gap-8 md:mt-0 mt-5 mx-7 justify-center'>
        <div className='grid grid-cols-1 md:mt-11 mt-0 mx-auto'>
          <div className='flex'>
            <div className='grid grid-cols-1 md:mt-11 mt-0 mx-auto pr-6'>
              <br />
              <input
                // className='md:mb-3 mb-0 md:mt-0 mt-8'
                className='mb-3 my-auto'
                type='radio'
                name='streamSelect'
                id='youtubeSelect'
              />
            </div>
            <div className='grid grid-rows'>
              <label className='md:text-sm mt-10 text-xs text-white text-light font-semibold tracking-widest font-head'>
                Youtube Live Stream URL:
              </label>
              <input
                className='sm:text-base text-xs sm:w-96 max-w-7xl py-2 px-3 sm:h-9 h-8 text-gray-600 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                type='text'
                id='youtubeStream'
                defaultValue={account.stream.youtube}
                onChange={() => setSuccess('')}
              />
            </div>
          </div>
        </div>
        <p className='text-left font-body text-white sm:text-base text-xs pb-4'>
          The whole address of the stream channel is needed, do{' '}
          <strong>not</strong> copy only the ID.
        </p>
        <div className='grid grid-cols-1 mx-auto'>
          <div className='flex'>
            <div className='grid grid-cols-1 md:mt-11 mt-0 mx-auto pr-6'>
              <br />
              <input
                className='md:mb-3 mb-0 md:mt-0 mt-8'
                type='radio'
                name='streamSelect'
                id='twitchSelect'
              />
            </div>
            <div className='grid grid-rows'>
              <label className='md:text-sm mt-10 text-xs text-white text-light font-semibold tracking-widest font-head'>
                Twitch Channel Id:
              </label>
              <input
                className='sm:text-base text-xs sm:w-96 max-w-7xl py-2 px-3 sm:h-9 h-8 text-gray-600 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                type='text'
                id='twitchStream'
                defaultValue={account.stream.twitch}
                onChange={() => setSuccess('')}
              />
            </div>
          </div>
        </div>
        <p className='text-left font-body text-white sm:text-base text-xs pb-4'>
          Only the ID of the stream channel is needed, do <strong>not</strong>{' '}
          copy the whole address.
        </p>
      </div>
      {success !== '' ? (
        <div className='ms:pl-10 pl-8'>
          <p className='sm:w-96 w-48  mx-auto   bg-green-300 mt-8 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
            {success}
          </p>
        </div>
      ) : null}
      <div className='grid grid-cols-1 mt-11 mx-auto pl-10'>
        <button
          className='sm:mx-0 mx-auto sm:w-80 w-40 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={updateStream}
          id='updateStream'
        >
          UPDATE STREAM
        </button>
      </div>
    </div>
  );
};

export default Stream;
