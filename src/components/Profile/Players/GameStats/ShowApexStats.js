import React from 'react';

import IndividualStat from '../IndividualStat';

const ShowApexStats = ({ stats }) => {
  const platforms = {
    PC: 'PC',
    PS4: 'Playstation',
    X1: 'Xbox One',
  };

  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          APEX LEGENDS
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
          <p className='capitalize md:text-left text-center'>
            {platforms[stats.platform]}
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Level'} stat={stats.level} />
          <IndividualStat type={'Rank'} stat={stats.rankName} />
          <IndividualStat type={'Rank Score'} stat={stats.rankScore} />
          <IndividualStat type={'Kills'} stat={stats.kills} />
        </div>
      </div>
    </div>
  );
};

export default ShowApexStats;
