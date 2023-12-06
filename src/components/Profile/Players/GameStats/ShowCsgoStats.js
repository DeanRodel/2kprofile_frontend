import React from 'react';

import IndividualStat from '../IndividualStat';

const ShowApexStats = ({ stats }) => {
  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          COUNTER-STRIKE: GLOBAL OFFENSIVE
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>
            {stats.steamId}
          </p>
          <p className='capitalize md:text-left text-center'>Steam</p>
        </div>
        <p className='font-semibold text-lg font-head sm:text-left text-center text-black '>
          Score
        </p>
        <div className='grid sm:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Score'} stat={stats.score.displayValue} />
          <IndividualStat type={'Percentile'} stat={stats.score.percentile} />
        </div>
        <p className='font-semibold text-lg font-head sm:text-left text-center text-black'>
          Kills
        </p>
        <div className='grid sm:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Kills'} stat={stats.kills.displayValue} />
          <IndividualStat type={'Percentile'} stat={stats.kills.percentile} />
        </div>
        <p className='font-semibold text-lg font-head sm:text-left text-center text-black'>
          K/D Ratio
        </p>
        <div className='grid sm:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'K/D'} stat={stats.kd.displayValue} />
          <IndividualStat type={'Percentile'} stat={stats.kd.percentile} />
        </div>
        <p className='font-semibold text-lg font-head sm:text-left text-center text-black'>
          Damage
        </p>
        <div className='grid sm:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Damage'} stat={stats.damage.displayValue} />
          <IndividualStat type={'Percentile'} stat={stats.damage.percentile} />
        </div>
        <p className='font-semibold text-lg font-head sm:text-left text-center text-black'>
          Wins
        </p>
        <div className='grid sm:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Wins'} stat={stats.wins.displayValue} />
          <IndividualStat type={'Percentile'} stat={stats.wins.percentile} />
        </div>
      </div>
    </div>
  );
};

export default ShowApexStats;
