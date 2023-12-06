import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bio = ({ account, setPlayer, type, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(account.templates[5].show);

  function updateBio() {
    let body = {
      section1: document.getElementById('section1').value,
      section2: document.getElementById('section2').value,
      section3: document.getElementById('section3').value,
    };
    if (type === 'player') {
      axios.put('/api/players/updateBio', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/updateBio`, body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.team);
      });
    }
    // }
  }

  function toggle() {
    let toggle = document.getElementById('toggleBio');
    setShow(toggle.checked);
    const body = {
      section: 'Bio',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put("/api/players/toggleSection", body);
      const templates = account.templates;
      templates[5].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[5].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe pt-10'
      id='Bio'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full md:px-0 px-7'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Biography
        </h5>
      </div>
      <div className='mt-2 md:px-8 px-7 sm:justify-start justify-center md:pb-16 pb-6 flex'>
        <div className='flex'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggleBio'
              className='toggle-checkbox absolute block w-6 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer'
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
      <div className='md:grid grid-cols-3 lg:gap-5 gap-3 m-7'>
        {/* <div className='lg:w-80 max-w-7xl h-80 grid'> */}
        <div className='max-w-7xl h-80 grid'>
          <label className='md:text-sm text-xs h-5 mx-auto text-white text-light font-semibold tracking-widest font-head row-span-1'>
            Who I am
          </label>
          <textarea
            className='py-2 px-3 h-64 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
            type='text'
            id='section1'
            defaultValue={account.biography.section1}
          />
        </div>
        <div className='max-w-7xl h-80 md:mt-0 mt-7 grid'>
          <label className='md:text-sm text-xs h-5 mx-auto text-white text-light font-semibold tracking-widest font-head row-span-1'>
            Teams
          </label>
          <textarea
            className='py-2 px-3 h-64 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
            type='text'
            id='section2'
            defaultValue={account.biography.section2}
          />
        </div>
        <div className='max-w-7xl h-80 md:mt-0 mt-7 grid'>
          <label className='md:text-sm text-xs h-5 mx-auto text-white text-light font-semibold tracking-widest font-head row-span-1'>
            Career Highlights
          </label>
          <textarea
            className='py-2 px-3 h-64 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
            type='text'
            id='section3'
            defaultValue={account.biography.section3}
          />
        </div>
      </div>
      {success !== '' ? (
        <p className='mx-8 bg-green-600 py-3 mb-5 text-center sm:text-sm text-xs shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
          {success}
        </p>
      ) : null}
      <div className='grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0 sm:pt-0 pt-7 sm:pb-10 pb-20'>
        <button
          className=' sm:mx-0 mx-auto sm:w-80 w-40 sm:text-base text-xs font-oswald px-11  bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={updateBio}
        >
          UPDATE BIO
        </button>
      </div>
    </div>
  );
};

export default Bio;
