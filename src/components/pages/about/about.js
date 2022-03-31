import React from 'react'

// Icons
import {FaFlagCheckered} from 'react-icons/fa'
import {SiLinkedin, SiTwitter} from 'react-icons/si'

// Images
import Image from '../../../assets/founder.jpeg'
// Styles
import './about.css'
import { about, twitter, linkedin } from '../../../consts'

const Intro = () => {
  return(
    <div className="contentContainer contentText" style={{paddingBottom:'50px', textAlign:'justify', fontSize:'18px'}}>
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
        <ul className='coreList'>
            {about.coreValues.data.map((item, index)=>
              <li key={index} style={{marginTop:'10px'}}>{item}</li>
            )}
          </ul>
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
            <label className="AboutBannerTitle">{about.banner[0]}&nbsp;</label>
            <label className="AboutBannerText">{about.banner[1]}</label>
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
            <label className="AboutBannerTitle">{about.missions.title}</label>
            <hr className='line'/>
          </div>
          <ul className='missionsList'>
            {about.missions.data.map((item, index)=>
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
        link:twitter.link,
    },
    {
        icon:<SiLinkedin size='24px'/>,
        link:linkedin,
    },
  ]

  return(
      <div className='expContainer'>
        <div className='contentTitle' style={{alignItems:'start'}}>
          <label className="AboutBannerTitle" style={{color:'var(--blue)'}}>{about.founder.title}</label>
          <hr className='line'/>
        </div>
        <div className='founderContainer'>
          <div>
            <img src={Image} alt="Founder"/>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <label className='founderTitle'>{about.founder.name}</label>
            <label className='founderDes'>{about.founder.designation}</label>
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