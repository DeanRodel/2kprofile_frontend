import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lock from '../../img/icons/padlock-white.png';
import { Link } from 'react-router-dom';

const Store = ({ account, setPlayer, type, tier, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(account.templates[10].show);

  function updateStore() {
    let body = { storeId: document.getElementById('storeId').value };
    if (type === 'player') {
      axios.put('/api/players/updateStore', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/updateStore`, body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.team);
      });
    }
  }

  function toggle() {
    let toggle = document.getElementById('toggleStore');
    setShow(toggle.checked);
    const body = {
      section: 'Store',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put('/api/players/toggleSection', body);
      const templates = account.templates;
      templates[10].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[10].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  // useEffect(() => {
  //   if (tier !== 'platinum') {
  //     document.getElementById('toggleStore').disabled = true;
  //     document.getElementById('updateStore').disabled = true;
  //     document.getElementById('storeId').disabled = true;
  //   }
  // }, []);

  return (
    <div className='w-full sm:grid grid-rows justify-center bg-cobe' id='Store'>
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Store
        </h5>
      </div>
      <div className='flex sm:justify-start justify-center pb-12'>
        <div className='mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggleStore'
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
      {success !== '' ? (
        <p className='w-full bg-green-300 px-5 py-3 mb-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
          {success}
        </p>
      ) : null}

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 sm:mt-0 mt-5 mx-7 justify-center pt-11'>
        <div className='grid grid-cols-1 mx-auto lg:w-80 max-w-7xl'>
          <label className='md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head'>
            Ecwid Store Id:
          </label>
          <input
            className='py-2 px-3 h-9 border-2 text-gray-600 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
            type='text'
            id='storeId'
            defaultValue={account.storeId}
          />
        </div>
        <div className='grid grid-cols-1 lg:w-80 max-w-7xl mx-auto'>
          <br />
          <button
            className='sm:mx-0 mx-auto sm:w-80 w-48 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
            onClick={updateStore}
            id='updateStore'
          >
            UPDATE STORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
