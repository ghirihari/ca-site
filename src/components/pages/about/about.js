import React from 'react'

// Icons
import {FaFlagCheckered} from 'react-icons/fa'
import {SiLinkedin, SiTwitter} from 'react-icons/si'

// Images
import Image from '../../../assets/founder.jpeg'
// Styles
import './about.css'

const Intro = ({data}) => {
  return(
    <div className="contentContainer contentText" style={{paddingBottom:'50px', textAlign:'justify', fontSize:'18px'}}>
      {data.map((item,index)=><p key={index}>{item}</p>)}
    </div>
  )
}

const CoreValues = ({title,data}) => {

  return(
    <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">{title}</label>
            <hr className='line'/>
        </div>
        <ul className='coreList'>
            {data.map((item, index)=>
              <li key={index} style={{marginTop:'10px'}}>{item}</li>
            )}
          </ul>
    </div>
  )
}
  
const Banner = ({data}) => {
  return(
    <div className="bannerBG">
      <div className='banner blueOverlay'>
        <div className='bannerIconContainer'>
          <FaFlagCheckered size={28} style={{fill:'var(--blue)'}}/>
        </div>
        <div style={{marginLeft:'15px', display:'flex',flexDirection:'column'}}>
          <div>
            <label className="AboutBannerTitle">{data[0]}&nbsp;</label>
            <label className="AboutBannerText">{data[1]}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

const OurMission = ({title, data}) => {
  return(
    <div className='bannerBG'>
      <div className='blueOverlay' style={{padding:'50px 0px'}}>
        <div className='container'>
          <div className='contentTitle' style={{alignItems:'start'}}>
            <label className="AboutBannerTitle">{title}</label>
            <hr className='line'/>
          </div>
          <ul className='missionsList'>
            {data.map((item, index)=>
              <li key={index} style={{marginTop:'10px'}}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const OurFounder = ({title, data, links}) => {
  const linkData = [
    {
        icon: <SiTwitter size='24px'/>,
        link:links.twitter.link,
    },
    {
        icon:<SiLinkedin size='24px'/>,
        link:links.linkedIn,
    },
  ]

  return(
      <div className='expContainer'>
        <div className='contentTitle' style={{alignItems:'start'}}>
          <label className="AboutBannerTitle" style={{color:'var(--blue)'}}>{title}</label>
          <hr className='line'/>
        </div>
        <div className='founderContainer'>
          <div>
            <img src={Image} alt="Founder"/>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <label className='founderTitle'>{data.name}</label>
            <label className='founderDes'>{data.designation}</label>
            <div className='mt-1'>
              {linkData.map((item, index)=>
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

const About = ({aboutData, links}) => {
  console.log(links)
  return (
    <>
      <div className='container'>
        <Intro data={aboutData.content}/>
      </div>
      <Banner data={aboutData.banner}/>
      <div className='container'>
        <CoreValues data={aboutData.coreValues} title={aboutData.subtitles[0]}/>
      </div>
      <OurMission title={aboutData.subtitles[1]} data={aboutData.missions}/>
      <div className='container'>
        <OurFounder title={aboutData.subtitles[2]} data={aboutData.founder} links={links}/>
      </div>
    </>
  )
}

export default About