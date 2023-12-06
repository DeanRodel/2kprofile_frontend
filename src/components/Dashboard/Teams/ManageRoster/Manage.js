import React, { useState } from "react";
import axios from "axios";

const Manage = ({ team, player, onDelete, setTeam }) => {
  const [success, setSuccess] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  function changeRole() {
    resetSuccessError();
    let body = {
      player: player._id,
      role: document.getElementById("role").value,
    };
    axios
      .put(`/api/teams/${team._id}/changeRole`, body)
      .then((res) => {
        setSuccess(res.data.success);
        setTeam(res.data.team);
        setIsSuccess(true);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          let error = err.response.data.split("Error: ")[1];
          let serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
        setIsError(true);
      });
  }

  function deletePlayer() {
    resetSuccessError();
    let body = {
      player: player._id,
    };
    axios
      .put(`/api/teams/${team._id}/removePlayer`, body)
      .then((res) => {
        setSuccess(res.data.success);
        setIsSuccess(true);
        onDelete(player);
        setTeam(res.data.team);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          let error = err.response.data.split("Error: ")[1];
          let serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
        setIsError(true);
      });
  }

  function resetSuccessError() {
    setSuccess("");
    setError("");
    setIsSuccess(false);
    setIsError(false);
  }

  return (
    <div>
      <div className="grid grid-cols-1 mt-20 mx-7">
        <label className="text-2xl sm:text-left text-center text-white font-semibold tracking-widest font-body">
          Manage Player
        </label>
      </div>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="md:text-base text-xs text-white tracking-widest font-body">
          Role
        </label>
        <select
          id="role"
          className="py-2 px-3 border-2 h-9 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          onChange={resetSuccessError}
        >
          <option>Admin</option>
          <option>Manager</option>
          <option>Coach</option>
          <option>Player</option>
        </select>
        {isSuccess ? (
          <label className="mt-3 bg-green-300 px-5 h-9 pt-2 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400">
            {success}
          </label>
        ) : null}
        {isError ? (
          <label className="mt-3 bg-red-300 px-5 h-9 pt-2 text-center text-sm shadow-sm font-medium tracking-wider border text-red-600 hover:shadow-lg hover:bg-red-400">
            {error}
          </label>
        ) : null}
      </div>
      <div className="flex items-center justify-center  md:gap-8 gap-4 pt-10">
        <button
          className="sm:mx-0 mx-auto sm:w-80 w-56 sm:text-base font-oswald px-11 bg-green-600 h-9 text-white tracking-widest font-thin  hover:bg-white border-green-600 border-2 hover:text-green-700"
          onClick={changeRole}
        >
          CHANGE ROLE
        </button>
      </div>
      <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
        <button
          className="sm:mx-0 mx-auto sm:w-80 w-56 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  hover:bg-white border-red-600 border-2 hover:text-red-700"
          onClick={deletePlayer}
        >
          DELETE PLAYER
        </button>
      </div>
    </div>
  );
};

export default Manage;
