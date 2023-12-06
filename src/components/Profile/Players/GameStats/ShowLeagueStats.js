import React, { useState } from 'react';

import IndividualStat from '../IndividualStat';

const ShowLeagueStats = ({ stats }) => {
  const regions = {
    na1: 'North America',
    eun1: 'Europe Nordic & East',
    euw1: 'Europe West',
    la1: 'Latin America North',
    la2: 'Latin America South',
    oc1: 'Oceania',
    br1: 'Brazil',
    ru: 'Russia',
    tr1: 'Turkey',
    jp1: 'Japan',
    kr: 'Korea',
  };

  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          LEAGUE OF LEGENDS
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>
            {stats.summonerName}
          </p>
          <p className='md:text-left text-center'>{regions[stats.region]}</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Tier'} stat={stats.tier} />
          <IndividualStat type={'Rank'} stat={stats.rank} />
          <IndividualStat type={'League Points'} stat={stats.leaguePoints} />
          <IndividualStat type={'Wins'} stat={stats.wins} />
          <IndividualStat type={'Losses'} stat={stats.losses} />
        </div>
      </div>
    </div>
  );
};

export default ShowLeagueStats;
