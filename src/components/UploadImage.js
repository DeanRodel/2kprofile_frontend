import React, { useState } from 'react';
import axios from 'axios';

import Loader from '../img/LoaderSmall.gif';

const UploadImage = ({ setImage, sponsor, setError }) => {
  //test
  const [loading, setLoading] = useState(false);

  const uploadFileHandler = async (e) => {
    if (e.target.files.length === 0) return;
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    axios({
      method: 'post',
      url: '/api/nav/uploadPicture',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        setLoading(false);
        setError('');
        setImage(res.data.url, sponsor);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data && err.response.data.message) setError(err.response.data.message);
        else setError('Image upload failed');
      });
  };

  return (
    <div className='grid grid-cols-1'>
      <div className='flex items-center justify-center w-full'>
        <label className='flex flex-col border-4 border-dashed w-full h-36 hover:bg-gray-100 hover:border-gray-300 group cursor-pointer'>
          <div className='flex flex-col items-center justify-center mt-12'>
            <>
              {loading ? (
                <img src={Loader} alt='loading' className='-mt-10' />
              ) : (
                <>
                  <svg
                    className='w-10 h-10 text-gray-500 group-hover:text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </>
              )}
            </>
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
