import React from 'react'
import Image1 from '../../../assets/exp1.jpg'
import Image2 from '../../../assets/exp2.jpg'
import Image3 from '../../../assets/exp3.jpg'

const OurExpirience = () => {
    const exp = [
        {image:Image1,captionTitle:'Direct and indirect taxation',captionText:'Our experienced Partners provide sustainable Advisory Services'},
        {image:Image2,captionTitle:'Audit & Assurance',captionText:'Our integrated team of senior qualified and dynamic professionals provide quality'},
        {image:Image3,captionTitle:'Business advisory services',captionText:'Our experienced Partners provide sustainable Advisory Services'}
    ]

    return(
        <div class="expContainer">
        <label class="subtitle">Our expirience</label>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {exp.map(item=>
                <div class="col">
                    <div class="card imageCard shadow-sm imageTile">
                        <img src={item.image} class="image" alt={item.captionTitle}/>
                        <div class="overlay">
                            <div class="overlayTitle">
                                <h4>{item.captionTitle}</h4>
                            </div>
                            <label class="overlayCaption">{item.captionText}</label>
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
        {text:'Manufacturing Textile and Infotech'},
        {text:'Finance Banking Retail and Trading'},
        {text:'Jewellery Food Processing FMCG and Healthcare'},
        {text:'NGO/NPO Charity and Education'},
        {text:'Energy Capital Goods Chemical and Fertiliser'},
        {text:'Automobile Machinery and Construction'},
    ]
    return(
        <div class="expContainer">
            <label class="subtitle">Expirience in sectors</label>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                {sectorData.map(item=>
                    <div class="col">
                        <div class="card shadow-sm">{item.text}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <>
            {/* <!-- Content --> */}
            <div class="container">
                {/* <!-- Intro Content --> */}
                <div class="contentContainer">
                    <p class="content">
                        J VISHNU & ASSOCIATES is a firm of Chartered Accountants in India, headquartered in Coimbatore. The firm was founded by J. Vishnu Sanker, providing services in  Audit, Assurance, Direct Taxation, GST and consultancy services.
                    </p>    
                </div>
                {/* <!-- Our Expirience --> */}
                <OurExpirience/>
                {/* <!-- Expirience in sectors --> */}
                <Sectors/>
            </div>
        </>
    )
}

export default Content