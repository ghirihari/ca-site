import React from 'react'
import ParticlesCont from './particles';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className='row banner'>
        <div style={{zIndex:-1}}><ParticlesCont/></div>
        <label className="bannerText col-12 col-lg-9">Get in touch with us</label>
        <Link to="contact" className="btn btn-warning col-12 col-lg-3 fixButton" >
            <label style={{cursor:'inherit'}}>Fix an appointment</label>
            <svg className="CarouselIcon feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </Link> 
      </div>
    </div>
  )
}

export default Banner