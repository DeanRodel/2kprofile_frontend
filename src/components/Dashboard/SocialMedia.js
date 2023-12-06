import React, { useState, useEffect } from "react";
import axios from "axios";

import Facebook from "../../img/social-media/facebook.png";
import Twitter from "../../img/social-media/twit-red.png";
import Insta from "../../img/social-media/insta-red.png";
import YouTube from "../../img/social-media/youtube-red.png";
import Discord from "../../img/social-media/discord-red.png";
import Twitch from "../../img/social-media/twitch-red.png";

const SocialMedia = ({ account, api, tier, setPlayer }) => {
  const [success, setSuccess] = useState("");

  function updateSocialMedia() {
    let body = {
      twitterId: document.getElementById("twitterInput").value,
      facebookId: document.getElementById("facebookInput").value,
      youtubeId: document.getElementById("youtubeInput").value,
      instagramId: document.getElementById("instagramInput").value,
      twitchId: document.getElementById("twitchInput").value,
      discordId: document.getElementById("discordInput").value,
      discordWidget: account.social_media.discordWidget,
    };
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    axios.put(api, body).then((res) => {
      setSuccess(res.data.success);
      setPlayer(res.data.account);
    });
  }

  return (
    <div
      className="w-full sm:grid grid-rows justify-center bg-cobe sm:pt-28 pt-10 pb-10"
      id="Social"
    >
      <div className="sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full">
        <h5 className="font-bold sm:text-4xl text-2xl pb-2 text-white font-head tracking-widest sm:text-left text-center">
          Social Media
        </h5>
        <p className="text-left font-body text-white sm:text-base text-xs pb-4">
          Only the ID of the social media channel is needed, do <strong>not</strong> copy the whole address.
        </p>
      </div>
      <div className="grid grid-cols-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={Facebook}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="facebook"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            Facebook
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="facebookInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.facebookId}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 pt-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={Twitter}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="twitter"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            Twitter
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="twitterInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.twitterId}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 pt-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={YouTube}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="youtube"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            YouTube (ID)
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="youtubeInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.youtubeId}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 pt-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={Insta}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="Instagram"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            Instagram
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="instagramInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.instagramId}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 pt-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={Discord}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="discord"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            Discord
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 py-2 px-3 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="discordInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.discordId}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 pt-5 ms:mr-5 mr-0">
        <div className="flex justify-self-center items-center ">
          <img
            src={Twitch}
            className="sm:w-6 w-5 sm:h-6 h-5"
            alt="twitch"
          ></img>
        </div>
        <div className="flex items-center justify-end md:pr-7 pr-1">
          <p className="text-center font-body text-white sm:text-base text-xs">
            Twitch
          </p>
        </div>
        <div className="col-span-3 ">
          <input
            className="sm:h-9 h-8 px-2 mt-1 focus:outline-none focus:ring-2  text-gray-600 md:text-base text-xs w-full"
            type="text"
            id="twitchInput"
            onChange={() => setSuccess("")}
            defaultValue={account.social_media.twitchId}
          />
        </div>
      </div>
      <div className="py-5">
        {success !== "" ? (
          <p className="sm:ml-0 ml-5 bg-green-300 mr-5 px-5 h-9 pt-2 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400">
            {success}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:ml-auto sm:pr-10 pr-0 ml-0 ">
        <button
          className=" sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700"
          onClick={updateSocialMedia}
          id="updateSocialMedia"
        >
          UPDATE SOCIALS
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
