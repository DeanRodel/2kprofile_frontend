import React from 'react';
import Modal from 'react-modal';

import SetProfile from '../../Dashboard/Players/SetProfile';
import SetTeam from '../../Dashboard/Teams/SetTeam';
import Bio from '../../Dashboard/Bio';
import Contact from '../../Dashboard/Contact';
import SocialMedia from '../../Dashboard/SocialMedia';
import Discord from '../../Dashboard/Discord';
import Photos from '../../Dashboard/Photos';
import Sponsors from '../../Dashboard/Sponsors';
import Store from '../../Dashboard/Store';
import Videos from '../../Dashboard/Videos';
import Stream from '../../Dashboard/Stream';
import Stats from '../../Dashboard/Players/SetStats';
import Roster from '../../Dashboard/Teams/ManageRoster/ManageRoster';
import ManageSections from '../../Dashboard/ManageSections';
import Name from '../../Dashboard/Name';
import Close from '../../../img/icons/close.png';

//https://reactcommunity.org/react-modal/
const customStyles = {
  content: {
    backgroundColor: 'black',
    // top: '50%',
    right: 'auto',
    bottom: 'auto',
    overflow: 'auto',
    height: 'auto',
    width: 'auto',
    inset: '5%',
  },
  overlay: {
    zIndex: 100,
    backgroundColor: 'transparent',
    // inset: '5%',
  },
};

const NameModal = ({
  hideModal,
  player,
  teams,
  team,
  setPlayer,
  setTeam,
  component,
  setPhotos,
  setVideos,
  type,
  setSelectedGame,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    hideModal();
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='mt-3 text-center s'>
          <div className='flex w-full justify-end'>
            <button onClick={closeModal} className='ml-auto'>
              <img src={Close} className='w-10' alt='close'></img>
            </button>
          </div>
          {/* <img
            src={Close}
            className="w-10 ml-auto"
            onClick={closeModal}
            alt="close"
          ></img> */}
          {component === 'Discord' ? (
            <Discord
              account={player}
              api={'/api/players/updateSocialMedia'}
              tier={player.membership.tier}
              setPlayer={setPlayer}
              type={type}
            />
          ) : null}
          {component === 'ProfileCard' ? (
            <>
              <SetProfile player={player} teams={teams} setPlayer={setPlayer} />
              <SocialMedia
                account={player}
                api={'/api/players/updateSocialMedia'}
                tier={player.membership.tier}
                setPlayer={setPlayer}
              />
            </>
          ) : null}
          {component === 'ProfileCardTeam' ? (
            <>
              <SetTeam team={team} setTeam={setPlayer} />
              <SocialMedia
                account={team}
                api={`/api/teams/${team._id}/updateSocialMedia`}
                tier={team.membership.tier}
                setPlayer={setPlayer}
              />
            </>
          ) : null}
          {component === 'Bio' ? (
            <Bio account={player} setPlayer={setPlayer} type={type} />
          ) : null}
          {component === 'Contact' ? (
            <Contact account={player} setPlayer={setPlayer} type={type} />
          ) : null}
          {component === 'Photos' ? (
            <Photos
              account={player}
              setPlayer={setPlayer}
              setPhotos={setPhotos}
              type={type}
            />
          ) : null}
          {component === 'Sponsors' ? (
            <Sponsors account={player} setPlayer={setPlayer} type={type} />
          ) : null}
          {component === 'Store' ? (
            <Store account={player} setPlayer={setPlayer} type={type} />
          ) : null}
          {component === 'Videos' ? (
            <Videos
              account={player}
              setPlayer={setPlayer}
              setVideos={setVideos}
              type={type}
            />
          ) : null}
          {component === 'Stream' ? (
            <Stream account={player} setPlayer={setPlayer} type={type} />
          ) : null}
          {component === 'Stats' ? (
            <Stats
              account={player}
              setPlayer={setPlayer}
              type={type}
              setSelectedGame={setSelectedGame}
            />
          ) : null}
          {component === 'Roster' ? (
            <Roster team={player} setTeam={setPlayer} />
          ) : null}
          {component === 'Name' ? (
            <Name
              account={player}
              setPlayer={setPlayer}
              team={team}
              setTeam={setTeam}
              type={type}
              setPhotos={setPhotos}
            />
          ) : null}
          {component === 'Theme' ? (
            <ManageSections player={player} team={team} type={type} />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default NameModal;
