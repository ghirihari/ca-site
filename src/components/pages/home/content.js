import React from "react";
import "./content.css";
// Images
import Service1 from "../../../assets/service1.jpg";
import Service2 from "../../../assets/service2.jpg";
import Service3 from "../../../assets/service3.jpg";
import Service4 from "../../../assets/service4.jpg";
import Service5 from "../../../assets/service5.jpg";
import Service6 from "../../../assets/service6.jpg";
import Services from "../services/services";
import Contact from "../contact/contact";
import About, { OurFounder } from "../about/about";

const Sectors = ({ title, sectorData }) => {
  const data = [
    { text: sectorData.data[0], image: Service4 },
    { text: sectorData.data[1], image: Service1 },
    { text: sectorData.data[2], image: Service5 },
    { text: sectorData.data[3], image: Service3 },
    { text: sectorData.data[4], image: Service2 },
    { text: sectorData.data[5], image: Service6 },
  ];

  return (
    <div className="expContainer">
      <div className="contentTitle">
        <label className="subtitle" style={{ color: "#fff" }}>
          {title}
        </label>
        <hr className="line" />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 mb-3">
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card sectorCard">
              <div className="cardIconContainer">
                {/* <hr className='line'/> */}
                <div className="cardImage">
                  <img src={item.image} alt={item.text} />
                </div>
                {/* <hr className='line'/> */}
              </div>
              <h4 className="cardText bolderText">{item.text}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceContainer = ({ data }) => (
  <div className="serviceContainer">
    <div className="contentTitle">
      <label className="subtitle">{"Our Services"}</label>
      <hr className="line" />
    </div>
    <div>
      <Services servicesData={data.services} />
    </div>
  </div>
);

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

const Intro = ({ data }) => {
  return (
    <div className="bannerIntro">
      <div className="banner">
        <div className="container" style={{ marginTop: 64 }}>
          <div
            className="contentContainer contentText"
            style={{
              paddingBottom: "0px",
              textAlign: "justify",
              fontSize: "18px",
              height: "500px",
            }}
          >
            {data.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ data, introContent, sectorData, subtitles, services }) => {
  return (
    <div>
      <Intro data={data.about.content} />
      <div id="aboutSection">
        <About aboutData={data.about} links={data.links} />
      </div>
      <OurMission title={data.about.subtitles[1]} data={data.about.missions} />
      <div className="container" id="servicesSection">
        <ServiceContainer data={data} />
      </div>

      <div className="bannerBG">
        <div className="banner blueOverlay">
          <div className="container expirienceSection">
            <Sectors title={subtitles[1]} sectorData={sectorData} />
          </div>
        </div>
      </div>

      <div className="container">
        <OurFounder
          title={data.about.subtitles[2]}
          data={data.about.founder}
          links={data.links}
        />
      </div>

      <div id="contactSection">
        <Contact
          links={data.links}
          data={data.contactUS}
          aboutData={data.about}
        />
      </div>
      {/* <Intro introContent={introContent}/>
       */}
    </div>
  );
};

export default Content;
