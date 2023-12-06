import React from 'react';

const IndividualStat = ({ type, stat, image }) => {
  return (
    <div className='flex items-center bg-black opacity-60 shadow-xl gap-5 px-6 py-5 mt-5 hover:bg-gray-400 hover:opacity-100 transition'>
      <div className='flex flex-col'>
        <p>{type}</p>
        <p className='text-2xl font-semibold text-black-300 block'>{stat}</p>
        {image && (
          <img
            src={image}
            className='w-1/2 pt-3 self-end'
            alt='achievement icon'
          />
        )}
      </div>
    </div>
  );
};

export default IndividualStat;
