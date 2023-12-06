import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

import Name from "../components/Profile/Name2";
import ProfileCard from "../components/Profile/ProfileCard";
import Stream from "../components/Profile/Stream";
import Discord from "../components/Profile/Discord";
import Stats from "../components/Profile/Players/ShowStats";
// import Blog from '../components/Profile/Blog';
import Bio from "../components/Profile/Bio";
import Sponsors from "../components/Profile/Sponsors";
import Contact from "../components/Profile/Contact";
import Photos from "../components/Profile/PhotosDelete";
import Videos from "../components/Profile/VideosDelete";
import Store from "../components/Profile/Store";
import Team from "../components/Dashboard/Players/MyTeams";

const ProfileScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [components, setComponents] = useState([]);

  const [teams, setTeams] = useState([]);

  function sortTemplates(templates) {
    let templatesTemp = templates;
    templatesTemp.sort((a, b) => {
      return a.order - b.order;
    });
    return templatesTemp;
  }

  const allComponents = {
    Discord: Discord,
    Name: Name,
    ProfileCard: ProfileCard,
    Stream: Stream,
    Stats: Stats,
    // Blog: Blog,
    Team: Team,
    Photos: Photos,
    Videos: Videos,
    Store: Store,
    Bio: Bio,
    Sponsors: Sponsors,
    Contact: Contact,
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios
        .get("/api/nav/playerDashboard")
        .then((res) => {
          props.setPlayer(res.data.player);
          setTeams(res.data.teams);
          let componentsTemp = [];
          Object.keys(allComponents).forEach((key) => {
            componentsTemp.push(allComponents[key]);
          });
          setComponents(componentsTemp);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className=""
      style={{
        background: `url(${props.player.theme.background[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize:"cover",
      }}
    >
      {components.map((Component) => (
        <div key={Component}>
          <Component
            player={props.player}
            teams={teams}
            account={props.player}
            profile={props.player.profile_info}
            child={props.child}
            setChild={props.setChild}
            loaded={props.loaded}
            setLoaded={props.setLoaded}
            // setRefresh={setRefresh}
            // refresh={refresh}
            setPlayer={props.setPlayer}
            type={"player"}
            showSettings={true}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileScreen;
