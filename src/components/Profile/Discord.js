import React, { useState, useEffect } from 'react';
import TwitchEmbedVideo from 'react-twitch-embed-video';
import ReactPlayer from 'react-player/youtube';
import Cog from '../../img/icons/cog-solid.svg';
import NameModal from './Settings/NameModal';

const Discord = ({ account, setPlayer, type, showSettings }) => {
  const [background, setBackground] = useState({});
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  let typeProfile = '';

  function hideModal() {
    setShowSettingsModal(false);
  }

  useEffect(() => {
    const index = account.templates.findIndex(
      (template) => template.section === 'Stream'
    );
    if (account.templates[index].template === 'custom') {
      setBackground({
        backgroundImage: `url(${account.templates[index].customTemplate})`,
      });
    } else {
      setBackground({
        backgroundImage: `url(${process.env.PUBLIC_URL}/templates/Streams/Streams-${account.templates[index].template}.png)`,
      });
    }
    if (window.location.hash !== '') {
      let scroll = window.location.hash.split('#')[1];
      document.getElementById(scroll).scrollIntoView();
    }
  }, [account]);

  if (type === 'team') {
    typeProfile = 'OUR DISCORD';
  } else {
    typeProfile = 'MY DISCORD';
  }

  return (
    <div
      className='w-full flex bg-cover justify-center bg-gray-900 py-10 sm:py-20 px-10 sm:px-0 sm:min-h-h40 min-h-96'
      // style={background}
      id='Discord'
    >
      {showSettingsModal ? (
        <NameModal
          hideModal={hideModal}
          player={account}
          setPlayer={setPlayer}
          component={'Discord'}
          type={type}
        />
      ) : null}
      <div className='max-w-4xl w-full'>
        <div className='md:mx-4 mx-0 mb-8'>
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
            <h5 className='font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-white'>
              {typeProfile}
            </h5>
          </div>
          <div className='border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6'></div>
        </div>
        {account.social_media.discordWidget && (
          <iframe
            title='discord'
            src={`https://discord.com/widget?id=${account.social_media.discordWidget}&theme=dark`}
            className='w-full h-80'
            allowtransparency='true'
            frameBorder='0'
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Discord;
