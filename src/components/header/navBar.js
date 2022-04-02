import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
import { useLocation } from 'react-router-dom'
import Logo from '../../assets/JVSLogo.png'

const NavBar = ({navigation}) => {
    const location = useLocation();
    const animate = () => {
        const icon = document.getElementById('hamburger');
        if(icon.className === "hamburger")
            icon.classList.add('xicon');
        else
            icon.classList.remove('xicon');    
    }
    return (
        <nav className="navbar navbar-expand-md">
            <div className='navContainer'>
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" style={{maxWidth:'100%'}}/>
                </a>
                <button onClick={()=>animate()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        {/* {Menu} */}
                        <div id="hamburger" className="hamburger">
                            <div></div>
                        </div>
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <ul id="headerItems" className="navbar-nav mb-4 mb-sm-0">
                        {
                            navigation.map((item, index)=>{
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