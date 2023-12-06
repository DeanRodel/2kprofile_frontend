import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

import Message from "../components/Message";

import Icon from "../img/LoginPage/name.png";
import IconEmail from "../img/LoginPage/email.png";
import IconPassword from "../img/LoginPage/password.png";

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  let anyError = false;

  const [redirect, setRedirect] = useState(false);

  const [errorField, setError] = useState({
    emailError: "",
    nameError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
    tosError: "",
  });

  const validation = () => {
    if (document.getElementById("tosCheck").checked === false) {
      setError((prev) => ({
        ...prev,
        tosError: "You must agree to the Terms of Service before continuing.",
      }));
      anyError = true;
    }
    if (email === "") {
      setError((prev) => ({
        ...prev,
        emailError: "Please fill out this field.",
      }));
      anyError = true;
    }
    if (name === "") {
      setError((prev) => ({
        ...prev,
        nameError: "Please fill out this field.",
      }));
      anyError = true;
    }
    if (password === "") {
      setError((prev) => ({
        ...prev,
        passwordError: " Please fill out this field.",
      }));
      anyError = true;
    } else if (password.length < 8) {
      setError((prev) => ({
        ...prev,
        passwordError: "Password should be contain at least 8 characters.",
      }));
      anyError = true;
    }
    if (confirmPassword === "") {
      setError((prev) => ({
        ...prev,
        confirmPasswordError: "Please fill out this field.",
      }));
      anyError = true;
    }
    if ((password !== "") & (confirmPassword !== "")) {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        anyError = true;
      }
    }
  };

  const submitHandler = (e) => {
    validation();

    const registerData = {
      email: email,
      password: password,
      name: name,
      username: username,
      updatesCheck: document.getElementById("updatesCheck").checked,
    };
    if (!anyError) {
      axios
        .post("/api/players", registerData)
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem("jwtToken", token);
          window.scrollTo(0, 0);
          setRedirect(true);
          props.setIsLoggedIn(true);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split("Error: ")[1];
            const serverError = error.split("<br>")[0];
            if (
              serverError === "A user with this email already exists." ||
              serverError === "Invalid email address!"
            ) {
              setError({ emailError: serverError });
            } else if (
              serverError ===
              "Password should be combination of numbers, alphabets, upper case character and symbol."
            ) {
              setError({ passwordError: serverError });
            } else if (
              serverError ===
                "Please enter only one first name and last name." ||
              serverError === "Please do not enter any numbers of symbols."
            ) {
              setError({ nameError: serverError });
            } else {
              setError({ usernameError: serverError });
            }
          } else console.log(err);
        });
    }
  };

  return (
    <div className="">
      {redirect ? <Redirect to="/dashboard" /> : null}
      <div className="sm:flex flex-row mt-8 justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-14 pb-14 mb-4 w-80 ms:w-96">
          <p className="block font-body font-medium md:text-base pb-8 text-center">
            Create Your Account
          </p>
          {message && <Message variant="danger">{message}</Message>}
          <div className="flex border-b">
            <img
              className="w-7 h-7 p-1 my-0.5"
              src={Icon}
              alt="full name"
            ></img>
            <input
              className="text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('name') border-red-500 @enderror"
              id="name"
              type="text"
              placeholder="Enter Full Name "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                anyError = false;
                setError((prev) => ({ ...prev, nameError: "" }));
              }}
            ></input>
          </div>
          <div className="h-8">
            <p className="text-red-500 text-xs italic mb-0">
              {errorField.nameError}
            </p>
          </div>

          <div className="flex border-b">
            <img
              className="w-7 h-6 p-1 my-0.5"
              src={IconEmail}
              alt="email"
            ></img>
            <input
              className="text-sm font-body  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('email') border-red-500 @enderror"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                anyError = false;
                setError((prev) => ({ ...prev, emailError: "" }));
              }}
            ></input>
          </div>
          <div className="h-8">
            <p className="text-red-500 text-xs italic mb-0">
              {errorField.emailError}
            </p>
          </div>

          <div className="flex border-b">
            <img className="w-7 h-7 p-1 my-0.5" src={Icon} alt="username"></img>
            <input
              className="text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none @error('username') border-red-500 @enderror"
              id="username"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                anyError = false;
                setError((prev) => ({ ...prev, usernameError: "" }));
              }}
            ></input>
          </div>
          <div className="h-8">
            <p className="text-red-500 text-xs italic mb-0">
              {errorField.usernameError}
            </p>
          </div>

          <div className="flex border-b">
            <img
              className="w-7 h-7  p-1 my-0.5"
              src={IconPassword}
              alt="password"
            ></img>
            <input
              className="text-sm font-body appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                anyError = false;
                setError((prev) => ({ ...prev, passwordError: "" }));
              }}
            ></input>
          </div>
          <div className="h-8">
            <p className="text-red-500 text-xs italic mb-0">
              {errorField.passwordError}
            </p>
          </div>

          <div className="flex border-b">
            <img
              className="w-7 h-7  p-1 my-0.5"
              src={IconPassword}
              alt="confirm password"
            ></img>
            <input
              className="text-sm font-body  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                anyError = false;
                setError((prev) => ({ ...prev, confirmPasswordError: "" }));
              }}
            ></input>
          </div>
          <div className="h-8 mb-3">
            <p className="text-red-500 text-xs italic mb-0">
              {errorField.confirmPasswordError}
            </p>
          </div>
          <div className="flex justigy-center pb-3">
            <div className="flex">
              <input
                className=""
                id="tosCheck"
                type="checkbox"
                onChange={(e) => {
                  setError((prev) => ({ ...prev, tosError: "" }));
                }}
              ></input>
            </div>
            <div className="flex flex-rows pl-2">
              <Link
                to={"/policy"}
                className="text-gray-700 hover:text-blue-400 hover:underline font-body text-xs "
                style={{ fontSize: "0.7rem" }}
              >
                I Agree to Terms of Service and Privacy Policy
              </Link>
            </div>
          </div>
          {errorField.tosError !== "" ? (
            <div className="h-8 mb-3">
              <p className="text-red-500 text-xs italic mb-0">
                {errorField.tosError}
              </p>
            </div>
          ) : null}
          <div className="flex justigy-center pb-8">
            <div className="flex">
              <input className="" id="updatesCheck" type="checkbox"></input>
            </div>
            <div className="flex flex-rows pl-2">
              <Link
                to={"/policy"}
                className="text-gray-700 hover:text-blue-400 hover:underline font-body text-xs "
                style={{ fontSize: "0.7rem" }}
              >
                I would like to receive product updates via email
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-56 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitHandler}
            >
              Register
            </button>
          </div>
          <div className="flex flex-rows pt-6 justify-center">
            <Link
              to={"/policy"}
              className="text-gray-700 hover:text-blue-400 hover:underline font-body text-xs"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-rows justify-center pt-2">
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className=" text-center text-gray-700 hover:text-blue-400 hover:underline font-body text-xs"
            >
              Already registered? Click Here to Login
            </Link>
          </div>
          <div className="flex flex-rows justify-center pt-2">
            <Link
              to={"/pricing"}
              className=" text-center text-gray-700 hover:text-blue-400 hover:underline font-body text-xs"
            >
              Back to all sign up options
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
