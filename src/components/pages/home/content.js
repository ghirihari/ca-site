import React from 'react'
import './content.css'
import Experience from '../../common/Experience'
// Const
import {home} from '../../../consts'

const Sectors = () => {
    return(
        <div className="expContainer">
            <div className='contentTitle'>
                <label className="subtitle">{home.sectorData.title}</label>
                <hr className='line'/>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                {home.sectorData.data.map((item, index)=>
                    <div className="col" key={index}>
                        <div className="card sectorCard">
                            <div className='cardIconContainer'>
                                {/* <hr className='line'/> */}
                                <div className="cardImage">
                                    <img src={item.image} alt={item.text}/>
                                </div>
                                {/* <hr className='line'/> */}
                            </div>
                            <h4 className="cardText">{item.text}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const Intro = () => {
    return(
        <div className="contentContainer">
            <p className="contentText">{home.introContent}</p>    
        </div>

    )
}
const Content = () => {
    return (
        <div className="container">
            <Intro/>
            <Experience count={3} title={'Our experience'}/>
            <Sectors/>
        </div>
    )
}

export default Content