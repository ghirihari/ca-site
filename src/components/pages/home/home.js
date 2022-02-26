import React from 'react'
import Carousel from "./carousel";
import Content from './content';
import Banner from './banner';
import './home.css'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Banner/>
      <Content/>
    </div>
  )
}

export default Home