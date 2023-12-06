import React, { useState, useEffect } from "react";
import axios from "axios";

import Name from "../components/Profile/Name2";
import ProfileCard from "../components/Profile/ProfileCard";
import Roster from "../components/Profile/Teams/Roster";
import Store from "../components/Profile/Store";
import Stream from "../components/Profile/Stream";
import Bio from "../components/Profile/Bio";
import Blog from "../components/Profile/Blog";
import Sponsors from "../components/Profile/Sponsors";
import Contact from "../components/Profile/Contact";
import Photos from "../components/Profile/PhotosDelete";
import Videos from "../components/Profile/VideosDelete";

import Loader from "../components/Loader";
import NotFound from "../components/Error/NotFound";
import Discord from "../components/Profile/Discord";

const TeamProfileScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [teamExists, setTeamExists] = useState(true);
  const [components, setComponents] = useState([]);
  const [showSettings, setShowSettings] = useState(false);

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
    // Stats: Stats,
    // Blog: Blog,
    Roster: Roster,
    Photos: Photos,
    Videos: Videos,
    Store: Store,
    Bio: Bio,
    Sponsors: Sponsors,
    Contact: Contact,
  };

  function mapTemplates(templates, team) {
    let componentsTemp = [];
    team.templates.forEach((section) => {
      componentsTemp.push(allComponents[section.section]);
    });
    return componentsTemp;
  }

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    axios
      .get(`/api/nav/teamdashboard/${props.match.params.id}`)
      .then((res) => {
        props.setTeam(res.data.team);
        let templateOrder = sortTemplates(res.data.team.templates);
        let templateComponents = mapTemplates(templateOrder, res.data.team);
        setComponents(templateComponents);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          if (serverError === "Team does not exist") {
            setTeamExists(false);
          }
        } else console.log(err);
      });
    axios
      .get(`/api/teams/${props.match.params.id}/isAdmin`)
      .then((res) => {
        setShowSettings(true);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          if (serverError === "Team does not exist") {
            setTeamExists(false);
          }
        } else console.log(err);
        setShowSettings(false);
      });
  }, []);

  if (!teamExists) {
    return <NotFound />;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className=""
    style={{
      background: `url(${props.team.theme.background[0]})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize:"cover",
    }}>
      {components.map((Component) => (
        <>
          <Component
            team={props.team}
            account={props.team}
            profile={props.team.teamProfile}
            child={props.child}
            setChild={props.setChild}
            loaded={props.loaded}
            setLoaded={props.setLoaded}
            setPlayer={props.setTeam}
            setTeam={props.setTeam}
            type={"team"}
            showSettings={showSettings}
          />
        </>
      ))}
    </div>
  );
};

export default TeamProfileScreen;
