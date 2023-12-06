import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../img/LoaderSmall.gif';
import Lock from '../../img/icons/padlock-white.png';
import { Link } from 'react-router-dom';
import Locked from '../Locked';

const Videos = ({ account, tier, setPlayer, setTeam, setVideos, type }) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(account.templates[9].show);
  // const [videos, setVideos] = useState(account.videos);

  function hideModal() {
    setShowModal(false);
  }

  function uploadVideo() {
    setLoading(true);
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    let body = { url: document.getElementById('videoURL').value };
    if (type === 'player') {
      axios
        .put('/api/players/updateVideos', body)
        .then((res) => {
          setSuccess(res.data.success);
          setVideos(res.data.videos);
          setPlayer(res.data.player);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split('Error: ')[1];
            const serverError = error.split('<br>')[0];
            setError(serverError);
          } else console.log(err);
          setLoading(false);
        });
    }
    if (type === 'team') {
      axios
        .put(`/api/teams/${account._id}/updateVideos`, body)
        .then((res) => {
          setSuccess(res.data.success);
          setVideos(res.data.videos);
          setPlayer(res.data.team);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split('Error: ')[1];
            const serverError = error.split('<br>')[0];
            setError(serverError);
          } else console.log(err);
          setLoading(false);
        });
    }
  }

  function toggle() {
    let toggle = document.getElementById('toggleVideos');
    setShow(toggle.checked);
    const body = {
      section: 'Videos',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put('/api/players/toggleSection', body);
      const templates = account.templates;
      templates[9].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[9].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  useEffect(() => {
    if (tier === 'bronze') {
      document.getElementById('videoURL').disabled = true;
      document.getElementById('updateVideos').disabled = true;
      document.getElementById('toggleVideos').disabled = true;
    }
  }, []);

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe pt-10'
      id='Videos'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Videos
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
              id='toggleVideos'
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
        <div className='mx-6'>
          <p className=' sm:w-full max-w-7xl bg-green-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
            {success}{' '}
          </p>
        </div>
      ) : null}
      {error !== '' ? (
        <div className='mx-6'>
          <p className='w-full bg-red-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400'>
            {error}
          </p>
        </div>
      ) : null}
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-0 mt-5 mx-7 justify-center'>
        <div className='grid grid-cols-1 md:mt-11 mt-0 mx-auto sm:w-80 max-w-7xl'>
          <label className='md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head'>
            Youtube Channel Id:
          </label>
          <input
            className='py-2 px-3 h-9
             border-2 text-gray-600 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
            type='text'
            id='videoURL'
            onChange={() => setSuccess('')}
          />
        </div>

        <div className='grid grid-cols-1 md:mt-11 mt-0 lg:w-80 max-w-7xl mx-auto'>
          <br />
          <button
            className='sm:mx-0 mx-auto sm:w-80 w-46 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
            onClick={uploadVideo}
            id='updateVideos'
          >
            UPDATE VIDEOS
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <label className='pt-5 md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head'>
          Please enter your Channel Id (e.g. UCKDllAaEQIQlD62IwlSp9lg)
        </label>
      </div>
      {loading ? (
        <div className='flex justify-center'>
          {' '}
          <img src={Loader} />{' '}
        </div>
      ) : null}
      {/* {success !== '' ? (
        <p className='w-full bg-green-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
          {success}
        </p>
      ) : null} 
      {error !== '' ? (
        <p className='w-full bg-red-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-red-400'>
          {error}
        </p>
      ) : null} */}
    </div>
  );
};

export default Videos;
