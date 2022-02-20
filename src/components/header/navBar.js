import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    const items = [
        {text:'Home', link:'/'},
        {text:'About us', link:'about'},
        {text:'Services', link:'/services'},
        {text:'FAQ', link:'/faq'},
        {text:'Careers', link:'/careers'},
        {text:'Blog', link:'/'}
    ];

    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">J Vishnu & Associates</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <ul id="headerItems" className="navbar-nav mb-4 mb-sm-0">
                        {
                            items.map((item, index)=>
                                <li className="nav-item me-3" key={index}>      
                                    <Link to={item.link}>{item.text}</Link>                  
                                    {/* <a className="nav-link" href={item.link}>{item.text}</a> */}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="collapse navbar-collapse" style={{flexGrow: 0}}>
                    <button className="btn btn-dark navButton">Contact us</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar