import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UploadImage from '../UploadImage';

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
import ImageLibraryModal from './ImageLibraryModal';

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
];

const Name = ({ account, api, setPlayer, type, setPhotos, team, setTeam }) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [orgImage, setOrgImage] = useState('');

  const [images, setImages] = useState(
    type === 'player' ? account.theme.banner : team.theme.banner
  );
  const [showModal, setShowModal] = useState(false);
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    axios
      .get('/api/nav/theme')
      .then((res) => {
        setThemes(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split('Error: ')[1];
          const serverError = error.split('<br>')[0];
          setError(serverError);
        } else console.log(err);
      });
  }, []);

  function updateDivider() {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };

    let divider = document.querySelector('input[name="divider"]:checked').value;
    let body = { divider: divider };
    if (type === 'player') {
      axios.put('/api/players/updateDivider', body).then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/updateDivider`, body).then((res) => {
        setSuccess(res.data.success);
        setTeam(res.data.team);
      });
    }
  }

  function deletePhoto(image) {
    let body = { index: images.indexOf(image) };

    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };

    if (type === 'player') {
      axios.put('/api/players/updateBanner', body).then((res) => {
        setImages(res.data.player.theme.banner);
        setPhotos(res.data.player.theme.banner);
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      });
    }
    if (type === 'team') {
      axios.put(`/api/teams/${account._id}/updateBanner`, body).then((res) => {
        setImages(res.data.team.theme.banner);
        setPhotos(res.data.team.theme.banner);
        setSuccess(res.data.success);
        setTeam(res.data.team);
      });
    }
  }

  function hideImageLibraryModal() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const api =
        type === 'player'
          ? '/api/nav/playerDashboard'
          : `/api/nav/teamDashboard/${team.slug}`;
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios
        .get(api)
        .then((res) => {
          if (type === 'player') {
            setPlayer(res.data.player);
            setImages(res.data.player.theme.banner);
            setPhotos(res.data.player.theme.banner);
          } else {
            setTeam(res.data.team);
            setImages(res.data.team.theme.banner);
            setPhotos(res.data.team.theme.banner);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setShowModal(false);
  }

  return (
    <div className='w-full sm:grid grid-rows justify-center pb-10' id='Profile'>
      {showModal ? (
        <ImageLibraryModal
          setError={setError}
          hideModal={hideImageLibraryModal}
          themes={themes}
          section='banner'
          orgImage={orgImage}
          api={
            type === 'player'
              ? '/api/players/updateTheme'
              : `/api/teams/${team._id}/updateTheme`
          }
        />
      ) : null}
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center '>
          Theme
        </h5>
        <p className='sm:text-left text-center font-body text-white sm:text-base text-xs pb-4 md:pb-10 pb-20'>
        Image must be smaller than <strong>1.5MB</strong> and of type <strong>jpg/jpeg/png</strong>.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {images.map((image, index, images) => (
          <div className='w-48 m-auto'>
            <div
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              {/* <UploadImage
                setImage={setImage}
                sponsor={images.indexOf(image)}
                setError={setError}
              /> */}
              <label className='flex flex-col border-4 border-dashed w-full h-36 group'>
                <div className='flex flex-col items-center justify-center mt-12'>
                  <svg
                    className='w-10 h-10 text-gray-500 group-hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </div>
              </label>
            </div>
            <div className='flex justify-center text-center mt-4'>
              <button
                className='text-center md:w-80 w-60 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                type='submit'
                onClick={() => {
                  setOrgImage(image);
                  setShowModal(true);
                }}
              >
                Library
              </button>
            </div>
            <button
              className=' md:mb-4 mb-10  bg-white hover:bg-red-400 border-red-400 border-4 hover:text-white text-red-400 text-3xl w-auto px-4 mt-4 rounded justify-center focus:outline-none focus:shadow-outline'
              onClick={() => deletePhoto(image)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-5'>
        {dividers.map((divider) => (
          <div>
            <img
              src={dividers[dividers.indexOf(divider)]}
              className='h-32'
              alt='banner divider'
            />
            <input
              type='radio'
              name='divider'
              value={dividers.indexOf(divider)}
              defaultChecked={account.pattern === dividers.indexOf(divider)}
            />
          </div>
        ))}
      </div>
      {success !== '' ? (
        <label className='w-full bg-green-300 px-5 py-3 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-green-400'>
          {success}
        </label>
      ) : null}
      <div className='flex justify-center mt-10'>
        <button
          className='sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={updateDivider}
        >dsds
          UPDATE DIVIDER
        </button>
      </div>
    </div>
  );
};

export default Name;
