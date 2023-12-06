import React, { useState } from "react";
import axios from "axios";

import Loader from "../../../img/LoaderSmall.gif";

const SetWarzoneStats = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const setAccount = () => {
    setLoading(true);
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    const data = {
      name: document.getElementById("warzoneName").value,
      platform: document.getElementById("warzonePlatform").value,
    };
    axios
      .post("/api/server/setWarzoneStats", data)
      .then((res) => {
        setSuccess(res.data);
        setIsSuccess(true);
        setIsError(false);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
        setIsSuccess(false);
        setIsError(true);
        setLoading(false);
      });
  };

  function clearMessage() {
    setIsError(false);
    setIsSuccess(false);
  }

  return (
    <div className="mt-5 mx-7">
      <div className="pb-4 ">
        <p className="text-xl md:text-left text-center text-white font-semibold tracking-widest font-head">
          Call of Duty Warzone
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <div className="grid grid-cols-1 lg:w-80 max-w-80">
          <label className="md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head">
            Player Name:
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            id="warzoneName"
            onChange={clearMessage}
          />
        </div>
        <div className="grid grid-cols-1 mt-0 w-full">
          <label className="md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head">
            Platform
          </label>
          <select
            id="warzonePlatform"
            className="h-11 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            onChange={clearMessage}
          >
            <option value="psn">Playstation</option>
            <option value="xbl">Xbox</option>
          </select>
        </div>
        <div className="grid grid-cols-1 mt-0 md:ml-7 ml-7 md:mr-0 mr-7">
          <br />
          <button
            className="h-10 bg-gray-500 hover:bg-pink-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-400 font-head tracking-widest"
            onClick={setAccount}
          >
            Update Stats
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        {loading ? <img src={Loader} /> : null}
      </div>
      <div className="flex">
        {isError ? (
          <label className="bg-red-300 mt-5 px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-red-600 rounded-md hover:shadow-lg hover:bg-red-400 w-full md:my-8 my-0 m-7">
            {error}
          </label>
        ) : null}
        {isSuccess ? (
          <label className="bg-green-300 mt-5 w-full px-5 py-3 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-green-400 md:my-8 my-0 m-7">
            {success}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default SetWarzoneStats;
