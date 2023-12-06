import React, { useState } from "react";
import axios from "axios";

import Loader from "../../img/LoaderSmall.gif";

const UploadImageSponsors = ({ setImage, sponsor }) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const uploadFileHandler = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    axios({
      method: "post",
      url: "/api/nav/uploadPicture",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      setLoading(false);
      setPhoto(res.data.url);
      setImage(res.data.url, sponsor);
    });
  };

  return (
    <div className="grid grid-cols-1">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col border-4 border-dashed md:w-40 w-32 md:h-40 h-32  hover:border-gray-400 border-red-700 group rounded-full">
          <div className="flex flex-col items-center justify-center my-auto rounded-full">
            <svg
              className="md:w-14 w-10 md:h-14 h-10 text-gray-500 group-hover:text-red-600 rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            {loading ? <img src={Loader} /> : null}
          </div>
          <input
            name="image"
            type="file"
            className="hidden"
            id="profilePicture"
            onChange={uploadFileHandler}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadImageSponsors;
