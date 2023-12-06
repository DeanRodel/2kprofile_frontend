import React, { useState } from "react";
import axios from "axios";

import Loader from "../../../../img/LoaderSmall.gif";

const SetXboxLiveStats = ({ setPlayer, setDefaultGame }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [xboxGames, setXboxGames] = useState([]);
  const [xuid, setXuid] = useState("");

  function clearMessage() {
    setError("");
    setSuccess("");
  }

  function findXbox() {
    clearMessage();
    setLoading(true);
    const data = {
      name: document.getElementById("xboxId").value,
    };
    axios
      .post("/api/server/getXboxLiveGames", data)
      .then((res) => {
        setXboxGames(res.data.games);
        setXuid(res.data.xuid);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
        setLoading(false);
      });
  }

  function updateXbox() {
    clearMessage();
    setLoading(true);
    let xboxGameIndex = document.getElementById("xboxGame").selectedIndex;
    let xboxGame = xboxGames[xboxGameIndex].title;
    let xboxGameId = xboxGames[xboxGameIndex].titleId;
    let displayImage = xboxGames[xboxGameIndex].displayImage;
    const data = {
      name: document.getElementById("xboxId").value,
      game: xboxGame,
      gameId: xboxGameId,
      games: xboxGames,
      xuid: xuid,
      displayImage: displayImage,
    };
    axios
      .post("/api/server/setXboxLiveGamer", data)
      .then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
        if (res.data.player.stats.games.length === 1) {
          setDefaultGame("xbox");
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <p className="sm:text-base text-xs font-body font-bold pt-7 pb-3">
        Gamertag
      </p>
      <input
        className="text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body"
        id="xboxId"
      ></input>
      <div className="flex justify-center py-10">
        <button
          type="button"
          className="sm:w-60 w-52 sm:text-base text-xs h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline"
          onClick={findXbox}
        >
          FIND MY XBOX GAMES
        </button>
      </div>
      <div className="flex justify-center">
        {error !== "" ? (
          <label className="bg-red-300 w-full mt-5 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-red-600 rounded-md hover:shadow-lg hover:bg-red-400 md:my-8 my-0">
            {error}
          </label>
        ) : null}
        {success !== "" ? (
          <label className="bg-green-300 w-full mt-5 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-green-400 md:my-8 my-0">
            {success}
          </label>
        ) : null}
        {loading ? <img src={Loader} /> : null}
      </div>
      {xboxGames.length > 0 ? (
        <>
          <p className="sm:text-base text-xs font-body font-bold pt-7 pb-3">
            Game
          </p>
          <select
            className="text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body"
            id="xboxGame"
          >
            {xboxGames.map((game) => (
              <option>{game.title}</option>
            ))}
            {xboxGames.length < 1 ? <option>----------</option> : null}
          </select>
          <div className="flex justify-center py-10">
            <button
              type="button"
              className="sm:w-60 w-52 sm:text-base text-xs h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline"
              onClick={updateXbox}
            >
              ADD GAME STATS
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SetXboxLiveStats;
