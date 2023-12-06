import React, { useState } from 'react';

import IndividualStat from '../IndividualStat';
import pubgCover from '../../../../img/game-covers/pubg.jpg';

const ShowPubgStats = ({ stats }) => {
  const platforms = {
    kakao: 'Kakao',
    psn: 'Playstation',
    stadia: 'Stadia',
    steam: 'Steam',
    xbox: 'Xbox',
  };

  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold text-black'>
          PLAYERUNKNOWN'S BATTLEGROUNDS
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
          <p className='md:text-left text-center'>
            {platforms[stats.platform]}
          </p>
        </div>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center text-black'>Solo</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Wins'} stat={stats.solo.wins} />
          <IndividualStat type={'Losses'} stat={stats.solo.losses} />
          <IndividualStat type={'Kills'} stat={stats.solo.kills} />
          <IndividualStat type={'Damage Dealt'} stat={stats.solo.damageDealt} />
          <IndividualStat type={'Assists'} stat={stats.solo.assists} />
          <IndividualStat type={'Revives'} stat={stats.solo.revives} />
        </div>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center text-black'>Duo</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Wins'} stat={stats.solo.wins} />
          <IndividualStat type={'Losses'} stat={stats.solo.losses} />
          <IndividualStat type={'Kills'} stat={stats.solo.kills} />
          <IndividualStat type={'Damage Dealt'} stat={stats.solo.damageDealt} />
          <IndividualStat type={'Assists'} stat={stats.solo.assists} />
          <IndividualStat type={'Revives'} stat={stats.solo.revives} />
        </div>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center text-black'>Squad</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-5 uppercase'>
          <IndividualStat type={'Wins'} stat={stats.solo.wins} />
          <IndividualStat type={'Losses'} stat={stats.solo.losses} />
          <IndividualStat type={'Kills'} stat={stats.solo.kills} />
          <IndividualStat type={'Damage Dealt'} stat={stats.solo.damageDealt} />
          <IndividualStat type={'Assists'} stat={stats.solo.assists} />
          <IndividualStat type={'Revives'} stat={stats.solo.revives} />
        </div>
      </div>
    </div>
    // <div className='sm:grid grid-cols-2 md:gap-8 gap-4  max-w-7xl p-8'>
    //   <p className='md:text-left text-center'>{stats.name}</p>
    //   <p className='md:text-left text-center'>{platforms[stats.platform]}</p>
    //   <div className='col-span-2'>
    //     <h3 className='font-semibold text-xl font-bold sm:text-left text-center '>
    //       Solo
    //     </h3>
    //     <div className='flex gap-4'>
    //       <IndividualStat type={'Wins'} stat={stats.solo.wins} />
    //       <IndividualStat type={'Losses'} stat={stats.solo.losses} />
    //       <IndividualStat type={'Kills'} stat={stats.solo.kills} />
    //       <IndividualStat type={'Damage Dealt'} stat={stats.solo.damageDealt} />
    //       <IndividualStat type={'Assists'} stat={stats.solo.assists} />
    //       <IndividualStat type={'Revives'} stat={stats.solo.revives} />
    //     </div>
    //   </div>
    //   <div className='col-span-2'>
    //     <h3 className='font-semibold text-xl font-bold sm:text-left text-center '>
    //       Duo
    //     </h3>
    //     <div className='flex gap-4'>
    //       <IndividualStat type={'Wins'} stat={stats.duo.wins} />
    //       <IndividualStat type={'Losses'} stat={stats.duo.losses} />
    //       <IndividualStat type={'Kills'} stat={stats.duo.kills} />
    //       <IndividualStat type={'Damage Dealt'} stat={stats.duo.damageDealt} />
    //       <IndividualStat type={'Assists'} stat={stats.duo.assists} />
    //       <IndividualStat type={'Revives'} stat={stats.duo.revives} />
    //     </div>
    //   </div>
    //   <div className='col-span-2'>
    //     <h3 className='font-semibold text-xl font-bold sm:text-left text-center '>
    //       Squad
    //     </h3>
    //     <div className='flex gap-4'>
    //       <IndividualStat type={'Wins'} stat={stats.squad.wins} />
    //       <IndividualStat type={'Losses'} stat={stats.squad.losses} />
    //       <IndividualStat type={'Kills'} stat={stats.squad.kills} />
    //       <IndividualStat
    //         type={'Damage Dealt'}
    //         stat={stats.squad.damageDealt}
    //       />
    //       <IndividualStat type={'Assists'} stat={stats.squad.assists} />
    //       <IndividualStat type={'Revives'} stat={stats.squad.revives} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShowPubgStats;
