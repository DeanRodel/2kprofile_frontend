import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageLibraryModal from "./ImageLibraryModal";
import ThemeModal from "./ThemeModal";

const ManageSections = ({  player, team, type }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [themes, setThemes] = useState([]);

  const [name, setName] = useState([]);
  const [bio, setBio] = useState([]);
  const [blog, setBlog] = useState([]);
  const [contact, setContact] = useState([]);
  const [profileCard, setProfileCard] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [stats, setStats] = useState([]);
  const [stream, setStream] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [store, setStore] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  function hideModal() {
    setShowModal(false);
  }

  function hideThemeModal() {
    setShowThemeModal(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    axios
      .get("/api/nav/theme")
      .then((res) => {
        setThemes(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const error = err.response.data.split("Error: ")[1];
          const serverError = error.split("<br>")[0];
          setError(serverError);
        } else console.log(err);
      });
  }, []);
  
  return (
    <div className="w-full sm:grid grid-rows bg-cobe py-12" id="Templates">
      {showModal ? (
        <ImageLibraryModal
          hideModal={hideModal}
          themes={themes}
          section="background"
          orgImage={type === "player"
          ? player.theme.background
          : team.theme.background}
          api={
            type === "player"
              ? "/api/players/updateTheme"
              : `/api/teams/${team._id}/updateTheme`
          }
        />
      ) : null}
      {showThemeModal ? (
        <ThemeModal
          hideModal={hideThemeModal}
          themes={themes}
          api={
            type === "player"
              ? "/api/players/updateTheme"
              : `/api/teams/${team._id}/updateTheme`
          }
        />
      ) : null}

      <div className="sm:flex-row flex-none sm:justify-start justify-center text-center sm:w-h40 w-full">
        <h5 className="font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest">
          Manage Theme
        </h5>
        <p className="font-body text-white sm:text-base text-xs pb-4">
          Updating the theme requires a page <strong>Refresh</strong>.
        </p>
      </div>
      <div className="flex justify-center text-center sm:pt-12 pt-16">
        <button
          className="md:w-80 w-60 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => setShowThemeModal(true)}
        >
          SELECT THEME
        </button>
      </div>
      <p className="font-body sm:text-xl text-xs text-white font-light text-center pt-6 tracking-widest">
        Choose a theme to update all
      </p>
      <p className="font-oswald sm:text-4xl text-xl font-light text-white text-center py-9 tracking-widest">
        OR
      </p>
      {success !== "" ? (
        <p className="bg-green-300 px-5 py-3 text-center sm:text-sm text-xs shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400 sm:mx-7 mx-16 mb-5 sm:mt-0 mt-12">
          {success}
        </p>
      ) : null}
      {error !== "" ? (
        <p className="bg-red-300 px-5 py-3 text-center sm:text-sm text-xs shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400 sm:mx-7 mx-16 mb-5 sm:mt-0 mt-12">
          {error}
        </p>
      ) : null}
      <div className="flex justify-center text-center">
        <button
          className="md:w-80 w-60 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => setShowModal(true)}
        >
          SELECT A BACKGROUND
        </button>
      </div>
      <p className="font-body sm:text-xl text-xs text-white font-light text-center pt-6 tracking-widest">
        Update primary background
      </p>
    </div>
  );
};

export default ManageSections;
