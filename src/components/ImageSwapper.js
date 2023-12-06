import React, { useEffect, useState } from "react";

const ImageSwapper = ({ images, style, solid, alt, className }) => {
  const [index, setIndex] = useState(0);
  const [firstTime, setFirstTime] = useState(true);

  const id = `animated${Math.random()}`;
  var imageChangeID;

  //https://cubic-bezier.com/
  let styleImage = {
    ...style,
    backgroundColor: "transparent",
    visibility: "visible",
    opacity: "1",
  };

  const hideTimer = (el) => {
    setTimeout(() => {
      el.style.opacity = 0;
      el.style.visibility = "hidden";
      el.style.transition = "visibility 0s 1s, opacity 1s linear";
    }, 4000);
  };

  const timer = (el) => {
    let time = 5000 + Math.ceil(Math.random() * 1000);
    imageChangeID = setInterval(() => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
      el.style.transition = "opacity 2s linear";

      let newActiveIndex = index + 1 === images.length ? 0 : index + 1;
      hideTimer(el);
      setIndex(newActiveIndex);
    }, time);
  };

  useEffect(() => {
    //preloading image
    images.forEach((path) => {
      new Image().src = path;
    });
  }, []);

  useEffect(() => {
    let el = document.getElementById(id);
    if (firstTime) {
      setFirstTime(false);
      hideTimer(el);
    }
    timer(el);
    return () => {
      // clearInterval(imageFadeID);
      clearInterval(imageChangeID);
    };
  }, [firstTime, index]);

  return (
    <div className="grid justify-items-center">
      <img
        src={solid}
        className={`col-start-1 row-start-1 ${className}`}
        alt={alt ? alt : "solid background"}
        style={{...style}}
      />
      <img
        id={id}
        src={images[index]}
        className={`col-start-1 row-start-1 ${className}`}
        alt={alt ? alt : "solid background"}
        style={{ ...styleImage }}
      />
    </div>
  );
};

export default ImageSwapper;
