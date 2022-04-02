import React from 'react'
import Carousel from "./carousel";
import Content from './content';
import Banner from './banner';
import './home.css'

const Home = ({data, services}) => {
  return (
    <div>
      <Carousel data={data.carousel}/>
      <Banner bannerData={data.banner}/>
      <Content 
        introContent={data.introContent} 
        sectorData={data.sectorData} 
        subtitles={data.subtitles}
        services={services}
      />
    </div>
  )
}

export default Home