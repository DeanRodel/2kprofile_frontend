import React from 'react';
import IndividualStat from '../IndividualStat';

const ShowWarzoneStats = ({ stats }) => {
  const platforms = {
    psn: 'Playstation',
    xbl: 'Xbox',
  };

  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center '>
          WARZONE
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
          <p className='capitalize md:text-left text-center'>
            {platforms[stats.platform]}
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Kills'} stat={stats.kills} />
          <IndividualStat type={'Deaths'} stat={stats.deaths} />
          <IndividualStat type={'Wins'} stat={stats.wins} />
          <IndividualStat type={'Top Ten'} stat={stats.topTen} />
          <IndividualStat type={'Games Played'} stat={stats.gamesPlayed} />
        </div>
      </div>
    </div>
  );
};

export default ShowWarzoneStats;
