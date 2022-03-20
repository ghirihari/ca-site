import React from 'react'

// Icons
import {FaFlagCheckered} from 'react-icons/fa'
import {SiLinkedin, SiTwitter} from 'react-icons/si'

// Images
import Image from '../../../assets/founder.jpeg'
// Styles
import './about.css'
import { about } from '../../../consts'

const Intro = () => {
  return(
    <div className="contentContainer contentText" style={{paddingBottom:'50px', textAlign:'justify'}}>
      <p>{about.content.para1}</p>
      <p>{about.content.para2}</p>
    </div>
  )
}

const CoreValues = () => {

  return(
    <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">{about.coreValues.title}</label>
            <hr className='line'/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {about.coreValues.data.map((item, index)=>
              <div className="col valuesContainer" key={index}>
                <div className="valuesIcon">{item.icon}</div>
                <div className='valuesContent'>
                  <label className='valuesTitle'>{item.title}</label>
                  <label className='valuesText'>{item.text}</label>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}
  
const Banner = () => {
  return(
    <div className="bannerBG">
      <div className='banner blueOverlay'>
        <div className='bannerIconContainer'>
          <FaFlagCheckered size={28} style={{fill:'var(--blue)'}}/>
        </div>
        <div style={{marginLeft:'15px', display:'flex',flexDirection:'column'}}>
          <div>
            <label className="AboutBannerTitle">Quality, Compliance&nbsp;</label>
            <label className="AboutBannerText">& Trust</label>
          </div>
        </div>
      </div>
    </div>
  )
}

const OurMission = () => {
  return(
    <div className='bannerBG'>
      <div className='blueOverlay' style={{padding:'50px 0px'}}>
        <div className='container'>
          <div className='contentTitle' style={{alignItems:'start'}}>
            <label className="AboutBannerTitle">Our Mission</label>
            <hr className='line'/>
          </div>
          <ul className='missionsList'>
            {about.missions.map((item, index)=>
              <li key={index} style={{marginTop:'10px'}}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const OurFounder = () => {
  const links = [
    {
        icon: <SiTwitter size='24px'/>,
        link:'https://twitter.com/sanker_vishnu',
    },
    {
        icon:<SiLinkedin size='24px'/>,
        link:'https://www.linkedin.com/in/ca-vishnu-sanker-44584b140/',
    },
  ]

  return(
      <div className='expContainer'>
        <div className='contentTitle' style={{alignItems:'start'}}>
          <label className="AboutBannerTitle" style={{color:'var(--blue)'}}>Our Founder</label>
          <hr className='line'/>
        </div>
        <div className='founderContainer'>
          <div>
            <img src={Image} alt="Founder"/>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <label className='founderTitle'>J Vishnu Sanker</label>
            <label className='founderDes'>Chartered Accountant</label>
            <div className='mt-1'>
              {links.map((item, index)=>
                <a 
                  key={index} 
                  className="me-3 founderIcon" 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

const About = () => {
  return (
    <>
      <div className='container'>
        <Intro/>
      </div>
      <Banner/>
      <div className='container'>
        <CoreValues/>
      </div>
      <OurMission/>
      <div className='container'>
        <OurFounder/>
      </div>
    </>
  )
}

export default About