import React from "react";
import Carousel from "./carousel";
import Content from "./content";
import "./home.css";

const Home = ({ data, services }) => {
  return (
    <div>
      {/* <Carousel data={data.home.carousel} /> */}
      {/* <Banner bannerData={data.home.banner} /> */}
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
