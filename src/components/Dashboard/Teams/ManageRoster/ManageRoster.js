import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactCountryFlag from 'react-country-flag';

import Twitt from '../../../../img/social-media/twitter.png';
import Insta from '../../../../img/social-media/insta.png';
import Twitch from '../../../../img/social-media/twitch_white.png';
import YouTube from '../../../../img/social-media/youtube.png';
import Discord from '../../../../img/social-media/discord_white.png';
import Logo from '../../../../img/logos/emailLogo.png';

import ChangeRole from './ChangeRole';
import DeleteMember from './DeleteMember';
import Invite from './Invite';

const ManageRoster = ({ team, setTeam }) => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [error, setError] = useState('');
  const [show, setShow] = useState(team.templates[3].show);

  const [showChangeRole, setShowChangeRole] = useState(false);
  const [showDeleteMember, setShowDeleteMember] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  function isPlayerOnteam(player) {
    if (team.roster.filter((member) => member._id === player._id).length > 0) {
      return true;
    }
    return false;
  }

  function findPlayer() {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    let body = {
      search: document.getElementById('name').value,
    };
    axios
      .put('/api/players/searchForPlayerToInvite', body)
      .then((res) => {
        setPlayers(res.data.players);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          let error = err.response.data.split('Error: ')[1];
          let serverError = error.split('<br>')[0];
          setError(serverError);
        } else console.log(err);
        setPlayers([]);
        setCurrentPlayer({});
      });
  }

  function toggle() {
    let toggle = document.getElementById('toggleRoster');
    setShow(toggle.checked);
    const body = {
      section: 'Roster',
      value: toggle.checked,
    };
    axios.put(`/api/teams/${team._id}/toggleSection`, body);
    const templates = team.templates;
    templates[7].show = toggle.checked;
    setTeam({ ...team, templates: templates });
  }

  function openChangeRole(player) {
    setShowChangeRole(true);
    setCurrentPlayer(player);
  }

  function openDeleteMember(player) {
    setShowDeleteMember(true);
    setCurrentPlayer(player);
  }

  function openInvite(player) {
    setShowInvite(true);
    setCurrentPlayer(player);
  }

  useEffect(() => {}, [currentPlayer]);

  return (
    // <div className='flex h-screen items-center justify-center'>
    <div className='flex items-center justify-center' id='Roster'>
      <div className='grid rounded-lg shadow-xl -11/12'>
        <div className='sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full'>
          <h5 className='font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center'>
            Manage Roster
          </h5>
        </div>
        <div className='flex sm:justify-start justify-center pb-12'>
          <div className='mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6'>
            <p className='text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2'>
              Hide
            </p>
            <div className='relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
              <input
                type='checkbox'
                name='toggle'
                id='toggleRoster'
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
        <div className='grid grid-cols-1 mt-5 md:mx-7 mx-0'>
          <label className=':smtext-2xl text-xl sm:text-left text-center text-white font-medium tracking-widest font-body'>
            Search for a player
          </label>
          <label className='md:text-base text-xs text-white text-light tracking-widest font-body mt-5 text-left'>
            Name
          </label>
          <input
            className='py-2 px-3 h-9 sm:w-full w-full border-2 border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
            type='text'
            id='name'
            onChange={() => setError('')}
          />
        </div>
        {error !== '' ? (
          <label className='md:mx-7 mx-0 bg-red-300 mt-4 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-red-600 hover:shadow-lg hover:bg-red-400'>
            {error}
          </label>
        ) : null}
        <div className='flex items-center sm:justify-end justify-center  md:gap-8 gap-4 pt-7 pb-5 md:pr-7 pr-0'>
          <button
            className='sm:mx-0 mx-auto sm:w-80 w-56 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
            onClick={findPlayer}
          >
            SEARCH
          </button>
        </div>
        {players.map((player) => (
          <div className='flex flex-col pt-7'>
            <div className='bg-mesh p-4'>
              <div className='flex'>
                <div className='sm:h-48 h-28 sm:w-48 w-24 lg:mb-0 mb-3 border-2 border-black'>
                  <img
                    src={`${player.gravatar}?s=200`}
                    alt='Just a flower'
                    className='w-full lg:object-cover lg:h-48'
                  />
                </div>
                <div className='flex-auto sm:ml-14 ml-3 justify-evenly sm:pt-2 pt-0'>
                  <div className='flex flex-wrap'>
                    <h2 className='flex-auto sm:text-lg text-base font-medium text-white'>
                      {player.first_name} {player.last_name}
                    </h2>
                    <ReactCountryFlag
                      countryCode={player.profile_info.country}
                      svg
                      className='mr-2 '
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                      }}
                    />
                  </div>
                  <div className='flex mr-2 border-t border-gray-200'></div>
                  <div className='py-1 sm:text-sm text-xs text-white mt-3'>
                    <div className='grid sm:grid-cols-4 grid-cols-2 gap-1 items-center '>
                      <p className='font-light'>GamerTag:</p>
                      <p className='sm:col-span-3 font-thin'>
                        {player.profile_info.gamertag}
                      </p>
                    </div>
                  </div>
                  {player.profile_info.team !== '' ? (
                    <div className='py-1 sm:text-sm text-xs text-white'>
                      <div className='grid sm:grid-cols-4 grid-cols-2 items-center'>
                        <p className='font-light'>Team:</p>
                        <p className='sm:col-span-3 font-thin'>
                          {player.profile_info.team}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {player.profile_info.game !== '' ? (
                    <div className='py-1 sm:text-sm text-xs text-white'>
                      <div className='grid sm:grid-cols-4 grid-cols-2 items-center'>
                        <p className='font-light'>Game:</p>
                        <p className='sm:col-span-3 font-thin'>
                          {player.profile_info.game}
                          {/* {player.stats.game &&
                            player.stats.game.charAt(0).toUpperCase() +
                              player.stats.game.slice(1)} */}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {player.profile_info.position !== '' ? (
                    <div className='py-1 sm:text-sm text-xs text-white'>
                      <div className='grid sm:grid-cols-4 grid-cols-2 items-center'>
                        <p className='font-light'>Position:</p>
                        <p className='sm:col-span-3 font-thin'>
                          {player.profile_info.position}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  <div className='pt-3 flex items-center'>
                    <img
                      alt='epleyer'
                      src={Logo}
                      className='h-5 object-cover sm:mr-6 mr-2'
                    />
                    <div className='flex px-1 justify-between'>
                      {player.social_media.twitterId !== '' ? (
                        <a
                          id='twitter'
                          href={`https://www.twitter.com/${player.social_media.twitterId}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='twitter'
                            src={Twitt}
                            className='h-4 object-cover mt-1 mr-1'
                          />
                        </a>
                      ) : null}
                      {player.social_media.discordId !== '' ? (
                        <a
                          id='discord'
                          href={`https://discord.com/channels/${player.social_media.discordId}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='discord'
                            src={Discord}
                            className='h-6 object-cover mx-1'
                          />
                        </a>
                      ) : null}
                      {player.social_media.instagramId ? (
                        <a
                          id='instagram'
                          href={`https://www.facebook.com/${player.social_media.instagramId}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='instagram'
                            src={Insta}
                            className='h-4 object-cover mt-1 mx-2'
                          />
                        </a>
                      ) : null}
                      {player.social_media.twitchId !== '' ? (
                        <a
                          id='twitch'
                          href={`https://www.twitch.tv/${player.social_media.twitchId}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='twitch'
                            src={Twitch}
                            className='h-4 object-cover mt-1 mx-2'
                          />
                        </a>
                      ) : null}
                      {player.social_media.youtubeId !== '' ? (
                        <a
                          id='youtube'
                          href={`https://www.youtube.com/channel/${player.social_media.youtubeId}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='youtube'
                            src={YouTube}
                            className='h-6 object-cover mx-2'
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isPlayerOnteam(player) ? (
              <div className='flex justify-between'>
                <button
                  className='sm:mx-0 mx-auto sm:w-72 w-56 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
                  onClick={() => openChangeRole(player)}
                >
                  Change Role
                </button>
                <button
                  className='sm:mx-0 mx-auto sm:w-72 w-56 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
                  onClick={() => openDeleteMember(player)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className='flex justify-center'>
                <button
                  className='sm:mx-0 mx-auto sm:w-72 w-56 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700'
                  onClick={() => openInvite(player)}
                >
                  Invite
                </button>
              </div>
            )}
          </div>
        ))}
        {showChangeRole ? (
          <ChangeRole
            setShowChangeRole={setShowChangeRole}
            setTeam={setTeam}
            team={team}
            player={currentPlayer}
          />
        ) : null}
        {showDeleteMember ? (
          <DeleteMember
            setShowDeleteMember={setShowDeleteMember}
            setTeam={setTeam}
            team={team}
            player={currentPlayer}
          />
        ) : null}
        {showInvite ? (
          <Invite
            setShowInvite={setShowInvite}
            setTeam={setTeam}
            team={team}
            player={currentPlayer}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ManageRoster;
