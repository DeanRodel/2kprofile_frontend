import axios from "axios";
import React, { useState , useEffect } from "react";
import countries from "../../data/countries";
// import UploadImage from '../../UploadImage';
import UploadImage from "../../../components/UploadForms/UploadImageProfile";

const SetTeam = ({ team, setTeam }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [gravatar, setGravatar] = useState(team.gravatar);
  const [uploadImage, setUploadImage] = useState(false);
  const [formData, setFormData] = useState({});

  const [show, setShow] = useState(team.templates[1].show);
  const [platforms, setPlatforms] = useState([]);
  const [games, setGames] = useState([]);

 


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
      .get(`/api/nav/game/`)
      .then((res) => {
          setGames(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
        } else console.log(err);
      });
  }, []);
  

  function updateProfile() {
    clearMessage();
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
      let body = {
        teamProfile: {
          teamName: document.getElementById("teamName").value,
          teamTag: document.getElementById("teamTag").value,
          game: document.getElementById("game").value,
          team: document.getElementById("team").value,
          league: document.getElementById("league").value,
          // platform: document.getElementById("platform").value,
          console: document.getElementById("platform").value,
          country: document.getElementById("country").value,
        },
        gravatar: gravatar,
        biography: team.biography,
        contact: team.contact,
      };
      axios
        .put(`/api/teams/${team._id}`, body)
        .then((res) => {
          setSuccess(res.data.success);
          setTeam(res.data.team);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split("Error: ")[1];
            const serverError = error.split("<br>")[0];
            setError(serverError);
          } else console.log(err);
        });

      if (uploadImage) {
        axios({
          method: "post",
          url: `/api/teams/${team._id}/updateProfilePicture`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            setGravatar(res.data.url);
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              const error = err.response.data.split("Error: ")[1];
              const serverError = error.split("<br>")[0];
              setError(serverError);
            } else console.log(err);
            setSuccess("");
          });
      }
    }
  }

  function toggle() {
    let toggle = document.getElementById("toggleProfile");
    setShow(toggle.checked);
    const body = {
      section: "ProfileCard",
      value: toggle.checked,
    };
    axios.put(`/api/teams/${team._id}/toggleSection`, body);
    const templates = team.templates;
    templates[1].show = toggle.checked;
    setTeam({ ...team, templates: templates });
  }

  function clearMessage() {
    setSuccess("");
    setError("");
  }

  return (
    <div className="w-full sm:grid grid-rows justify-center" id="Profile">
      <div className="sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full sm:ml-7 ml-0">
        <h5 className="font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center">
          Profile
        </h5>
      </div>
      <div className="flex sm:justify-start justify-center pb-12 sm:ml-7 ml-0">
        <div className="mt-2 md:pl-8 pl-0 flex md:justify-left justify-center md:pb-0 pb-6">
          <p className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2">
            Hide
          </p>
          <div className="relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggleProfile"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
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
      <div className="sm:grid grid-cols-2 md:gap-16 gap-4 max-w-7xl p-8">
        <div>
          <div className="flex justify-center   max-w-80 ">
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

        <div className="max-w-80  sm:pt-0 pt-10 ">
          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              {" "}
              Team Name:
            </label>
            <input
              onChange={clearMessage}
              className="text-gray-600 md:text-base text-xs col-span-5 px-3 font-body"
              type="text"
              id="teamName"
              defaultValue={team.teamProfile.teamName}
            />
          </div>
          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              {" "}
              Team Tag:
            </label>
            <input
              onChange={clearMessage}
              className="text-gray-600 text-base text-xs col-span-5 px-3"
              type="text"
              id="teamTag"
              defaultValue={team.teamProfile.teamTag}
            />
          </div>
          <div className="grid grid-cols-7 gap-3 pt-5">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              Game:
            </label>
            <select
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              id="game"
              defaultValue={team.teamProfile.game}
            >
              {games.map((game) => (
                <>
                  {game.name === team.teamProfile.game ? (
                    <option
                      className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3"
                      selected
                    >
                      {game.name}
                    </option>
                  ) : (
                    <option className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3">
                      {game.name}
                    </option>
                  )}
                </>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              Team:
            </label>
            <input
              onChange={clearMessage}
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              type="text"
              id="team"
              defaultValue={team.teamProfile.team}
            />
          </div>

          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              {" "}
              League:
            </label>
            <input
              onChange={clearMessage}
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              type="text"
              id="league"
              defaultValue={team.teamProfile.league}
            />
          </div>
          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              {" "}
              Platform:
            </label>
            <select
              onChange={clearMessage}
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              id="platform"
              defaultValue={team.teamProfile.console}
            >
              {platforms.map((platform) => (
                <>
                  {platform.name === team.teamProfile.console ? (
                    <option
                      className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3"
                      selected
                    >
                      {platform.name}
                    </option>
                  ) : (
                    <option className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3">
                      {platform.name}
                    </option>
                  )}
                </>
              ))}
            </select>
          </div>
          {/* <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              Console:
            </label>
            <input
              onChange={clearMessage}
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
              type="text"
              id="console"
              defaultValue={team.teamProfile.console}
            />
          </div> */}
          <div className="grid grid-cols-7 gap-3 pt-6">
            <label className="text-white font-body font-bold tracking-widest col-span-2 md:text-lg text-xs text-right">
              Country:
            </label>
            <select
              onChange={clearMessage}
              id="country"
              className="text-gray-600 md:text-base text-xs col-span-5 px-3"
            >
              {countries.map((country) => (
                <>
                  {country.code === team.teamProfile.country ? (
                    <option
                      value={country.code}
                      selected
                      className="text-gray-400 md:text-lg text-xs col-span-3 px-3"
                    >
                      {country.name}
                    </option>
                  ) : (
                    <option
                      value={country.code}
                      className="text-gray-400 md:text-lg text-xs col-span-3 px-3"
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
      <div className="grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0 sm:pt-0 pt-7 sm:pb-10 pb-20">
        <button
          className=" sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700"
          onClick={updateProfile}
        >
          UPDATE PROFILE
        </button>
      </div>
    </div>
  );
};

export default SetTeam;
