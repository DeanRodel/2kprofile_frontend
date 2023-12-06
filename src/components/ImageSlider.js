import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ children, images, style, solid, alt, className }) => {

  const [filterImages, setFilterImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    setFilterImages(images.filter(Boolean));
  }, [images]);

  useEffect(() => {
    images.forEach((path) => {
      new Image().src = path;
    });
  }, []);

  useEffect(() => {
    let list = document.getElementsByClassName("carousel");
    if (list.length >= 1) {
      for (const el of list) {
        el.style.height = "100%";
      }
    }
    list = document.getElementsByClassName("slider-wrapper");
    if (list.length >= 1) {
      for (const el of list) {
        el.style.height = "100%";
      }
    }
    list = document.getElementsByClassName("slider");
    if (list.length >= 1) {
      for (const el of list) {
        el.style.height = "100%";
      }
    }
    setAutoPlay(true);
  }, [loaded]);

  useEffect(() => {
    const list = document.getElementsByClassName("carousel");
    setLoaded(list.length >= 1);
  });

  return (
    // <>
    //   {/* <div
    //     id={id}
    //     className={`col-start-1 row-start-1 bg-cover bg-center ${className}`}
    //     style={{ backgroundImage: `url(${filterImages[index]})` }}
    //   ></div> */}
    //   <div
    //     id={id - 1}
    //     className={`col-start-1 row-start-1 bg-cover bg-center ${className}`}
    //     style={{ backgroundImage: `url(${filterImages[nextIndex]})` }}
    //   ></div>
    // </>
    <div className={`col-start-1 row-start-1 bg-cover bg-center ${className}`}>
      {/* showIndicators={false} showStatus={false} showArrows={false} autoPlay={true} centerMode={true} infiniteLoop={true}*/}
      <Carousel
        className="h-full"
        interval="4000"
        stopOnHover={false}
        showThumbs={false}
        autoPlay={autoPlay}
        // centerMode={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        // dynamicHeight={true}
      >
        {filterImages.map((image, index) => (
          <img
            // alt="banner"
            style={{
              backgroundImage: `url(${filterImages[index]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
