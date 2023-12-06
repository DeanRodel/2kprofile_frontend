import axios from "axios";
import React, { useState, useEffect } from "react";
import UploadImage from "../UploadImage";
import Loader from "../../img/LoaderSmall.gif";
import UploadImageSpomsors from "../UploadForms/UploadImageSponsors";
import Edit from "../../img/edit.png";

const Sponsors = ({ account, setPlayer, type, setTeam }) => {
  const [sponsors, setSponsors] = useState(account.sponsors);
  const [reload, setReload] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [edit, setDisable] = useState("true");
  const [show, setShow] = useState(account.templates[6].show);

  function editClick() {
    setDisable(!edit);
  }

  function addSponsor() {
    let sponsorsTemp = sponsors;
    sponsorsTemp.push({ image: "", website: "" });
    setSponsors(sponsorsTemp);
    setReload(!reload);
  }

  function removeSponsor(index) {
    let sponsorsTemp = sponsors;
    sponsorsTemp.splice(index, 1);
    setSponsors(sponsorsTemp);
    for (var i = 0; i < sponsorsTemp.length; i++) {
      document.getElementById(`Sponsor${i}`).value = sponsorsTemp[i].website;
    }
    setReload(!reload);
  }

  function setImage(url, sponsor) {
    let sponsorsTemp = sponsors;
    sponsorsTemp[sponsor].image = url;
    setSponsors(sponsorsTemp);
    setReload(!reload);
  }

  function setUrl(url, sponsor) {
    setError("");
    setSuccess("");
    let sponsorsTemp = sponsors;
    sponsorsTemp[sponsor].website = url;
    setSponsors(sponsorsTemp);
    setReload(!reload);
  }

  function updateSponsors() {
    let body = sponsors;
    for (var i = 0; i < body.length; i++) {
      body[i].website = document.getElementById(`Sponsor${i}`).value;
    }
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common = { authtoken: `Bearer ${token}` };
    if (type === "player") {
      axios
        .put("/api/players/updateSponsors", body)
        .then((res) => {
          setSuccess(res.data.success);
          setPlayer(res.data.player);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split("Error: ")[1];
            const serverError = error.split("<br>")[0];
            setError(serverError);
          } else console.log(err);
        });
    }
    if (type === "team") {
      axios
        .put(`/api/teams/${account._id}/updateSponsors`, body)
        .then((res) => {
          setSuccess(res.data.success);
          setPlayer(res.data.team);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const error = err.response.data.split("Error: ")[1];
            const serverError = error.split("<br>")[0];
            setError(serverError);
          } else console.log(err);
        });
    }
  }

  function toggle() {
    let toggle = document.getElementById("toggleSponsors");
    setShow(toggle.checked);
    const body = {
      section: "Sponsors",
      value: toggle.checked,
    };
    if (account.profile_info) {
      axios.put("/api/players/toggleSection", body);
      const templates = account.templates;
      templates[6].show = toggle.checked;
      setPlayer({ ...account, templates: templates });
    } else {
      axios.put(`/api/teams/${account._id}/toggleSection`, body);
      const templates = account.templates;
      templates[6].show = toggle.checked;
      setTeam({ ...account, templates: templates });
    }
  }

  useEffect(() => {}, [reload]);

  const Sponsor = (sponsors, sponsor) => {

    return (
      <div className="sm:grid grid-cols-4 pb-20">
        <div
          className="md:w-40 w-32  md:h-40 h-32 m-auto rounded-full"
          style={{
            backgroundImage: `url(${sponsors[sponsor].image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <UploadImageSpomsors setImage={setImage} sponsor={sponsor} />
          <div className="flex  items-center justify-center pt-3">
            <img className="w-5 mr-2" src={Edit}></img>
            <p className="text-sm text-red-500 group-hover:text-gray-400  underline">
              edit logo
            </p>
          </div>
        </div>
        <div className="flex col-span-2 items-center sm:mx-0 mx-5 sm:pt-0 pt-16 pl-5">
          <p className="text-white font-body md:text-base text-xs font-bold">
            URL:
          </p>
          <input
            className="text-white font-body md:text-base text-xs bg-tem pl-5 w-full bg-transparent"
            type="text"
            placeholder="Your sponsor's website"
            id={`Sponsor${sponsor}`}
            defaultValue={sponsors[sponsor].website}
            onChange={(e) => setUrl(e.target.value, sponsor)}
            disabled={edit}
          />
        </div>
        <div className="flex items-center sm:justify-end justify-center pr-5 sm:pt-0 pt-5 pl-6">
          <p
            className="font-body text-base mr-5 underline text-sm text-red-500 hover:text-gray-400 "
            onClick={editClick}
          >
            edit
          </p>
          <p
            className="font-body text-base underline text-sm text-red-500 hover:text-gray-400 "
            onClick={() => removeSponsor(sponsor)}
          >
            delete
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full sm:grid grid-rows justify-center" id="Sponsors">
      <div className="sm:flex-row flex-none sm:justify-start justify-center sm:w-h40 w-full">
        <h5 className="font-bold sm:text-4xl text-2xl pb-4 text-white font-head tracking-widest sm:text-left text-center">
          Sponsors
        </h5>
      </div>
      <div className="mt-2 md:pl-8 pl-0 flex sm:justify-start justify-center pb-16">
        <p className="text-white font-head tracking-widest col-span-2 md:text-base text-xs text-right px-2">
          Hide
        </p>
        <div className="relative inline-block  w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggleSponsors"
            className="toggle-checkbox absolute block w-6 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
            onChange={toggle}
            checked={show}
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
      </div>
      <div className="flex-row max-w-w63 ">
        {sponsors.map((sponsor) =>
          Sponsor(sponsors, sponsors.indexOf(sponsor))
        )}
        {success !== "" ? (
          <p className="w-full  mr-24 h-9 bg-green-300 pt-2 mb-4 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-green-400">
            {success}
          </p>
        ) : null}
        {error !== "" ? (
          <p className="w-full  mr-24 h-9 bg-red-300 pt-2 mb-4 mt-8 text-center text-sm shadow-sm font-medium tracking-wider border text-white hover:shadow-lg hover:bg-red-400">
            {error}
          </p>
        ) : null}
        <div className="sm:grid grid-cols-2 sm:ml-auto sm:pr-10 pr-0 ml-0 sm:pt-0 pt-16 pb-4 justify-center">
          <div></div>
          <div className="flex justify-center">
            <button
              className=" sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700"
              onClick={addSponsor}
            >
              ADD ANOTHER SPONSOR
            </button>
          </div>
        </div>
        <div className="sm:grid grid-cols-2 sm:ml-auto sm:pr-10 pr-0 ml-0  sm:pb-10">
          <div></div>
          <div className="flex justify-center">
            <button
              className="sm:mx-0 mx-auto sm:w-80 w-60 sm:text-base text-xs font-oswald px-11 bg-red-700 h-9 text-white tracking-widest font-thin  mb-2 hover:bg-white border-red-600 border-2 hover:text-red-700"
              onClick={updateSponsors}
            >
              UPDATE SPONSORS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
