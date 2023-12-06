import React, { useState } from "react";
import axios from "axios";

import DeleteAccountModal from "./DeleteAccountModal";

const LoginInfo = ({ player, setIsLoggedIn }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);

  function changeUsername() {
    setFalse();
    let username = document.getElementById("username").value;
    axios
      .put("/api/players/setUsername", { username: username })
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
      });
  }

  function changeEmail() {
    setFalse();
    let email = document.getElementById("email").value;
    axios
      .put("/api/players/setEmail", { email: email })
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
      });
  }

  function changePassword() {
    setFalse();
    let password = document.getElementById("password").value;
    axios
      .put("/api/players/setPassword", { password: password })
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
      });
  }

  function hideModal() {
    setShowModal(false);
  }

  function setFalse() {
    setError("");
    setSuccess("");
  }

  return (
    <div
      className="w-full sm:flex-col grid-rows justify-center bg-cobe mt-10 pb-20 sm:px-40"
      id="Account"
    >
      <div className="sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full">
        <h5 className="font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center">
          Account
        </h5>
      </div>
      <div className="md:mt-10 mt-5 mx-7 justify-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:pt-0 pt-5 mb-3">
          <div className="text-white lg:w-96 max-w-7xl ">
            <div className="grid grid-cols-1 mx-auto w-full">
              <label className="md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head">
                Username:
              </label>
              <input
                className="py-2 px-3 w-full h-9 text-gray-600 border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                type="text"
                id="username"
                defaultValue={player.username}
                onChange={setFalse}
              />
            </div>
          </div>
          <div className="text-white w-full h-9 sm:text-right text-center">
            <button
              className="lg:w-72 w-44 h-9 sm:mt-6 mt-0 shadow-xl px-4 tracking-widest sm:text-base text-sm font-oswald bg-red-700 text-white font-thin hover:bg-white border-red-600 border-2 hover:text-red-700"
              onClick={changeUsername}
            >
              UPDATE USERNAME
            </button>
          </div>
        </div>
      </div>
      <div className="sm:mt-0 mt-5 mx-7 justify-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:pt-0 pt-2 mb-3">
          <div className="text-white lg:w-96 max-w-7xl">
            <div className="grid grid-cols-1 mx-auto w-full">
              <label className="md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head">
                Email:
              </label>
              <input
                className="py-2 px-3 w-full h-9  text-gray-600 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                type="text"
                id="email"
                defaultValue={player.email}
                onChange={setFalse}
              />
            </div>
          </div>
          <div className="text-white  h-9 w-full sm:text-right text-center">
            <button
              className="lg:w-72 w-44 sm:mt-6 mt-0 h-9 shadow-xl px-4 tracking-widest sm:text-base text-sm font-oswald bg-red-700 text-white font-thin hover:bg-white border-red-600 border-2 hover:text-red-700"
              onClick={changeEmail}
            >
              UPDATE EMAIL    
            </button>
          </div>
        </div>
      </div>
      <div className="sm:mt-0 mt-5 mx-7 justify-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:pt-0 pt-2 mb-3">
          <div className="text-white lg:w-96 max-w-7xl">
            <div className="grid grid-cols-1 mx-auto w-full">
              <label className="md:text-sm text-xs text-white text-light font-semibold tracking-widest font-head">
                Password:
              </label>
              <input
                className="py-2 px-3 w-full h-9 border-2 text-gray-600 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                type="password"
                id="password"
                onChange={setFalse}
              />
            </div>
          </div>
          <div className="text-white w-full h-9 sm:text-right text-center">
            <button
              className="sm:mt-6 mt-0 h-9 lg:w-72 w-44 shadow-xl sm:text-base text-sm font-oswald bg-red-700 text-white px-4 tracking-widest font-thin hover:bg-white border-red-600 border-2 hover:text-red-700"
              onClick={changePassword}
            >
              UPDATE PASSWORD
            </button>
          </div>
        </div>
      </div>
      {success !== "" ? (
         <div className='mx-7'>
            <p className="bg-green-300 w-full px-1 py-3 text-center text-xs shadow-sm font-medium tracking-wider border text-white  hover:shadow-lg hover:bg-green-400">
              {success}
            </p>
          </div>
      ) : null}
      {error ? (
        <div className='mx-7'>
          <p className="bg-red-300 w-full px-1 py-3 text-center text-xs shadow-sm font-medium tracking-wider border text-white  hover:shadow-lg hover:bg-red-400">
            {error}
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mt-5 mx-7 mt-14">
        <div className="">
          <label className="uppercase md:text-sm text-xs text-white text-light sm:font-semibold font-medium tracking-widest font-head">
            Delete Account
          </label>
        </div>
        <button
          className="h-10 bg-red-600 hover:bg-red-700 shadow-xl font-oswald  font-medium text-white px-4 hover:bg-white border-red-600 border-2 hover:text-red-700"
          onClick={() => setShowModal(true)}
        >
          DELETE ACCOUNT
        </button>
        {showModal ? (
          <DeleteAccountModal
            hideModal={hideModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : null}
      </div>
    </div>
  );
};

export default LoginInfo;