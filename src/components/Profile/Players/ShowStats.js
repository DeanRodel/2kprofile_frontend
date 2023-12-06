import React, { useState, useEffect } from 'react';

import LeagueStats from './GameStats/ShowLeagueStats';
import TeamfightStats from './GameStats/ShowTeamfightStats';
import PubgStats from './GameStats/ShowPubgStats';
import FortniteStats from './GameStats/ShowFortniteStats';
import ApexStats from './GameStats/ShowApexStats';
import DivisionStats from './GameStats/ShowDivisionStats';
import DotaStats from './GameStats/ShowDotaStats';
import WarzoneStats from './GameStats/ShowWarzoneStats';
import XboxStats from './GameStats/ShowXboxStats';
import CsgoStats from './GameStats/ShowCsgoStats';

import Cog from '../../../img/icons/cog-solid.svg';
import NameModal from '../Settings/NameModal';

const games = {
  league: 'League of Legends',
  teamfight: 'Teamfight Tactics',
  pubg: 'PlayerUnknowns Battlegrounds',
  fortnite: 'Fortnite',
  apex: 'Apex Legends',
  division: 'The Division 2',
  dota: 'DOTA 2',
  csgo: 'Counter Strike: Global Offensive',
  xbox: 'Xbox',
};

const Stats = ({ player, setPlayer, type, showSettings }) => {
  const [background, setBackground] = useState({});
  const [icon, setIcon] = useState('');
  const [selectedGame, setSelectedGame] = useState(player.stats.default);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = player.templates.findIndex(
      (template) => template.section === 'Stats'
    );
    if (player.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${player.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Stats/Stats-${player.templates[index].template}.png)`,
      });
    }
    setIcon(
      `${process.env.PUBLIC_URL}/templates/Stats/Icons/Stats-${player.templates[index].template}.png`
    );
    if (selectedGame === null && player.stats.games.length > 0) {
      setSelectedGame(player.stats.games[0]);
    }
  }, [player]);

  if (type === 'team') {
    typeProfile = 'OUR STATS';
  } else {
    typeProfile = 'MY STATS';
  }

  return (
    <div
      className='w-full flex justify-center bg-white py-10 px-10 sm:py-20 sm:px-0 sm:min-h-h40 min-h-96'
      // style={background}
      id='Stats'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={player}
          setPlayer={setPlayer}
          component={'Stats'}
          type={type}
          setSelectedGame={setSelectedGame}
        />
      ) : null}
      <div className='max-w-4xl w-full'>
        <div className='md:mx-4 mx-0 mb-4'>
          <div
            className={showSettings ? 'flex cursor-pointer' : 'flex'}
            onClick={() => {
              if (showSettings) setShowSettingsModal(true);
            }}
          >
            {showSettings ? (
              <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1'>
                <div>
                  <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0'></div>
                  <img
                    alt='Setting'
                    src={Cog}
                    className='h-6 sm:h-12 relative '
                  ></img>
                </div>
              </div>
            ) : null}
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-black'>
              {typeProfile}
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-4 sm:mt-6 mb-6'></div>
        </div>

        <div className='flex justify-end md:-mt-24 md:mb-14'>
          <select
            className='text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body'
            id='showSelectedGame'
            onChange={() =>
              setSelectedGame(document.getElementById('showSelectedGame').value)
            }
            defaultValue={player.stats.default}
          >
            {player.stats.games.map((game) => (
              <option value={game}>{games[game]}</option>
            ))}
          </select>
        </div>
        <div className='sm:grid grid-cols-3 md:gap-20 gap-10  max-w-7xl p-8'>
          {selectedGame ? (
            <img
              src={
                selectedGame === 'xbox'
                  ? `${player.stats.xboxlive.displayImage}`
                  : `${process.env.PUBLIC_URL}/game-covers/${selectedGame}.jpg`
              }
              alt='game cover'
            />
          ) : null}
          <div className='col-span-2'>
            {selectedGame === 'league' ? (
              <LeagueStats stats={player.stats.leagueOfLegends} />
            ) : null}
            {selectedGame === 'teamfight' ? (
              <TeamfightStats stats={player.stats.teamfightTactics} />
            ) : null}
            {selectedGame === 'pubg' ? (
              <PubgStats stats={player.stats.pubg} />
            ) : null}
            {selectedGame === 'fortnite' ? (
              <FortniteStats stats={player.stats.fortnite} />
            ) : null}
            {selectedGame === 'apex' ? (
              <ApexStats stats={player.stats.apex} />
            ) : null}
            {selectedGame === 'division' ? (
              <DivisionStats stats={player.stats.division} />
            ) : null}
            {selectedGame === 'dota' ? (
              <DotaStats stats={player.stats.dota} />
            ) : null}
            {selectedGame === 'warzone' ? (
              <WarzoneStats stats={player.stats.warzone} />
            ) : null}
            {selectedGame === 'csgo' ? (
              <CsgoStats stats={player.stats.csgo} />
            ) : null}
            {selectedGame === 'xbox' ? (
              <XboxStats stats={player.stats.xboxlive} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
