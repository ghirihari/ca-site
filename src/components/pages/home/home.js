import React from 'react'
import Carousel from "./carousel";
import Content from './content';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <div className="bannerBG">
            <div className="banner">
                <h4 className="bannerText">A peer reviewed audit firm in Coimbatore with 43 years of experience</h4>
                <button className="btn btn-warning">Fix an appointment
                    <svg className="CarouselIcon feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
      <Content/>
    </div>
  )
}

export default Home