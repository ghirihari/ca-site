import React, { useEffect, useState } from "react";
import Content from "./content";
import "./home.css";

import Image0 from "../../../assets/image0.jpg";
import Image1 from "../../../assets/image1.jpg";

import { scrollToSection } from "../../header/navBarV1";

const images = [Image0, Image1];

const ImageTransition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const MarginKey = ["0%", "-100%"];
  const Captions = [
    {
      title: "Comprehensive business solutions",
      link: "aboutSection",
      label: "About us",
    },
    {
      title: "Effective Tax strategy",
      link: "servicesSection",
      label: "Our Services",
    },
  ];

  return (
    <div className="banner-container" style={{ display: "flex" }}>
      {images.map((image, index) => (
        <>
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
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: currentImageIndex === index ? "block" : "none",
            }}
          >
            <label className="slideLabel">{Captions[index].title}</label>
            <div>
              <button
                className="btn btn-primary buttonText"
                onClick={() => scrollToSection(Captions[index].link)}
              >
                {Captions[index].label}
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

const Home = ({ data, services }) => {
  return (
    <div id="homeSection">
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
