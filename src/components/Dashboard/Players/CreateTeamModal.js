import axios from "axios";
import { useState , useEffect } from "react";
import countries from "../../data/countries";
import { Redirect } from "react-router";

export default function CreateTeam({ hideTeam }) {
  const [redirect, setRedirect] = useState(false);
  const [slug, setSlug] = useState("");

  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

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

  function createTeam() {
    let body = {
      teamName: document.getElementById("createTeamName").value,
      teamTag: document.getElementById("createTeamTag").value,
      game: document.getElementById("createGame").value,
      team: document.getElementById("createTeam").value,
      league: document.getElementById("createLeague").value,
      platform: document.getElementById("createPlatform").value,
      console: document.getElementById("createConsole").value,
      country: document.getElementById("createCountry").value,
    };

    if (body.teamName === "") {
      setError("Please enter a field in team name");
      setIsError(true);
    } else {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
        axios
          .post("/api/teams", body)
          .then((res) => {
            setSlug(res.data.slug);
            setRedirect(true);
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              const error = err.response.data.split("Error: ")[1];
              const serverError = error.split("<br>")[0];
              setError(serverError);
            } else console.log(err);
            setIsError(true);
          });
      }
    }
  }

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {redirect ? (
        <Redirect to={{ pathname: `/teamdashboard/${slug}` }} />
      ) : null}
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={hideTeam}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-0 px-8 ">
          <div className="flex sm:mx-0 mx-auto">
            <h5 className="font-bold sm:text-2xl text-xl pb-4 text-black font-head mx-auto pt-10">
              Create Team
            </h5>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-4 text-black font-body font-bold text-sm tracking-widest">
                  Team Name:
                </p>
                <input
                  className="text-gray-600 sm:w-80 w-40 sm:text-sm text-xs col-span-5 rounded-md px-3 border-2"
                  type="text"
                  id="createTeamName"
                />
              </div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-8 text-black font-body font-bold text-sm tracking-widest">
                  Team Tag:
                </p>
                <input
                  className="text-gray-600 sm:w-80 w-40 sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                  type="text"
                  id="createTeamTag"
                />
              </div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-12 text-black font-body font-bold text-sm tracking-widest">
                  Game:
                </p>
                <select
                  className="ml-4 text-gray-600 sm:w-80 w-40 sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                  id="createGame"
                >
                  {games.map((game) => (
                    <>
                      <option className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3">
                        {game.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-14 text-black font-body font-bold text-sm tracking-widest">
                  Team:
                </p>
                <input
                  className="ml-2 text-gray-600 sm:w-80 w-40 sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                  type="text"
                  id="createTeam"
                />
              </div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-12 text-black font-body font-bold text-sm tracking-widest">
                  League:
                </p>
                <input
                  className="text-gray-600 sm:w-80 max-w-7xl sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                  type="text"
                  id="createLeague"
                />
              </div>

              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-6 text-black font-body font-bold text-sm tracking-widest">
                  Platform:
                </p>
                <select
                   className="ml-3 text-gray-600 sm:w-80 w-40 sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                   id="createPlatform"
                >
                  {platforms.map((platform) => (
                    <>
                      <option className="text-gray-400 md:text-lg text-xs col-span-3 rounded-md px-3">
                        {platform.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-9 text-black font-body font-bold text-sm tracking-widest">
                  Console:
                </p>
                <input
                  className="ml-1 text-gray-600 sm:w-80 max-w-7xl sm:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                  type="text"
                  id="createConsole"
                />
              </div>
              <div className="flex pt-3 text-xs text-gray-600">
                <p className="pr-10 text-black font-body font-bold text-sm tracking-widest ">
                  Country:
                </p>
                <select
                  id="createCountry"
                  className=" text-gray-600 sm:w-80 w-40 md:text-sm text-xs col-span-5 rounded-md px-3 border-2 font-body"
                >
                  {countries.map((country) => (
                    <option
                      value={country.code}
                      className="text-gray-400 sm:text-sm text-xs col-span-3 rounded-md px-3"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              {isError ? (
                <p className="bg-red-300 mt-1 md:ml-11 ml-3 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-red-600 rounded-md hover:shadow-lg hover:bg-red-400">
                  {error}
                </p>
              ) : null}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse pt-12 pb-7">
            <button
              type="button"
              className="sm:w-24 w-18 sm:text-base text-xs  sm:mr-7 mr-0 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
              onClick={hideTeam}
            >
              CANCEL
            </button>
            <button
              type="button"
              className="sm:w-44 w-40 sm:text-base text-xs  ms:mr-7 mr-4 mr-0 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
              onClick={createTeam}
            >
              CREATE TEAM
            </button>
            {/* {success !== '' ? (
              <p className='text-green-500 text-xs italic mt-2 px-8'>
                {success}
              </p>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}
