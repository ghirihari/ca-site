import React, { useEffect, useState } from "react";
import Content from "./content";
import "./home.css";

import BannerImage from "../../../assets/banner.jpg";
import Image0 from "../../../assets/image0.jpg";
import Image1 from "../../../assets/image1.jpg";

const images = [BannerImage, Image0, Image1];

const ImageTransition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const MarginKey = ["0%", "-100%", "-200%"];

  return (
    <div className="banner-container" style={{ display: "flex" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index}`}
          style={{
            marginLeft: index === 0 ? MarginKey[currentImageIndex] : 0,
            transition: "all 0.5s ease-in",
            width: "100%",
          }}
        />
      ))}
    </div>
  );
};

const Home = ({ data, services }) => {
  return (
    <div>
      <ImageTransition />
      <Content
        data={data}
        introContent={data.home.introContent}
        sectorData={data.home.sectorData}
        subtitles={data.home.subtitles}
        services={services}
      />
    </div>
  );
};

export default Home;
