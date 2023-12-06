import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UploadImages from '../../components/UploadForms/UploadImageIntegration';
import Lock from '../../img/icons/padlock-white.png';

const Photos = ({ account, tier, setPlayer, setPhotos, type, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(account.templates[8].show);

  // const [photos, setPhotos] = useState(account.photos);
  const [photo, setPhoto] = useState('');

  function hideModal() {
    setShowModal(false);
  }

  function uploadPhotos() {
    let body = { link: photo };
    if (type === 'player') {
      axios
        .put('/api/players/updatePhotos', body)
        .then((res) => {
          setSuccess(res.data.success);
          setError('');
          setPhotos(res.data.photos);
          setPlayer(res.data.player);
        })
        .catch((err) => {
          console.log(err);
          const error = err.response.data.split('Error: ')[1];
          const serverError = error.split('<br>')[0];
          setError(serverError);
        });
    }
    if (type === 'team') {
      axios
        .put(`/api/teams/${account._id}/updatePhotos`, body)
        .then((res) => {
          setSuccess(res.data.success);
          setError('');
          setPhotos(res.data.photos);
          setPlayer(res.data.team);
        })
        .catch((err) => {
          const error = err.response.data.split('Error: ')[1];
          const serverError = error.split('<br>')[0];
          setError(serverError);
        });
    }
  }

  function toggle() {
    let toggle = document.getElementById('togglePhotos');
    setShow(toggle.checked);
    const body = {
      section: 'Photos',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put('/api/players/toggleSection', body);
      const templates = account.templates;
      templates[8].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[8].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  useEffect(() => {
    if (tier === 'bronze') {
      document.getElementById('updatePhotos').disabled = true;
      document.getElementById('togglePhotos').disabled = true;
    }
  }, []);

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe pt-10'
      id='Photos'
    >
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full sm:mx-7 mx-0'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Photos
        </h5>
      </div>

      <div className='flex sm:justify-start justify-center pb-12 sm:mx-7 mx-0'>
        <div className='mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='togglePhotos'
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
      <div className='md:flex mx-7'>
        <div className='w-full md:pb-0 pb-10 md:ml-10 ml-0'>
          <div className='sm:w-48 sm:h-48 w-38 h-38 m-auto'>
            <div
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <UploadImages setImage={setPhoto} />
            </div>
          </div>
        </div>
        <div className='col-span-2 justify-self-center md:pl-10 pl-0'>
          <button
            className='sm:mx-0 mx-auto sm:w-80 w-40 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
            onClick={uploadPhotos}
            id='updatePhotos'
          >
            ADD PHOTOS
          </button>
        </div>
      </div>
      {success !== '' ? (
        <div className='mx-7'>
          <p className='mx-auto sm:w-full w-40 h-full bg-green-300 px-5  mt-3 pt-2 text-center sm:text-sm text-xs shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400'>
            {success}
          </p>
        </div>
      ) : null}
      {error !== '' ? (
        <div className='mx-7'>
          <p className='mx-auto sm:w-full w-40 h-full bg-red-300 px-5  mt-3 pt-2 text-center sm:text-sm text-xs shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400'>
            {error}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Photos;
