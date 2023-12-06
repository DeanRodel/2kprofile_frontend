import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

import Stats from "../components/Profile/Players/ShowStats";
import Name from "../components/Profile/Name2";
import ProfileCard from "../components/Profile/ProfileCard";
import Store from "../components/Profile/Store";
import Stream from "../components/Profile/Stream";
import Bio from "../components/Profile/Bio";
import Blog from "../components/Profile/Blog";
import Sponsors from "../components/Profile/Sponsors";
import Contact from "../components/Profile/Contact";
import Photos from "../components/Profile/PhotosDelete";
import Videos from "../components/Profile/VideosDelete";
import Discord from "../components/Profile/Discord";
import NotFound from "../components/Error/NotFound";
import Team from "../components/Dashboard/Players/MyTeams";

const PlayerScreen = (props) => {
  const [playerExists, setPlayerExists] = useState(true);
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
    Name: Name,
    ProfileCard: ProfileCard,
    Stream: Stream,
    Stats: Stats,
    Photos: Photos,
    Videos: Videos,
    Store: Store,
    Bio: Bio,
    Sponsors: Sponsors,
    Contact: Contact,
  };

  function mapTemplates(templates, player) {
    let componentsTemp = [];
    player.templates.forEach((section) => {
      if (section.show) {
        componentsTemp.push(allComponents[section.section]);
      }
    });
    return componentsTemp;
  }

  function filterTemplates(templates, player) {
    let components = [];
    templates.forEach((component) => {
      if (!component) return;
      if (component.name === "Photos") {
        if (
          player.membership.tier === "Silver" ||
          player.membership.tier === "Gold" ||
          player.membership.tier === "Platinum"
        ) {
          components.push(component);
        }
      } else if (component.name === "VideosDelete") {
        if (
          player.membership.tier === "Silver" ||
          player.membership.tier === "Gold" ||
          player.membership.tier === "Platinum"
        ) {
          components.push(component);
        }
      } else if (component.name === "Stream") {
        if (
          player.membership.tier === "Gold" ||
          player.membership.tier === "Platinum"
        ) {
          components.push(component);
        }
      } else if (component.name === "Sponsors") {
        if (player.membership.tier === "Platinum") {
          components.push(component);
        }
      } else if (component.name === "Store") {
        if (player.membership.tier === "Platinum") {
          components.push(component);
        }
      } else {
        components.push(component);
      }
    });
    return components;
  }

  useEffect(() => {
    axios
      .get(`/api/nav/player/${props.match.params.id}`)
      .then((res) => {
        props.setPlayer(res.data);
        let templateOrder = sortTemplates(res.data.templates);
        let templateComponents = mapTemplates(templateOrder, res.data);
        let filteredComponents = filterTemplates(templateComponents, res.data);
        setComponents(filteredComponents);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          if (serverError === "Player not found") {
            setPlayerExists(false);
          }
        } else console.log(err);
      });
  }, []);

  if (!playerExists) {
    return <NotFound />;
  }

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
            setPlayer={props.setPlayer}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerScreen;
