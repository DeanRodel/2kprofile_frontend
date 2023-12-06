import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ReactCountryFlag from 'react-country-flag';
import ShareButton from '../components/util/ShareButton';
import Twitt from '../img/social-media/twitter.png';
import Insta from '../img/social-media/insta.png';
import Twitch from '../img/social-media/twitch_white.png';
import YouTube from '../img/social-media/youtube.png';
import Discord from '../img/social-media/discord_white.png';
import Logo from '../img/logos/emailLogo.png';

const Search = (props) => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [redirectTeam, setRedirectTeam] = useState(false);
  const [redirectPlayer, setRedirectPlayer] = useState(false);
  const [slug, setSlug] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  function search() {
    let searchTerm = document.getElementById('search').value;
    let body = {
      search: searchTerm,
    };
    axios
      .put('/api/nav/search', body)
      .then((res) => {
        setTeams(res.data.teams);
        setPlayers(res.data.players);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split('Error: ')[1];
          const serverError = error.split('<br>')[0];
          setError(serverError);
        } else console.log(err);
        setIsError(true);
        setPlayers([]);
        setTeams([]);
      });
  }

  function goToTeam(result) {
    setRedirectTeam(true);
    setSlug(result.slug);
  }

  function goToPlayer(result) {
    setRedirectPlayer(true);
    setSlug(result.slug);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios.get('/api/players/profile').then((res) => {
        props.setPlayer(res.data);
      });
    }
  }, []);

  return (
    <div className='bg-white-off pb-36'>
      {redirectTeam ? <Redirect to={{ pathname: `/team/${slug}` }} /> : null}
      {redirectPlayer ? (
        <Redirect to={{ pathname: `/player/${slug}` }} />
      ) : null}
      <div className='flex flex-col w-full mx-auto p-7 sm:mb-0 mb-10 content-center items-center'>
        <div className='rounded overflow-hidden mb-8 w-3/4'>
          <div className=' mx-auto max-w-3xl pt-10'>
            <div className='sm:flex sm:items-center  py-4'>
              <div className='flex-grow'>
                <h3 className='text-xl text-left  font-semibold tracking-widest font-head'>
                  Search
                </h3>
                <input
                  autoFocus
                  type='text'
                  id='search'
                  placeholder='Find a player or team...'
                  className='my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none'
                  onChange={() => setIsError(false)}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') search();
                  }}
                />
              </div>
            </div>
            <div>
              {isError ? (
                <p Name='bg-red-300 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-red-400'>
                  {error}
                </p>
              ) : null}
            </div>
            <div className='sm:flex bg-grey-light sm:items-center px-2 py-4'>
              <div className='flex-grow text-right'>
                <button
                  className='sm:w-64 w-56 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline'
                  onClick={search}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
          {/* Player card */}
          <div className='mt-20 mx-auto h-full w-11/12 sm:w-11/12 md:w-3/4'>
            <div className='flex flex-col w-full mx-auto h-full'>
              {players.map((player) => (
                <div className='flex flex-col pt-7'>
                  <div className='bg-mesh p-4'>
                    <div className='flex sm:flex-row flex-col items-center '>
                      <div
                        className='sm:h-48 h-28 sm:w-48 w-24 lg:mb-0 mb-3 border-2 border-black cursor-pointer'
                        onClick={() => goToPlayer(player)}
                      >
                        <img
                          src={`${player.gravatar}?s=200`}
                          alt='Just a flower'
                          className='w-full lg:object-cover lg:h-48'
                        />
                      </div>
                      <div className='flex-auto md:ml-14 ml-3 justify-evenly sm:pt-2 pt-0'>
                        <div className='flex flex-wrap '>
                          <h2 className='flex-auto sm:text-lg text-base font-medium text-white'>
                            {player.first_name} {player.last_name}
                          </h2>
                          <div className='flex flex-row content-center'>
                            <div className='m-auto'>
                              <ShareButton
                                iconSize={36}
                                url={`https://${window.location.host}/player/${player.slug}`}
                                className='h-6 w-6 font-oswald m-0 font-thin tracking-widest border-red-700 bg-red-700 hover:text-red-700 hover:border-red-700 border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline'
                              />
                            </div>
                            <ReactCountryFlag
                              countryCode={player.profile_info.country}
                              svg
                              className='mx-2 '
                              style={{
                                width: '1.5rem',
                                height: '1.5rem',
                              }}
                            />
                          </div>
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
                </div>
              ))}
              {/* Team cars */}
              {teams.map((team) => (
                <div className='flex flex-col pt-7'>
                  <div className='bg-intro p-4'>
                    <div className='flex  sm:flex-row flex-col items-center'>
                      <div
                        className='sm:h-48 h-28 sm:w-48 w-24 lg:mb-0 mb-3 cursor-pointer'
                        onClick={() => goToTeam(team)}
                      >
                        <img
                          src={`${team.gravatar}?s=200`}
                          alt='Just a flower'
                          className='w-full lg:object-cover lg:h-48'
                        />
                      </div>
                      <div className='flex-auto md:ml-14 ml-3 justify-evenly sm:pt-2 pt-0'>
                        <div className='flex flex-wrap'>
                          <h2 className='flex-auto sm:text-lg text-base font-medium text-white'>
                            {team.teamProfile.teamName}
                          </h2>
                          <div className='m-auto'>
                            <ShareButton
                              iconSize={36}
                              url={`https://${window.location.host}/team/${team.slug}`}
                              className='h-6 w-6 font-oswald m-0 font-thin tracking-widest border-red-700 bg-red-700 hover:text-red-700 hover:border-red-700 border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline'
                            />
                          </div>
                          <ReactCountryFlag
                            countryCode={team.teamProfile.country}
                            svg
                            className='mx-2 '
                            style={{
                              width: '1.5rem',
                              height: '1.5rem',
                            }}
                          />
                        </div>
                        <div className='flex mr-2 border-t border-gray-200'></div>
                        <div className='py-1 sm:text-sm text-xs text-white mt-3'>
                          <div className='grid sm:grid-cols-4 grid-cols-2 items-center'>
                            <p className='font-light'>TeamTag:</p>
                            <p className='sm:col-span-3 font-thin'>
                              {team.teamProfile.teamTag}
                            </p>
                          </div>
                        </div>

                        <div className='py-1 sm:text-sm text-xs text-gray-600'>
                          <div className='grid sm:grid-cols-4 grid-cols-2 items-center text-white'>
                            <p className='font-light'>Team Name:</p>
                            <p className='sm:col-span-3 font-thin'>
                              {team.teamProfile.teamName}
                            </p>
                          </div>
                        </div>
                        {team.teamProfile.game !== '' ? (
                          <div className='py-1 sm:text-sm text-xs text-white'>
                            <div className='grid sm:grid-cols-4 grid-cols-2 items-center'>
                              <p className='font-light'>Game:</p>
                              <p className='sm:col-span-3 font-thin'>
                                {team.teamProfile.game}
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
                            {team.social_media.twitterId !== '' ? (
                              <a
                                id='twitter'
                                href={`https://www.twitter.com/${team.social_media.twitterId}`}
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
                            {team.social_media.discordId !== '' ? (
                              <a
                                id='discord'
                                href={`https://discord.com/channels/${team.social_media.discordId}`}
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
                            {team.social_media.instagramId ? (
                              <a
                                id='instagram'
                                href={`https://www.facebook.com/${team.social_media.instagramId}`}
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
                            {team.social_media.twitchId !== '' ? (
                              <a
                                id='twitch'
                                href={`https://www.twitch.tv/${team.social_media.twitchId}`}
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
                            {team.social_media.youtubeId !== '' ? (
                              <a
                                id='youtube'
                                href={`https://www.youtube.com/channel/${team.social_media.youtubeId}`}
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
                </div>
              ))}
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Search;
