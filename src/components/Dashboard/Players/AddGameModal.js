import React, { useState } from 'react';
import Close from '../../../img/icons/close_black.png';

import SetLeagueStats from './SetGameStats/SetLeagueStats';
import SetTeamfightStats from './SetGameStats/SetTeamfightStats';
import SetPubgStats from './SetGameStats/SetPubgStats';
import SetFortniteStats from './SetGameStats/SetFortniteStats';
import SetApexStats from './SetGameStats/SetApexStats';
import SetDivisionStats from './SetGameStats/SetDivisionStats';
import SetDotaStats from './SetGameStats/SetDotaStats';
import SetCsgoStats from './SetGameStats/SetCsgoStats';
import SetXboxStats from './SetGameStats/SetxBoxLiveStats';

export default function AddGame({ hideAddGame, setPlayer, setDefaultGame }) {
  const [selectedGame, setSelectedGame] = useState('league');

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
          onClick={hideAddGame}
        ></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='inline-block align-bottom rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-0 px-8 bg-gray-200'>
          <img
            className='w-7 ml-auto mr-2 mt-2'
            src={Close}
            onClick={hideAddGame}
          ></img>
          <div className='flex justify-center'>
            <div className='border-2'>
              {/* Platform */}
              <p className='sm:text-base text-xs font-body font-bold pb-3'>
                Select Game
              </p>
              <select
                className='text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body'
                id='selectedGame'
                onChange={() =>
                  setSelectedGame(document.getElementById('selectedGame').value)
                }
              >
                <option value='league'>League of Legends</option>
                <option value='teamfight'>Teamfight Tactics</option>
                <option value='pubg'>PlayerUnknown's Battlegrounds</option>
                <option value='fortnite'>Fortnite</option>
                <option value='apex'>Apex Legends</option>
                <option value='division'>The Division 2</option>
                <option value='dota'>DOTA 2</option>
                <option value='csgo'>Counter Strike: Global Offensive</option>
                <option value='xbox'>Xbox</option>
              </select>

              {selectedGame === 'league' ? (
                <SetLeagueStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'teamfight' ? (
                <SetTeamfightStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'pubg' ? (
                <SetPubgStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'fortnite' ? (
                <SetFortniteStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'apex' ? (
                <SetApexStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'division' ? (
                <SetDivisionStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'dota' ? (
                <SetDotaStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'csgo' ? (
                <SetCsgoStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
              {selectedGame === 'xbox' ? (
                <SetXboxStats
                  setPlayer={setPlayer}
                  setDefaultGame={setDefaultGame}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
