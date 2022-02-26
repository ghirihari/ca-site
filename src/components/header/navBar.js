import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
import { useLocation } from 'react-router-dom'
import Logo from '../../assets/JVSLogo.png'

const NavBar = () => {
    const items = [
        {text:'Home', link:'/'},
        {text:'About us', link:'/about'},
        {text:'Services', link:'/services'},
        {text:'FAQ', link:'/faq'},
        {text:'Careers', link:'/careers'},
        {text:'Blog', link:'/blog'},
        {text:'Contact Us', link:'/contact'}
    ];

    const Menu = 
    <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Rounded" transform="translate(-885.000000, -3438.000000)">
                <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                    <g id="-Round-/-Navigation-/-menu" transform="translate(782.000000, 54.000000)">
                        <g transform="translate(0.000000, 0.000000)">
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M4,18 L20,18 C20.55,18 21,17.55 21,17 C21,16.45 20.55,16 20,16 L4,16 C3.45,16 3,16.45 3,17 C3,17.55 3.45,18 4,18 Z M4,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L4,11 C3.45,11 3,11.45 3,12 C3,12.55 3.45,13 4,13 Z M3,7 C3,7.55 3.45,8 4,8 L20,8 C20.55,8 21,7.55 21,7 C21,6.45 20.55,6 20,6 L4,6 C3.45,6 3,6.45 3,7 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>

    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-md">
            <div className='navContainer'>
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" style={{maxWidth:'100%'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        {Menu}
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <ul id="headerItems" className="navbar-nav mb-4 mb-sm-0">
                        {
                            items.map((item, index)=>{
                                const classes = location.pathname===item.link ? "nav-item nav-item-current" : "nav-item";    
                                return(
                                    <Link className={classes} key={index} to={item.link}>
                                        {item.text}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar