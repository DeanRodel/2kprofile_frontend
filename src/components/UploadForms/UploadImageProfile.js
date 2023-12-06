
import React, { useState } from 'react';
import axios from 'axios';
import Edit from '../../img/edit.png'

import Loader from '../../img/LoaderSmall.gif';

const UploadImage = ({ setImage, sponsor }) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const uploadFileHandler = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    axios({
      method: 'post',
      url: '/api/nav/uploadPicture',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => {
      setLoading(false);
      setPhoto(res.data.url);
      setImage(res.data.url, sponsor);
    });
  };

  return (
    <div className='grid grid-cols-1'>
      <div className='flex items-center justify-center w-full'>
        <label className='flex flex-col  w-full group'>
          <div className='flex  items-center justify-center'>
            <img className='w-5 mr-2' src={Edit}></img>
            <p className='text-sm text-red-600 group-hover:text-gray-400  underline'>
              edit avatar
            </p>
            {loading ? <img src={Loader} /> : null}
          </div>
          <input
            name='image'
            type='file'
            className='hidden'
            id='profilePicture'
            onChange={uploadFileHandler}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadImage;