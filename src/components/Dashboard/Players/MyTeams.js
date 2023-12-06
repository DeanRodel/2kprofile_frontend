import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Twitt from "../../../img/social-media/twitter.png";
import Insta from "../../../img/social-media/insta.png";
import Twitch from "../../../img/social-media/twitch_white.png";
import YouTube from "../../../img/social-media/youtube.png";
import Discord from "../../../img/social-media/discord_white.png";
import Logo from "../../../img/logos/emailLogo.png";
import CreateTeam from "./CreateTeamModal";
import Invites from "./InvitesModal";

const MyTeams = ({ teams, player, setTeams, setPlayer }) => {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showInvites, setShowInvites] = useState(false);

  function hideCreateTeam() {
    setShowCreateTeam(false);
  }
  function hideInvites() {
    setShowInvites(false);
  }
  return (
    <div
      className="w-full flex justify-center py-10 sm:py-20 px-10 sm:px-0"
      id="Team"
    >
      <div className="sm:flex-col grid-rows justify-center max-w-4xl w-full">
        {showCreateTeam ? (
          <>
            <CreateTeam hideTeam={hideCreateTeam} />
          </>
        ) : null}
        {showInvites ? (
          <>
            <Invites
              hideInvites={hideInvites}
              player={player}
              setTeams={setTeams}
              setPlayer={setPlayer}
            />
          </>
        ) : null}

        <div className="md:mx-4 mx-0 mb-8">
          <div className="flex">
            <h5 className="font-semibold sm:text-4xl text-3xl sm:pb-4 pb-2 text-black">
              MY TEAMS
            </h5>
          </div>
          <div className="border-yellow-400 border-2 sm:w-36 w-20 mt-2 sm:mt-4 mb-6"></div>
        </div>
        {/* <div className="mt-2 md:pl-8 pl-0 flex sm:justify-start justify-center md:pb-16 pb-6">
          <p className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2">
            Hide
          </p>
          <div className="relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="teams"
              className="toggle-checkbox absolute block w-6 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              // onChange={toggle}
              // checked={show}
            />
            <p
              for="toggle"
              className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></p>
          </div>
          <label
            for="toggle"
            className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right"
          >
            Show
          </label>
        </div> */}

        {teams.length === 0 ? <div className="h-10 pt-10" /> : null}
        <div className="flex justify-center md:justify-end ">
          <button
            className="md:w-80 w-60 md:mr-7 mr-0 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setShowCreateTeam(true)}
          >
            CREATE TEAM
          </button>
        </div>
        <div className="flex justify-center md:justify-end pt-5">
          <button
            className="md:w-80 w-60 md:mr-7 mr-0 h-9 font-oswald font-thin tracking-widest border-red-700 bg-red-700 h-9 hover:text-red-700 hover:border-red-700  border-2 hover:bg-white text-white py-auto px-4 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setShowInvites(true)}
          >
            INVITES
          </button>
        </div>
        {teams.length === 0 ? (
          <p className="px-5 py-3 ml-5 mt-4 text-center text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg">
            You do not currently belong to any teams.
          </p>
        ) : null}

        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:mx-0 mx-auto">
          {teams.map((team) => (
            <Link
              to={`/teamProfile/${team.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col m-7">
                <div className="bg-white shadow-md">
                  <div className="flex-none sm:flex">
                    <div
                      className="h-48 w-48 lg:mb-0 mb-3 bg-cover bg-center"
                      style={{ backgroundImage: `url(${team.gravatar})` }}
                    >
                      {/* <img
                      src={`${team.gravatar}?s=200`}
                      alt='Just a flower'
                      className='object-cover mx-auto my-auto bg-cover'
                    /> */}
                    </div>
                    <div className="flex-auto pl-2 justify-evenly py-3 pt-7 bg-teamCard bg-top">
                      <div className="flex flex-wrap ">
                        <h2 className="flex-auto text-base font-medium font-head">
                          {team.teamProfile.teamName}
                        </h2>
                      </div>
                      {team.teamProfile.teamTag !== "" ? (
                        <div className="flex pt-3 text-xs text-gray-600">
                          <p className="">TeamTag:</p>
                          <p className="pl-1 mr-2">
                            {team.teamProfile.teamTag}
                          </p>
                        </div>
                      ) : null}
                      {team.teamProfile.team !== "" ? (
                        <div className="flex pt-2 text-xs text-gray-600">
                          <p className="">Team:</p>
                          <p className="pl-6 mr-2">{team.teamProfile.team}</p>
                        </div>
                      ) : null}
                      {team.teamProfile.game !== "" ? (
                        <div className="flex pt-2 text-xs text-gray-600">
                          <p className="">Game:</p>
                          <p className="pl-6 mr-2">{team.teamProfile.game}</p>
                        </div>
                      ) : null}
                      <div className="flex items-center pt-8">
                        <img
                          src={Logo}
                          className="h-5 object-cover mr-3"
                          alt="avatar"
                        />
                        <div className="flex px-1 justify-between">
                          {team.social_media.twitterId !== "" ? (
                            <a
                              id="twitter"
                              href={`https://www.twitter.com/${team.social_media.twitterId}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Twitt}
                                className="h-4 object-cover mt-1 mr-1"
                                alt="twitter"
                              />
                            </a>
                          ) : null}
                          {team.social_media.discordId !== "" ? (
                            <a
                              id="discord"
                              href={`https://discord.com/channels/${team.social_media.discordId}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Discord}
                                className="h-6 object-cover mx-1"
                                alt="discord"
                              />
                            </a>
                          ) : null}
                          {team.social_media.instagramId ? (
                            <a
                              id="instagram"
                              href={`https://www.facebook.com/${team.social_media.instagramId}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Insta}
                                className="h-4 object-cover mt-1 mx-2"
                                alt="instagram"
                              />
                            </a>
                          ) : null}
                          {team.social_media.twitchId !== "" ? (
                            <a
                              id="twitch"
                              href={`https://www.twitch.tv/${team.social_media.twitchId}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Twitch}
                                className="h-4 object-cover mt-1 mx-2"
                                alt="twitch"
                              />
                            </a>
                          ) : null}
                          {team.social_media.youtubeId !== "" ? (
                            <a
                              id="youtube"
                              href={`https://www.youtube.com/channel/${team.social_media.youtubeId}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={YouTube}
                                className="h-6 object-cover mx-2"
                                alt="youtube"
                              />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
