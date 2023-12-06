import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImage from "../../../components/UploadForms/UploadImageProfile";

import FormContaner from "../../FormContainer";
import countries from "../../data/countries";

const SetProfile = ({ player, teams, setPlayer, setTeam }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [gravatar, setGravatar] = useState(player.gravatar);
  const [show, setShow] = useState(player.templates[2].show);
  const [platforms, setPlatforms] = useState([]);
  const [profileCategory, setProfileCategory] = useState([]);
  const [games, setGames] = useState([]);
  const [game, setGame] = useState("");
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/nav/platform/`)
      .then((res) => {
        setPlatforms(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
        } else console.log(err);
      });

    axios
      .get(`/api/nav/profileCategory/`)
      .then((res) => {
        setProfileCategory(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
        } else console.log(err);
      });

    axios
      .get(`/api/nav/game/`)
      .then((res) => {
        setGames(res.data);
        setPositions(
          res.data.filter((game) => player.profile_info.game === game.name)[0].position
        );
      })
      .catch((err) => {
        if (err.response && err.response.data) {
        } else console.log(err);
      });
  }, []);

  useEffect(() => {
    if (game !== "") {
      const gameInfo = games.filter((element) => element.name === game);
      setPositions(gameInfo[0].position);
    }
  }, [game]);

  function toggle() {
    let toggle = document.getElementById("toggleProfileCard");
    setShow(toggle.checked);
    const body = {
      section: "ProfileCard",
      value: toggle.checked,
    };
    axios.put("/api/players/toggleSection", body);
    const templates = player.templates;
    templates[2].show = toggle.checked;
    setPlayer({ ...player, templates: templates });
  }

  function updateProfile() {
    let body = {
      profile_category: document.getElementById("profileCategory").value,
      gamertag: document.getElementById("gamertag").value,
      first_name: document.getElementById("firstName").value,
      last_name: document.getElementById("lastName").value,
      game: document.getElementById("game").value,
      team: document.getElementById("team").value,
      league: document.getElementById("league").value,
      // platform: document.getElementById("platform").value,
      gamePosition: document.getElementById("gamePosition").value,
      console: document.getElementById("platform").value,
      country: document.getElementById("country").value,
      gravatar: gravatar,
    };

    axios
      .put("/api/players/profileinfo", body)
      .then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
      });
  }

  function clearMessage() {
    setSuccess("");
    setError("");
  }

  return (
    <FormContaner>
      <div className="w-full sm:grid grid-rows justify-center" id="Profile">
        <div className="flex sm:justify-start justify-center sm:ml-7 ml-0">
          <h5 className="font-bold sm:text-4xl text-2xl pb-8 text-white font-head tracking-widest ">
            Profile
          </h5>
        </div>
        <div className="flex sm:justify-start justify-center pb-6 sm:ml-7 ml-0">
          <div className="mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6">
            <p className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2">
              Hide
            </p>
            <div className="relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggleProfileCard"
                className="toggle-checkbox absolute block w-6 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                onChange={toggle}
                checked={show}
              />
              <p
                for="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></p>
            </div>
            <label
              for="toggle"
              className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right"
            >
              Show
            </label>
          </div>
        </div>

        <div className="sm:grid grid-cols-2 lg:gap-16 gap-4 max-w-7xl ">
          <div>
            <div className="flex justify-center max-w-80 sm:p-16 p-0">
              <img
                className="w-full object-scale-down"
                src={`${gravatar}?s=560`}
                alt="gravatar icon"
              />
            </div>
            <div className="p-8">
              <UploadImage setImage={setGravatar} />
            </div>
          </div>

          <div className="max-w-80 pt-10 ">
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                Profile Category:
              </label>
              <select
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                id="profileCategory"
                defaultValue={player.profile_info.profile_category}
              >
                {profileCategory.map((category) => (
                  <>
                    {category.name === player.profile_info.profile_category ? (
                      <option
                        className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3"
                        selected
                      >
                        {category.name}
                      </option>
                    ) : (
                      <option className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3">
                        {category.name}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                First Name:
              </label>
              <input
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                type="text"
                id="firstName"
                defaultValue={player.first_name}
              />
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                Last Name:
              </label>
              <input
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                type="text"
                id="lastName"
                defaultValue={player.last_name}
              />
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                Gamer Tag:
              </label>
              <input
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3 font-body"
                type="text"
                id="gamertag"
                defaultValue={player.profile_info.gamertag}
              />
            </div>
            <div className="grid grid-cols-7 gap-3 pt-5">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                Game:
              </label>
              <select
                onChange={(e) => setGame(e.target.value)}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                id="game"
                defaultValue={player.profile_info.game}
              >
                {games.map((game) => (
                  <>
                    {game.name === player.profile_info.game ? (
                      <option
                        className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3"
                        selected
                      >
                        {game.name}
                      </option>
                    ) : (
                      <option className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3">
                        {game.name}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                Team:
              </label>
              <select
                id="team"
                className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              >
                {teams.map((team) => (
                  <>
                    {team.teamProfile.teamName === player.profile_info.team ? (
                      <option
                        className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3"
                        selected
                      >
                        {team.teamProfile.teamName}
                      </option>
                    ) : (
                      <option className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3">
                        {team.teamProfile.teamName}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                League:
              </label>
              <input
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                type="text"
                id="league"
                defaultValue={player.profile_info.league}
              />
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                {" "}
                Platform:
              </label>
              <select
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                id="platform"
                defaultValue={player.profile_info.platform}
              >
                {platforms.map((platform) => (
                  <>
                    {platform.name === player.profile_info.platform ? (
                      <option
                        className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3"
                        selected
                      >
                        {platform.name}
                      </option>
                    ) : (
                      <option className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3">
                        {platform.name}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                Game Position:
              </label>
              <select
                onChange={clearMessage}
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
                id="gamePosition"
                defaultValue={player.profile_info.gamePosition}
              >
                {positions.map((position) => (
                  <>
                    {position === player.profile_info.gamePosition ? (
                      <option
                        className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3"
                        selected
                      >
                        {position}
                      </option>
                    ) : (
                      <option className="text-gray-400 lg:text-lg text-xs col-span-3 rounded-md px-3">
                        {position}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-7 gap-3 pt-6">
              <label className="text-white font-body font-bold tracking-widest col-span-2 lg:text-lg text-xs text-right">
                Country:
              </label>
              <select
                onChange={clearMessage}
                id="country"
                className="text-gray-600 lg:text-base text-xs col-span-5 px-3"
              >
                {countries.map((country) => (
                  <>
                    {country.code === player.profile_info.country ? (
                      <option
                        value={country.code}
                        selected
                        className="text-gray-400 lg:text-lg text-xs col-span-3 px-3"
                      >
                        {country.name}
                      </option>
                    ) : (
                      <option
                        value={country.code}
                        className="text-gray-400 lg:text-lg text-xs col-span-3 px-3"
                      >
                        {country.name}
                      </option>
                    )}
                  </>
                ))}
              </select>
            </div>
            <div>
              {success !== "" ? (
                <p className="bg-green-600 px-5 py-3 ml-5 mt-4 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400">
                  {success}
                </p>
              ) : null}
              {error !== "" ? (
                <p className="bg-red-600 px-5 py-3 ml-5 mt-4 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400">
                  {error}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0 lg2:pt-0 pt-7">
          <button
            className=" sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700"
            onClick={updateProfile}
          >
            UPDATE PROFILE
          </button>
        </div>
      </div>
    </FormContaner>
  );
};

export default SetProfile;
