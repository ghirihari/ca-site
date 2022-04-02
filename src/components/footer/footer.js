import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import {SiLinkedin, SiTwitter} from 'react-icons/si'
import { useLocation } from 'react-router-dom'

const Footer = ({navigation, links}) => {
  const location = useLocation();
  console.log(links)
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
  return (
    <div className='footer'>
      <div className='container footerLinks'>
        <div className='links m-3 d-none d-md-block'>
          {navigation.map((item, index)=>{
            const classes = location.pathname===item.link ? "current" : "";    
            return(<Link key={index} className={"me-3 footerLink "+classes} to={item.link}>{item.text}</Link>)
          })}
        </div>
        <div className='m-3'>
          {linkData.map((item, index)=>
            <a key={index} className="me-3 iconButton" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>)}
        </div>

        <label className='footerTitle m-3'>JVishnuCA.in</label>
        <label className=''>{links.address.text}</label>
      </div>
    </div>
  )
}

export default Footer