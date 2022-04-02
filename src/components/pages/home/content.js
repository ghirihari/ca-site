import React from 'react'
import './content.css'
import Experience from '../../common/Experience'
// Images
import Service1 from '../../../assets/service1.jpg'
import Service2 from '../../../assets/service2.jpg'
import Service3 from '../../../assets/service3.jpg'
import Service4 from '../../../assets/service4.jpg'
import Service5 from '../../../assets/service5.jpg'
import Service6 from '../../../assets/service6.jpg'


const Sectors = ({title,sectorData}) => {
    const data = [
        {text:sectorData.data[0], image:Service1},
        {text:sectorData.data[1], image:Service2},
        {text:sectorData.data[2], image:Service3},
        {text:sectorData.data[3], image:Service4},
        {text:sectorData.data[4], image:Service5},
        {text:sectorData.data[5], image:Service6},
    ]

    return(
        <div className="expContainer">
            <div className='contentTitle'>
                <label className="subtitle">{title}</label>
                <hr className='line'/>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                {data.map((item, index)=>
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

const Intro = ({introContent}) => {
    return(
        <div className="contentContainer">
            <p className="contentText">{introContent}</p>    
        </div>

    )
}
const Content = ({introContent,sectorData,subtitles,services}) => {
    return (
        <div className="container">
            <Intro introContent={introContent}/>
            <Experience count={3} title={subtitles[0]} services={services}/>
            <Sectors title={subtitles[1]} sectorData={sectorData}/>
        </div>
    )
}

export default Content