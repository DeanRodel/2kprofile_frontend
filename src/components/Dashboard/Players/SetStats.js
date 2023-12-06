import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddGame from './AddGameModal';

const SetStats = ({ account, setPlayer, setSelectedGame, setTeam }) => {
  const [show, setShow] = useState(account.templates[4].show);

  const [showAddGame, setShowAddGame] = useState(false);

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

  function hideAddGame() {
    setShowAddGame(false);
  }

  function setDefaultStat(game) {
    let body = { game: game };
    axios.put('/api/players/setDefaultStat', body).then((res) => {
      setPlayer(res.data.player);
      setSelectedGame(game);
    });
  }

  function removeStat(game) {
    let body = { game: game };
    axios.put('/api/players/removeStat', body).then((res) => {
      setPlayer(res.data.player);
      if (account.stats.default === game) {
        setSelectedGame('');
      }
    });
  }

  function toggle() {
    let toggle = document.getElementById('toggleStats');
    setShow(toggle.checked);
    const body = {
      section: 'Stats',
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put("/api/players/toggleSection", body);
      const templates = account.templates;
      templates[4].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[4].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  return (
    <div
      className='w-full sm:grid grid-rows justify-center bg-cobe pt-10'
      id='Stats'
    >
      {showAddGame ? (
        <>
          <AddGame
            hideAddGame={hideAddGame}
            setPlayer={setPlayer}
            setDefaultGame={setSelectedGame}
          />
        </>
      ) : null}
      <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
        <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
          Stats
        </h5>
      </div>
      <div className='flex sm:justify-start justify-center sm:pb-24 pb-16'>
        <div className='mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6'>
          <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
            Hide
          </p>
          <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggleStats'
              className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
              onChange={toggle}
              checked={show}
            />
            <p
              for='toggle'
              className='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
            ></p>
          </div>
          <label
            for='toggle'
            className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right'
          >
            Show
          </label>
        </div>
      </div>
      {account.stats.games.map((game) => (
        <div className='bg-white h-9 justify-center mx-5 mt-1'>
          <div className='flex items-center justify-between'>
            <div className=' items-center flex '>
              <p className='pl-3 sm:text-base text-xs sm:pt-1 pt-2 font-medium'>
                {games[game]}
              </p>
            </div>
            <div className='flex'>
              <div className='sm:col-span-1 col-span-2 flex justify-self-center items-center'>
                <p
                  className='text-red-700 underline sm:text-base text-xs hover:text-red-500 cursor-pointer pl-1 sm:pt-1 pt-2'
                  onClick={() => setDefaultStat(game)}
                >
                  make default
                </p>
              </div>
              <div className='flex items-center justify-self-center'>
                <p
                  className='text-center sm:text-base text-xs text-red-700 underline hover:text-red-500 pl-3 pr-3 sm:pt-1 pt-2 cursor-pointer'
                  onClick={() => removeStat(game)}
                >
                  remove
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0  pt-10'>
        <button
          className=' sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base text-sm font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700'
          onClick={() => setShowAddGame(true)}
        >
          ADD A GAME
        </button>
      </div>
    </div>
  );
};

export default SetStats;
