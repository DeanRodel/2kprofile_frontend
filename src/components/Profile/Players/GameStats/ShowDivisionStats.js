import React from 'react';

import IndividualStat from '../IndividualStat';

const ShowDivisionStats = ({ stats }) => {
  const platforms = {
    uplay: 'PC/Uplay',
    psn: 'Playstation',
    xbl: 'Xbox',
  };

  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          THE DIVISION 2
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
          <p className='capitalize md:text-left text-center'>
            {platforms[stats.platform]}
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'PVP Kills'} stat={stats.kills_pvp} />
          <IndividualStat type={'NPC Kills'} stat={stats.kills_npc} />
          <IndividualStat type={'PvE Level'} stat={stats.level_pve} />
          <IndividualStat type={'DZ Level'} stat={stats.level_dz} />
        </div>
      </div>
    </div>
  );
};

export default ShowDivisionStats;
