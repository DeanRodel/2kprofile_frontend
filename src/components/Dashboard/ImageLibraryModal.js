import axios from 'axios';
import { useState, useEffect } from 'react';

import UploadImage from '../UploadImage';

export default function ImageLibraryModal({
  hideModal,
  themes,
  setImagePath,
  api,
  section,
  orgImage,
}) {
  const [index, setIndex] = useState(0);
  const [imageCounter, setImageCounter] = useState(0);
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const categoriesList = [];
    let i = 0;
    themes.forEach((theme) => {
      categoriesList.push({ name: theme.name, index: i });
      i++;
    });
    setCategories(categoriesList);
  }, [themes]);

  useEffect(() => {
    let images = [];
    images = images.concat(themes[index].background);
    images = images.concat(themes[index].banner);
    setImageList(images);
  }, [index]);

  const okClickHandler = () => {
    if (error!=='') {
      hideModal();return;}
    let imagePath = '';
    if (image === '') {
      imagePath = imageList[imageCounter];
    } else {
      imagePath = image;
    }

    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    axios({
      method: 'put',
      url: api,
      data: {
        customTheme: {
          [section]: imagePath,
          orgImage: orgImage,
        },
      },
    }).catch((err) => {
      console.log(err);
    });
    hideModal();
  };

  const next = () => {
    setImageCounter(
      imageCounter + 1 >= imageList.length ? 0 : imageCounter + 1
    );
  };

  const prev = () => {
    setImageCounter(imageCounter - 1 < 0 ? imageList.length : imageCounter - 1);
  };

  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
          onClick={hideModal}
        ></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div className='grid grid-cols-1 sm:w-96 max-w-7xl sm:mx-auto mx-7 mt-7'>
            <select
              className='h-9 border-2 border-dray-700 md:text-base text-xs text-gray-600'
              id='templateSelect'
              onChange={(event) => setIndex(event.target.value)}
            >
              {categories.map((category) => {
                return (
                  <option
                    key={`${category.name}`}
                    id={`${category.name}`}
                    value={`${category.index}`}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-center justify-center'>
              <div className='mt-3 text-center s'>
                <div className='mt-2 flex justify-center'>
                  <button className='text-black' onClick={prev}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='31.418'
                      height='31.418'
                    >
                      <path d='M26.585 3v25.418a3.002 3.002 0 01-4.883 2.335L5.949 18.044a2.999 2.999 0 010-4.67L21.703.665a3.004 3.004 0 013.178-.372A3.003 3.003 0 0126.585 3z' />
                    </svg>
                  </button>
                  <img
                    src={imageList[imageCounter]}
                    id='theme-img'
                    alt={`${imageList[imageCounter]}`}
                    style={{ width: 400, height: 200 }}
                  />
                  <button className='text-black' onClick={next}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='31.418'
                      height='31.418'
                    >
                      <path d='M26.586 15.708c0 .909-.41 1.766-1.117 2.335L9.715 30.753a3.003 3.003 0 01-3.177.372 3.003 3.003 0 01-1.706-2.707V3c0-1.154.664-2.208 1.706-2.707a3.004 3.004 0 013.178.372l15.755 12.709a2.996 2.996 0 011.115 2.334z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center'>or</div>
          <br />
          <div className='text-center'>
            Upload your own image: &nbsp;
            {/* <input
              type='text'
              className='border-2 border-gray-800	rounded'
              id='customTemplate'
            ></input> */}
            <div
              className='w-36 m-auto'
              style={{
                backgroundImage: `url(${image ? image : orgImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <UploadImage setImage={setImage} setError={setError} />
            </div>
            {error && (
              <p className='text-center font-body text-red-600 sm:text-base text-xs pb-4 md:pb-10 pb-20'>
                {error}
              </p>
            )}
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button
              type='button'
              className='mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
              onClick={hideModal}
            >
              Cancel
            </button>
            <button
              type='button'
              className='mt-3 w-20 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
              onClick={okClickHandler}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
