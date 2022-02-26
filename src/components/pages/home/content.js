import React from 'react'
import './content.css'
// Images
import Image1 from '../../../assets/exp1.jpg'
import Image2 from '../../../assets/exp2.jpg'
import Image3 from '../../../assets/exp3.jpg'
// Icons
import {FaChartLine} from 'react-icons/fa';
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {RiGovernmentLine, RiLightbulbFlashLine, RiTruckLine, RiHomeGearLine} from 'react-icons/ri'

const OurExperience = () => {
    const exp = [
        {image:Image1,captionTitle:'Direct and indirect taxation',captionText:'Our experienced Partners provide sustainable Advisory Services'},
        {image:Image2,captionTitle:'Audit & Assurance',captionText:'Our integrated team of senior qualified and dynamic professionals provide quality'},
        {image:Image3,captionTitle:'Business advisory services',captionText:'Our experienced Partners provide sustainable Advisory Services'}
    ]

    return(
        <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">Our experience</label>
            <hr className='line'/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {exp.map((item,index)=>
                <div className="col" key={index}>
                    <div className="card imageCard shadow-sm imageTile">
                        <img src={item.image} className="image" alt={item.captionTitle}/>
                        <div className='innerCaption'>
                            <label style={{fontSize:'18px'}}>{item.captionText}</label>
                        </div>
                        <div className='overlayTitle'>
                            <h3>{item.captionTitle}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}

const Sectors = () => {
    const sectorData = [
        {text:'Manufacturing Textile and Infotech', icon:<RiHomeGearLine size='75px'/>},
        {text:'Finance Banking Retail and Trading', icon:<FaChartLine size='75px'/>},
        {text:'Jewellery Food Processing FMCG and Healthcare', icon:<MdOutlineHealthAndSafety size='75px'/>},
        {text:'NGO/NPO Charity and Education', icon:<RiGovernmentLine size='75px'/>},
        {text:'Energy Capital Goods Chemical and Fertiliser', icon:<RiLightbulbFlashLine size='75px'/>},
        {text:'Automobile Machinery and Construction', icon:<RiTruckLine size='75px'/>},
    ]
    return(
        <div className="expContainer">
            <div className='contentTitle'>
                <label className="subtitle">Experience in sectors</label>
                <hr className='line'/>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                {sectorData.map((item, index)=>
                    <div className="col" key={index}>
                        <div className="card sectorCard">
                            <div className='cardIconContainer'>
                                <hr className='line'/>
                                <div className="cardIcon">{item.icon}</div>
                                <hr className='line'/>
                            </div>
                            <h5 className="cardText">{item.text}</h5>
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
            <p className="contentText">
                J VISHNU & ASSOCIATES is a firm of Chartered Accountants in India, headquartered in Coimbatore. The firm was founded by J. Vishnu Sanker, providing services in  Audit, Assurance, Direct Taxation, GST and consultancy services.
            </p>    
        </div>

    )
}
const Content = () => {
    return (
        <>
            {/* <!-- Content --> */}
            <div className="container">
                {/* <!-- Intro Content --> */}
                <Intro/>
                {/* <!-- Our Expirience --> */}
                <OurExperience/>
                {/* <!-- Expirience in sectors --> */}
                <Sectors/>
            </div>
        </>
    )
}

export default Content