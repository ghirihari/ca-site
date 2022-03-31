import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import {SiLinkedin, SiTwitter} from 'react-icons/si'
import { useLocation } from 'react-router-dom'
import { address, linkedin, navigation, twitter } from '../../consts';

const Footer = () => {
  const location = useLocation();
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
          {links.map((item, index)=>
            <a key={index} className="me-3 iconButton" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>)}
        </div>

        <label className='footerTitle m-3'>JVishnuCA.in</label>
        <label className=''>{address.text}</label>
      </div>
    </div>
  )
}

export default Footer