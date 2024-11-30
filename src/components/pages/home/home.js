import React, { useEffect, useState } from "react";
import Content from "./content";
import "./home.css";

import Image1 from "../../../assets/image1.jpg";

import { scrollToSection } from "../../header/navBarV1";

const ImageTransition = () => {
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCaptionIndex((prevIndex) => (prevIndex + 1) % Captions.length);
    }, 3_000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  });

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
      <img
        src={Image1}
        alt={`Banner`}
        style={{
          width: "100%",
        }}
      />
      <>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            opacity: currentCaptionIndex === 0 ? 1 : 0,
            transition: "all 0.5s",
          }}
        >
          <label className="slideLabel">{Captions[0].title}</label>
          <div>
            <button
              className="btn btn-primary buttonText"
              onClick={() => scrollToSection(Captions[0].link)}
            >
              {Captions[0].label}
            </button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            opacity: currentCaptionIndex === 1 ? 1 : 0,
            transition: "all 0.5s ",
          }}
        >
          <label className="slideLabel">{Captions[1].title}</label>
          <div>
            <button
              className="btn btn-primary buttonText"
              onClick={() => scrollToSection(Captions[1].link)}
            >
              {Captions[1].label}
            </button>
          </div>
        </div>
      </>
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
