import React from "react";

// Icons
import { SiLinkedin, SiTwitter } from "react-icons/si";

// Images
import Image1 from "../../../assets/founder1.png";
import Image2 from "../../../assets/founder2.jpeg";
// Styles
import "./about.css";

const Intro = ({ data }) => {
  return (
    <div
      className="contentContainer contentText"
      style={{ paddingBottom: "0px", fontSize: "18px" }}
    >
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

const CoreValues = ({ title, data }) => {
  return (
    <div className="expContainer">
      <div className="contentTitle" style={{ alignItems: "start" }}>
        <label className="subtitle">{title}</label>
        <hr className="line" />
      </div>
      <ul className="coreList">
        {data.map((item, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const OurMission = ({ title, data }) => {
  return (
    <div className="bannerBG">
      <div className="banner blueOverlay" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="contentTitle" style={{ alignItems: "start" }}>
            <label className="AboutBannerTitle">{title}</label>
            <hr className="line" />
          </div>
          <ul className="missionsList">
            {data.map((item, index) => (
              <li key={index} style={{ marginTop: "10px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Founders = ({ name, designation, linkData, picture }) => {
  return (
    <div className="founderFrame">
      <div>
        <img src={picture} alt="Founder" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="founderTitle">{name}</label>
        <label className="founderDes">{designation}</label>
        <div className="mt-1">
          {linkData.map((item, index) => (
            <a
              key={index}
              className="me-3 founderIcon"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export const OurFounder = ({ title, data, links }) => {
  const linkData = [
    {
      icon: <SiTwitter size="24px" />,
      link: links.twitter.link,
    },
    {
      icon: <SiLinkedin size="24px" />,
      link: links.linkedIn,
    },
  ];
  return (
    <div className="expContainer">
      <div className="contentTitle" style={{ alignItems: "start" }}>
        <label className="AboutBannerTitle" style={{ color: "var(--blue)" }}>
          {title}
        </label>
        <hr className="line" />
      </div>
      <div className="founderContainer">
        <Founders
          name={"A Jayachandran"}
          designation={"Chartered Accountant"}
          linkData={linkData}
          picture={Image1}
        />
        <Founders
          name={data.name}
          designation={data.designation}
          linkData={linkData}
          picture={Image2}
        />
      </div>
    </div>
  );
};

const About = ({ aboutData, links }) => {
  return (
    <>
      <div className="container">
        <Intro data={aboutData.content} />
      </div>
      <div className="container">
        <CoreValues
          data={aboutData.coreValues}
          title={aboutData.subtitles[0]}
        />
      </div>
      <OurMission title={aboutData.subtitles[1]} data={aboutData.missions} />
    </>
  );
};

export default About;
