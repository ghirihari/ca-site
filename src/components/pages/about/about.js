import React from 'react'

// Icons
import {FaRegHandshake, FaTasks} from 'react-icons/fa'
import {IoGlassesOutline} from 'react-icons/io5'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {RiHandHeartLine} from 'react-icons/ri'
import {GrCertificate} from 'react-icons/gr'
import {FaFlagCheckered} from 'react-icons/fa'
import {SiLinkedin, SiTwitter} from 'react-icons/si'

// Images
import Image from '../../../assets/founder.jpeg'
// Styles
import './about.css'

const Intro = () => {
  return(
    <div className="contentContainer contentText" style={{paddingBottom:'50px', textAlign:'justify'}}>
      <p>
        A strong team of inhouse professionals/Articled/Audit Assistants and other associate professionals with a passion for learning and seeking professional excellence deliver credible, ethical, multiple professional services. From Certification, Taxation Advisory to Accounting and Business Support, Business Advisory and Corporate Strategy to M&A, the firm provides a variety of services reliably and following best practices.
      </p>
      <p>
        Professional, Specialized, Cross-Functional and Multi-Disciplinary team Lead by Experienced Leadership following Best Practices with strong adherence to moral and ethical values, J Vishnu & Co is a firm of Chartered Accountants and Direct Tax Advisory Experts headquartered at Coimbatore, Tamil Nadu, India.
      </p>
    </div>
  )
}

const CoreValues = () => {
  const values = [
    {title:'Compliance', text:'Obey and comply with the laws and regulations of the Land.', icon:<GrCertificate/>},
    {title:'Growth Oriented', text:'Focus on Growth for our clients in the case of Consulting services.', icon:<AiOutlineAreaChart/>},
    {title:'Integrity', text:'Maintain Highest Levels of Integrity, Independence and Trust.', icon:<FaRegHandshake/>},
    {title:'Ethical Values', text:'Focus on Ethical and Moral Values and Professionalism than on financial rewards.', icon:<IoGlassesOutline/>},
    {title:'Focus on Objectives', text:'Understanding the needs and scope of the assignments.', icon:<FaTasks/>},
    {title:'People First', text:'Care for our Employees and Articled Assistants and enable Continuous Professional Learning.', icon:<RiHandHeartLine/>},
  ]
  return(
    <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">Core values</label>
            <hr className='line'/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {values.map((item, index)=>
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
          <FaFlagCheckered size={80} style={{fill:'var(--blue)'}}/>
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

  const missions = [
    'To provide exemplary financial servics to our clients in a timely manner',
    'To constantly aim for higher specialisation to meet our stakeholders requirements',
    'To promote a healthy working environment ensuring a trustworthy relationship with out stakehilders'
  ]
  return(
    <div className='bannerBG'>
      <div className='blueOverlay' style={{padding:'50px 0px'}}>
        <div className='container'>
          <div className='contentTitle' style={{alignItems:'start'}}>
            <label className="AboutBannerTitle">Our Mission</label>
            <hr className='line'/>
          </div>
          <ul className='missionsList'>
            {missions.map((item, index)=>
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