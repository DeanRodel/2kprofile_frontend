import { useState, useEffect } from 'react';

import UploadImage from '../UploadImage';

export default function SectionsModal({
  hideModal,
  template,
  templates,
  setTemplates,
  images,
  allTemplates,
}) {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState('');


  const okClickHandler = () => {
    // const customTemplate = document.getElementById('customTemplate').value;
    if (image !== '') {
      const order = document.getElementById('order').value;
      const templatesTemp = templates;
      let templateIndex = 0;
      let currentTemplate = template;
      templatesTemp.map((template) => {
        if (template.section === currentTemplate.section) {
          templatesTemp[templateIndex] = {
            section: template.section,
            template: 'custom',
            order: parseInt(order),
            customTemplate: image,
          };
        }
        templateIndex += 1;
      });
      setTemplates(templatesTemp);
    } else {
      const order = document.getElementById('order').value;
      const templateTemp = template;
      templateTemp.template = allTemplates[index];
      templateTemp.order = parseInt(order);
      const templatesTemp = templates;
      let templateIndex = 0;
      templatesTemp.map((template) => {
        if (template.section === templateTemp.section) {
          templatesTemp[templateIndex] = templateTemp;
        }
        templateIndex += 1;
      });
      setTemplates(templatesTemp);
    }
    hideModal();
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 1) % images.length) + images.length) % images.length
    );
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
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-center justify-center'>
              <div className='mt-3 text-center s'>
                <div className='mt-2 flex space-x-10 justify-center'>
                  <button className='text-black' onClick={prev}>
                    &lt;
                  </button>
                  <img
                    src={images[index]}
                    id='templateImg'
                    alt=''
                    style={{ width: 400, height: 200 }}
                  />
                  <button className='text-black' onClick={next}>
                    &gt;
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
            <div className='w-36 m-auto'>
              <UploadImage setImage={setImage} />
            </div>
          </div>
          <div className='grid grid-cols-1 md:mt-11 mt-0 lg:w-80 max-w-7xl mx-auto md:pt-0 pt-10'>
            <label className='md:text-sm text-xs text-black text-light font-semibold tracking-widest font-head'>
              Order:
            </label>
            <select
              className='text-gray-600 md:text-lg text-xs col-span-5 h-11 rounded-md px-3'
              type='text'
              id='order'
              defaultValue={template.order}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </select>
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
