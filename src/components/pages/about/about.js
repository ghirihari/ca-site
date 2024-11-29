import React from "react";

// Icons
import { SiLinkedin, SiTwitter } from "react-icons/si";

// Images
import Image1 from "../../../assets/founder1.png";
import Image2 from "../../../assets/founder2.jpeg";
// Styles
import "./about.css";

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
        <CoreValues
          data={aboutData.coreValues}
          title={aboutData.subtitles[0]}
        />
      </div>
    </>
  );
};

export default About;
