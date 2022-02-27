import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import {SiLinkedin, SiTwitter} from 'react-icons/si'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();
  const items = [
    {text:'Home', link:'/'},
    {text:'About us', link:'/about'},
    {text:'Services', link:'/services'},
    {text:'FAQ', link:'/faq'},
    {text:'Careers', link:'/careers'},
    {text:'Blog', link:'/blog'},
    {text:'Contact Us', link:'/contact'}
  ];

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
  return (
    <div className='footer'>
      <div className='container footerLinks'>
        <div className='links m-3 d-none d-md-block'>
          {items.map((item, index)=>{
            const classes = location.pathname===item.link ? "current" : "";    
            return(<Link key={index} className={"me-3 footerLink "+classes} to={item.link}>{item.text}</Link>)
          })}
        </div>
        <div className='m-3'>
          {links.map((item, index)=><Link key={index} className="me-3 iconButton" to={item.link}>{item.icon}</Link>)}
        </div>

        <label className='footerTitle m-3'>JVishnuCA.com</label>
        <label className=''>23-4 Sambandham road east, RS Puram, Coimbatore, 641002</label>
      </div>
    </div>
  )
}

export default Footer