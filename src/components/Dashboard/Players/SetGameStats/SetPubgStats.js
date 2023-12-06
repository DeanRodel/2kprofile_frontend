import React, { useState } from "react";
import axios from "axios";

import Loader from "../../../../img/LoaderSmall.gif";

const SetPubgStats = ({ setPlayer, setDefaultGame }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const setAccount = () => {
    setLoading(true);
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    const data = {
      name: document.getElementById("pubgName").value,
      platform: document.getElementById("pubgPlatform").value,
    };
    axios
      .post("/api/server/setPubgStats", data)
      .then((res) => {
        setSuccess(res.data.success);
        setPlayer(res.data.player);
        if (res.data.player.stats.games.length === 1) {
          setDefaultGame("pubg");
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
  };

  return (
    <>
      <p className="sm:text-base text-xs font-body font-bold pt-7 pb-3">
        Player Name
      </p>
      <input
        className="text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body"
        id="pubgName"
      ></input>

      <p className="sm:text-base text-xs font-body font-bold pt-7 pb-3">
        Platform
      </p>
      <select
        className="text-gray-600 h-9 sm:w-80 w-60 sm:text-base text-xs col-span-5  px-3 border-2 font-body"
        id="pubgPlatform"
      >
        <option value="kakao">Kakao</option>
        <option value="psn">Playstation</option>
        <option value="stadia">Stadia</option>
        <option value="steam">Steam</option>
        <option value="xbox">Xbox</option>
      </select>
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
      <div className="flex justify-center py-10">
        <button
          type="button"
          className="sm:w-60 w-52 sm:text-base text-xs h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white focus:outline-none focus:shadow-outline"
          onClick={setAccount}
        >
          ADD GAME STATS
        </button>
      </div>
    </>
  );
};

export default SetPubgStats;
