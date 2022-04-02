import React from 'react'
import Experience from '../../common/Experience'

const Services = ({servicesData}) => {
  return (
    <div className='container'>
      <Experience count={6} title={servicesData.subtitle} services={servicesData}/>
    </div>
  )
}

export default Services