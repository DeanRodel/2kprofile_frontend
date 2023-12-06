import React, { useState, useEffect } from 'react';
import countries from '../data/countries';
import ShareButton from '../util/ShareButton';

import Facebook from '../../img/social-media/facebook-3d-blue.png';
import Twitter from '../../img/social-media/twitter-3d-blue.png';
import Insta from '../../img/social-media/insta-3d-red.png';
import YouTube from '../../img/social-media/youtube-3d-red.png';
import Discord from '../../img/social-media/discord.png';
import Twitch from '../../img/social-media/twitch.png';
import Cog from '../../img/icons/cog-solid.svg';

import NameModal from './Settings/NameModal';

const ProfileCard = ({
  account,
  profile,
  player,
  teams,
  setPlayer,
  type,
  showSettings,
}) => {
  // const ProfileCard = ({ account, profile }) => {
  let typeProfile = '';
  const [background, setBackground] = useState({});
  const [country, setCountry] = useState('');
  const [order, setOrder] = useState(
    account.templates[
      account.templates.findIndex(
        (template) => template.section === 'ProfileCard'
      )
    ].order
  );
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'ProfileCard'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/ProfileCard/Profile-${account.templates[index].template}.png)`,
      });
    }
    const countryIndex = countries.findIndex(
      (country) => country.code === profile.country
    );
    if (countryIndex !== -1) {
      setCountry(countries[countryIndex].name);
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);

  if (type === 'team') {
    typeProfile = 'OUR PROFILE';
  } else {
    typeProfile = 'MY PROFILE';
  }

  return (
    <div
      className='w-full flex justify-center bg-white py-10 px-10 sm:py-20 sm:px-0 '
      //style={background}
      id='Profile'
    >
      {showSettingsModal && type === 'player' ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          teams={teams}
          setPlayer={setPlayer}
          component={'ProfileCard'}
        />
      ) : null}
      <div className='w-full max-w-4xl items-center'>
        <div className='md:mx-4 mx-0 mb-8 md:mt-0 mt-28'>
          <div className='flex'>
            {showSettings ? (
              <div className='flex sm:pr-5 pr-3 sm:pt-0 pt-1'>
                <div
                  className={showSettings ? 'cursor-pointer' : ''}
                  onClick={() => {
                    if (showSettings) setShowSettingsModal(true);
                  }}
                >
                  <div className='sm:-mb-12 -mb-5 bg-white opacity-70 ring rounded-full h-6 w-6 sm:h-12 sm:w-12 filter blur top-0 right-0'></div>
                  <img
                    alt='Setting'
                    src={Cog}
                    className='h-6 sm:h-12 relative '
                  ></img>
                </div>
                {showSettingsModal && type === 'team' ? (
                  <NameModal
                    hideModal={hideModal}
                    team={account}
                    setPlayer={setPlayer}
                    component={'ProfileCardTeam'}
                  />
                ) : null}
              </div>
            ) : null}
            <h5
              className={`font-semibold sm:text-4xl text-2xl sm:pb-4 pb-2 text-black sm:text-left text-center ${
                showSettings ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (showSettings) setShowSettingsModal(true);
              }}
            >
              {typeProfile}
            </h5>
            <div className='mr-auto my-auto ml-5'>
              <ShareButton
                iconSize={38}
                url={
                  type === 'player'
                    ? `https://${window.location.host}/player/${account.slug}`
                    : `https://${window.location.host}/team/${account.slug}`
                }
                className='h-6 sm:h-12 w-6 sm:w-12 font-oswald m-0 font-thin tracking-widest border-red-700 bg-red-700 hover:text-red-700 hover:border-red-700 border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
        </div>

        <div className='sm:grid grid-cols-2 md:gap-14 gap-5  max-w-7xl p-0 sm:p-8 '>
          <div className='flex justify-center bg-frame bg-cover bg-no-repeat max-w-80 md:h-96 h-auto'>
            <img
              alt='player'
              className='w-full object-cover rounded-full border-2 '
              src={`${account.gravatar}`}
            />
          </div>
          <div className='max-w-80  sm:pt-0 pt-14'>
            {account.first_name ? (
              <div className='pb-1 sm:text-left text-center'>
                <p className='col-span-2 text-black md:text-2xl text-lg font-medium'>
                  {account.first_name} {account.last_name}
                </p>
              </div>
            ) : null}
            <div className='sm:pl-0 pl-14'>
              {profile.teamName ? (
                <div className='grid grid-cols-5 pb-1 gap-4'>
                  <p className='text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                    Team Name:
                  </p>
                  <p className='col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                    {profile.teamName}
                  </p>
                </div>
              ) : null}
              {profile.profile_category ? (
                <div className='grid grid-cols-5 pt-2 gap-4'>
                  <>
                    <p className='mt-2 col-span-2 text-gray-500 text-bold font-head text-right md:text-sm text-xs'>
                      Profile Category:
                    </p>
                    <p className='mt-2 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                      {profile.profile_category}
                    </p>
                  </>
                </div>
              ) : null}
              {profile.gamertag ? (
                <div className='grid grid-cols-5  pb-1 gap-4'>
                  <>
                    <p className='mt-2 col-span-2 text-gray-500 text-bold font-head text-right md:text-sm text-xs'>
                      Gamertag:
                    </p>
                    <p className='mt-2 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                      {profile.gamertag}
                    </p>
                  </>
                </div>
              ) : null}
              {profile.teamTag ? (
                <div className='grid grid-cols-5 pb-1 gap-4'>
                  <>
                    <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                      TeamTag:
                    </p>
                    <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                      {profile.teamTag}
                    </p>
                  </>
                </div>
              ) : null}
              <div className='grid grid-cols-5 pb-1 gap-4'>
                <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                  Game:
                </p>
                <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                  {profile.game}
                </p>
              </div>
              <div className='grid grid-cols-5 pb-1 gap-4'>
                <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                  Team:
                </p>
                <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                  {profile.team}
                </p>
              </div>
              <div className='grid grid-cols-5 pb-1 gap-4'>
                <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                  League:
                </p>
                <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                  {profile.league}
                </p>
              </div>
              {profile.platform ? (
                <div className='grid grid-cols-5 pb-1 gap-4'>
                  <>
                    <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                      Platform:
                    </p>
                    <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                      {profile.platform}
                    </p>
                  </>
                </div>
              ) : null}
              {/* {profile.position ? (
                <div className='grid grid-cols-5 pb-1 gap-4'>
                  <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                    Position:
                  </p>
                  <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                    {profile.position}
                  </p>
                </div>
              ) : null} */}
              {profile.gamePosition ? (
                <div className='grid grid-cols-5 pb-1 gap-4'>
                  <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                    Game Position:
                  </p>
                  <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                    {profile.gamePosition}
                  </p>
                </div>
              ) : null}
              <div className='grid grid-cols-5 pb-1 gap-4'>
                <p className='mt-1 text-gray-500 col-span-2 font-head text-right md:text-sm text-xs'>
                  Platform:
                </p>
                <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                  {profile.console}
                </p>
              </div>
              <div className='grid grid-cols-5 pb-1 gap-4'>
                <p className='mt-1 text-gray-500 col-span-2 font-head text-right pb-4 md:text-sm text-xs'>
                  Country:
                </p>
                <p className='mt-1 col-span-3 text-gray-600 md:text-sm text-xs font-medium'>
                  {country}
                </p>
              </div>
              <div className='flex sm:justify-start justify-center mt-4'>
                <div className='h-10 flex flex-row pb-3.5 justify-center content-between'>
                  {account.social_media.facebookId !== '' ? (
                    <a
                      id='facebook'
                      href={`https://www.facebook.com/${account.social_media.facebookId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={Facebook}
                        alt='Facebook'
                      ></img>
                    </a>
                  ) : null}
                  {account.social_media.instagramId !== '' ? (
                    <a
                      id='instagram'
                      href={`https://www.instagram.com/${account.social_media.instagramId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={Insta}
                        alt='instagram'
                      ></img>
                    </a>
                  ) : null}
                  {account.social_media.youtubeId !== '' ? (
                    <a
                      id='youtube'
                      href={`https://www.youtube.com/channel/${account.social_media.youtubeId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={YouTube}
                        alt='youtube'
                      ></img>
                    </a>
                  ) : null}
                  {account.social_media.twitterId !== '' ? (
                    <a
                      id='twitter'
                      href={`https://www.twitter.com/${account.social_media.twitterId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={Twitter}
                        alt='twitter'
                      ></img>
                    </a>
                  ) : null}
                  {account.social_media.discordId !== '' ? (
                    <a
                      id='discord'
                      href={`https://discord.com/channels/${account.social_media.discordId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={Discord}
                        alt='discord'
                      ></img>
                    </a>
                  ) : null}
                  {account.social_media.twitchId !== '' ? (
                    <a
                      id='twitch'
                      href={`https://www.twitch.tv/${account.social_media.twitchId}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='p-1 my-0.5 md:max-h-10 max-h-8 mt-2 mr-2'
                        src={Twitch}
                        alt='Twitch'
                      ></img>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
