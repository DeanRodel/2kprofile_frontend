import React from 'react';
import IndividualStat from '../IndividualStat';

const ShowDotaStats = ({ stats }) => {
  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          DOTA 2
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat
            type={'Competitive Rank'}
            stat={stats.competitive_rank}
          />
          <IndividualStat
            type={'Solo Competitive Rank'}
            stat={stats.solo_competitive_rank}
          />
          <IndividualStat type={'Estimated MMR'} stat={stats.mmr} />
          <IndividualStat type={'Wins'} stat={stats.wins} />
          <IndividualStat type={'Losses'} stat={stats.loss} />
        </div>
      </div>
    </div>
  );
};

export default ShowDotaStats;
