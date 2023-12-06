import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import FormContainer from "../components/FormContainer";
import IconEmail from "../img/emailicon.png";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function clearMessage() {
    setSuccess("");
    setError("");
  }

  function submitHandler() {
    axios
      .post("/api/players/forgotpassword", { email: email })
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

  return (
    <>
      <FormContainer>
        <div className="flex flex-row mt-8 justify-center">
          <form className="sm:w-96 w-80 bg-white shadow-xl rounded px-8 pt-14 pb-14 mb-4">
            <p className="block text-gray-400 text-lg md:text-base pb-4 text-center">
              Reset Your Password
            </p>
            <div className="flex border-b">
              <img className="w-6  p-1 my-0.5" src={IconEmail}></img>
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('email') border-red-500 @enderror"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearMessage();
                }}
              ></input>
            </div>
            <div className="h-8">
              <p className="text-red-500 text-xs italic mb-0">{error}</p>
              <p className="text-green-500 text-xs italic mb-0">{success}</p>
            </div>
            <div className='flex justify-center'>
              <button
                className="sm:text-base text-sm w-56 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
              >
                RESET MY PASSWORD
              </button>
            </div>
            <div className="flex flex-row pt-3.5 justify-center">
              <Link
                to={"/login"}
                className="text-gray-400 hover:text-blue-400 hover:underline"
              >
                Go back to login
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default ForgotPasswordScreen;
