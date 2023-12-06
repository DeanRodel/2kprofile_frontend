import React, { useState } from 'react';

import IndividualStat from '../IndividualStat';

const ShowFortniteStats = ({ stats }) => {
  return (
    <div>
      <div className='text-white relative pb-10'>
        <h3 className='font-semibold text-xl font-bold sm:text-left text-center text-black'>
          FORTNITE
        </h3>
        <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
          <p className='md:text-left text-center md:mr-8 mr-0'>{stats.name}</p>
        </div>
        <div className='grid sm:grid-cols-3 py-2 gap-1 sm:gap-5 uppercase'>
          <div>
            <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
              <p className='md:text-left text-center text-black'>Solo</p>
            </div>
            {stats.solo ? (
              <>
                <IndividualStat type={'Kills'} stat={stats.solo.kills} />
                <IndividualStat type={'K/D Ratio'} stat={stats.solo.kd} />
                <IndividualStat type={'Top 1'} stat={stats.solo.placetop1} />
                <IndividualStat type={'Top 10'} stat={stats.solo.placetop10} />
                <IndividualStat type={'Top 25'} stat={stats.solo.placetop25} />
                <IndividualStat
                  type={'Matched Played'}
                  stat={stats.solo.matchesplayed}
                />
              </>
            ) : (
              <>
                <IndividualStat type={'Kills'} stat={'N/A'} />
                <IndividualStat type={'K/D Ratio'} stat={'N/A'} />
                <IndividualStat type={'Top 1'} stat={'N/A'} />
                <IndividualStat type={'Top 10'} stat={'N/A'} />
                <IndividualStat type={'Top 25'} stat={'N/A'} />
                <IndividualStat type={'Matched Played'} stat={'N/A'} />
              </>
            )}
          </div>
          <div>
            <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
              <p className='md:text-left text-center text-black'>Duo</p>
            </div>
            {stats.duo ? (
              <>
                <IndividualStat type={'Kills'} stat={stats.duo.kills} />
                <IndividualStat type={'K/D Ratio'} stat={stats.duo.kd} />
                <IndividualStat type={'Top 1'} stat={stats.duo.placetop1} />
                <IndividualStat type={'Top 10'} stat={stats.duo.placetop10} />
                <IndividualStat type={'Top 25'} stat={stats.duo.placetop25} />
                <IndividualStat
                  type={'Matched Played'}
                  stat={stats.duo.matchesplayed}
                />
              </>
            ) : (
              <>
                <IndividualStat type={'Kills'} stat={'N/A'} />
                <IndividualStat type={'K/D Ratio'} stat={'N/A'} />
                <IndividualStat type={'Top 1'} stat={'N/A'} />
                <IndividualStat type={'Top 10'} stat={'N/A'} />
                <IndividualStat type={'Top 25'} stat={'N/A'} />
                <IndividualStat type={'Matched Played'} stat={'N/A'} />
              </>
            )}
          </div>
          <div>
            <div className='mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head'>
              <p className='md:text-left text-center text-black'>Squad</p>
            </div>
            {stats.squad ? (
              <>
                <IndividualStat type={'Kills'} stat={stats.squad.kills} />
                <IndividualStat type={'K/D Ratio'} stat={stats.squad.kd} />
                <IndividualStat type={'Top 1'} stat={stats.squad.placetop1} />
                <IndividualStat type={'Top 10'} stat={stats.squad.placetop10} />
                <IndividualStat type={'Top 25'} stat={stats.squad.placetop25} />
                <IndividualStat
                  type={'Matched Played'}
                  stat={stats.squad.matchesplayed}
                />
              </>
            ) : (
              <>
                <IndividualStat type={'Kills'} stat={'N/A'} />
                <IndividualStat type={'K/D Ratio'} stat={'N/A'} />
                <IndividualStat type={'Top 1'} stat={'N/A'} />
                <IndividualStat type={'Top 10'} stat={'N/A'} />
                <IndividualStat type={'Top 25'} stat={'N/A'} />
                <IndividualStat type={'Matched Played'} stat={'N/A'} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFortniteStats;
