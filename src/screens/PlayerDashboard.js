import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from '../components/Loader';
import NotLoggedIn from '../components/Error/NotLoggedIn';

import Subscription from '../components/Dashboard/Subscription';
import SetLoginInfo from '../components/Dashboard/Players/LoginInfo';
import Teams from '../components/Dashboard/Players/MyTeams';
import ManageSections from '../components/Dashboard/ManageSections';
// import CreateTeam from '../components/Dashboard/Teams/CreateTeam';
// import GetInvite from '../components/Dashboard/Teams/GetInvite';

const PlayerDashboard = (props) => {
  const [player, setPlayer] = useState({});
  const [teams, setTeams] = useState([]);
  const [tier, setTier] = useState('bronze');
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);

  function getTier(player) {
    if (player.stripe.id) {
      if (player.stripe.items.data[0].plan.product === 'prod_JLEDSjcIsKH4wT') {
        setTier('silver');
      }
      if (player.stripe.items.data[0].plan.product === 'prod_JLEyCfUek4AZBh') {
        setTier('gold');
      }
      if (player.stripe.items.data[0].plan.product === 'prod_JLEzQZ5eqybY2Q') {
        setTier('platinum');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      axios.defaults.headers.common = { authToken: `Bearer ${token}` };
      axios
        .get('/api/nav/playerDashboard')
        .then((res) => {
          props.setPlayer(res.data.player);
          setPlayer(res.data.player);
          // getTier(res.data.player);
          setTeams(res.data.teams);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (!loggedIn) {
    return <NotLoggedIn />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='bg-black bg-opacity-75 bg-fixed'>
      {/* <PlayerSidebar /> */}
      <div className='ml-0 lg:ml-32'>
        <Subscription player={player} />
        {/* <SetProfile player={player} teams={teams} setPlayer={props.setPlayer} /> */}

        {/* <ManageSections
          originalTemplates={player.templates}
          api="player"
          teams={teams}
          player={player}
          setPlayer={setPlayer}
          setTeams={setTeams}
        /> */}
        {/* <Teams
          teams={teams}
          player={player}
          setPlayer={setPlayer}
          setTeams={setTeams}
        /> */}
        {/* <Sponsors
          account={player}
          api={'/api/players/updateSponsors'}
          tier={tier}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <SocialMedia
          account={player}
          api={'/api/players/updateSocialMedia'}
          tier={tier}
          setPlayer={props.setPlayer}
        /> */}
        {/* <SetStats account={player} setPlayer={props.setPlayer} /> */}
        {/* <Bio
          account={player}
          api={'/api/players/updateBio'}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <Contact
          account={player}
          api={'/api/players/updateContact'}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <Store
          account={player}
          api={'/api/players/updateStore'}
          tier={tier}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <Photos
          account={player}
          api={'/api/players/updatePhotos'}
          tier={tier}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <Videos
          account={player}
          api={'/api/players/updateVideos'}
          tier={tier}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        {/* <Stream
          account={player}
          api={'/api/players/updateStream'}
          tier={tier}
          setPlayer={props.setPlayer}
          type='player'
        /> */}
        <SetLoginInfo
          player={player}
          setPlayer={props.setPlayer}
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
    </div>
  );
};

export default PlayerDashboard;
