import React from 'react'
// Images
import Image1 from '../../../assets/tax-min.jpg'
import Image2 from '../../../assets/audit-min.jpg'
import Image3 from '../../../assets/business-min.jpg'
import Image4 from '../../../assets/support.jpg'
import Image5 from '../../../assets/audit2-min.jpg'
import Image6 from '../../../assets/law.jpg'

const OurExperience = () => {
  const exp = [
      {image:Image1,captionTitle:'Direct and indirect taxation',captionText:'Our experienced Partners provide sustainable Advisory Services'},
      {image:Image2,captionTitle:'Audit & Assurance',captionText:'Our team of qualified and dynamic professionals provide quality'},
      {image:Image3,captionTitle:'Startup and Business advisory services',captionText:'Our experienced Partners provide sustainable Advisory Services'},
      {image:Image4,captionTitle:'Accounting and support services',captionText:'Our experienced Partners provide sustainable Advisory Services'},
      {image:Image5,captionTitle:'Internal Audit',captionText:'Our experienced Partners provide sustainable Advisory Services'},
      {image:Image6,captionTitle:'Corporate Law compliance',captionText:'Our experienced Partners provide sustainable Advisory Services'},

    ]

  return(
      <div className="expContainer">
      <div className='contentTitle'>
          <label className="subtitle">Our services</label>
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

const Services = () => {
  return (
    <div className='container'>
      <OurExperience/>
    </div>
  )
}

export default Services