import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import NoAccess from "../components/Error/NoAccess";
import NotFound from "../components/Error/NotFound";
import NotLoggedIn from "../components/Error/NotLoggedIn";

import Bio from "../components/Dashboard/Bio";
import Contact from "../components/Dashboard/Contact";
import ManageSections from "../components/Dashboard/ManageSections";
import Photos from "../components/Dashboard/Photos";
import SocialMedia from "../components/Dashboard/SocialMedia";
import Store from "../components/Dashboard/Store";
import Stream from "../components/Dashboard/Stream";
import Videos from "../components/Dashboard/Videos";
import SetTeam from "../components/Dashboard/Teams/SetTeam";
import ManageRoster from "../components/Dashboard/Teams/ManageRoster/ManageRoster";
import Delete from "../components/Dashboard/Teams/Delete";
import Subscription from "../components/Dashboard/Subscription";
import TeamSidebar from "../components/Headers/TeamSidebar";
import Sponsors from "../components/Dashboard/Sponsors";

const TeamDashboard = (props) => {
  const [team, setTeam] = useState({});
  const [role, setRole] = useState("");

  const [loggedIn, setLoggedIn] = useState(true);
  const [onTeam, setOnTeam] = useState(true);
  const [teamExists, setTeamExists] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      axios
        .get(`/api/nav/teamdashboard/${props.match.params.id}`)
        .then((res) => {
          props.setTeam(res.data.team);
          setTeam(res.data.team);
          setRole(res.data.role);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split("Error: ")[1];
            const serverError = error.split("<br>")[0];
            if (serverError === "Does not exist") {
              setTeamExists(false);
            }
            if (serverError === "Not on team") {
              setOnTeam(false);
            }
          } else console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (!loggedIn) {
    return <NotLoggedIn />;
  }

  if (!teamExists) {
    return <NotFound />;
  }

  if (!onTeam) {
    return <NoAccess />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black bg-opacity-75 bg-fixed h-full">
      {/* <TeamSidebar /> */}
      <div className="ml-0 lg:ml-32">
        
      {/* <ManageSections
          originalTemplates={team.templates}
          api="team"
          team={team}
          setTeams={setTeam}
        /> */}
        {/* <SetTeam team={team} role={role} setTeam={setTeam} />
        <ManageSections
          originalTemplates={team.templates}
          api={`/api/teams/${team._id}/changeTemplate`}
          team={team}
        />
        <Sponsors
          account={team}
          api={`/api/teams/${team._id}/updateSponsors`}
          setPlayer={setTeam}
          type='team'
        />
        <SocialMedia
          account={team}
          api={`/api/teams/${team._id}/updateSocialMedia`}
        />
        <Bio
          account={team}
          api={`/api/teams/${team._id}/updateBio`}
          setPlayer={setTeam}
          type='team'
        />
        <Contact
          account={team}
          api={`/api/teams/${team._id}/updateContact`}
          setPlayer={setTeam}
          type='team'
        />
        <ManageRoster team={team} setTeam={setTeam} />
        <Photos
          team={team}
          api={`/api/teams/${team._id}/updatePhotos`}
          account={team}
          setPlayer={setTeam}
          type='team'
        />
        <Videos
          team={team}
          api={`/api/teams/${team._id}/updateVideos`}
          account={team}
          setPlayer={setTeam}
          type='team'
        />
        <Stream
          account={team}
          type={'team'}
          api={`/api/teams/${team._id}/updateStream`}
          setPlayer={setTeam}
          type='team'
        />
        <Store
          account={team}
          api={`/api/teams/${team._id}/updateStore`}
          setPlayer={setTeam}
          type='team'
        /> */}
        {/* <div className=' ml-0 lg:ml-32'> */}
        <div className=" flex justify-center">
          <div className="w-full ml-0 lg:ml-44">
            {/* <div className='lg:w-9/12 w-full px-4 '> */}
            <Subscription player={team} />
          </div>
        </div>
        <Delete team={team} role={role} />
      </div>
    </div>
  );
};

export default TeamDashboard;
