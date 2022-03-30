import React from 'react'
import Experience from '../../common/Experience'
import { services } from '../../../consts'

const Services = () => {
  return (
    <div className='container'>
      <Experience count={6} title={services.title}/>
    </div>
  )
}

export default Services