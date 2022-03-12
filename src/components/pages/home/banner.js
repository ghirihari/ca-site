import React from 'react'
import ParticlesCont from './particles';


const Banner = () => {
  return (
    <div className="container-fluid">
      <div className='row banner'>
        <div style={{zIndex:-1}}><ParticlesCont/></div>
        <label className="bannerText col-12 col-lg-9">A peer reviewed audit firm in Coimbatore with 43 years of experience</label>
        <button className="btn btn-warning col-12 col-lg-3 fixButton" >
            <label style={{cursor:'inherit'}}>Fix an appointment</label>
            <svg className="CarouselIcon feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button> 
      </div>
    </div>
  )
}

export default Banner