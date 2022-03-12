import React from 'react'
import './contact.css'
import {ImLocation2} from 'react-icons/im'
import {GiRotaryPhone} from 'react-icons/gi'
import {IoIosMail} from 'react-icons/io'

const Contact = () => {
  return (
    <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">Get in touch</label>
            <hr className='line'/>
        </div>
        <div className='container'>
            <div className='expContainer'>
                <div className='row'>
                    <div className='col' style={{display:'flex', alignItems:'center'}}>
                        <div className="contactCard">
                            <h2>J Vishnu & Associates</h2>
                            <div>
                                <ImLocation2 size={32}/>
                                <div>
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        href='https://www.google.com/maps/place/A+Jayachandran+%26+Associates.+CHARTERED+ACCOUNTANTS/@11.0085815,76.9515132,17z/data=!4m5!3m4!1s0x3ba8598a9559b763:0x5edb60c1ee0872d!8m2!3d11.0085762!4d76.9537019'
                                        className='locationLink'>
                                            23-4 Sambandam road east, RS Puram, Coimbatore-641002
                                    </a>
                                </div>
                            </div>
                            <div>
                                <IoIosMail size={32}/> 
                                <label>cajvishnu@gmail.com</label>
                            </div>
                            <div>
                                <GiRotaryPhone size={32}/>
                                <label>0422-4952586 / 0422-2474786</label>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h4>Leave us a message</h4>
                        <div className="contactForm">
                            <input type="email" class="form-control" placeholder="Name"/>
                            <input type="email" class="form-control" placeholder="Email"/>
                            <textarea type="email" class="form-control" placeholder="Enter your message"/>
                            <button className='btn btn-warning form-control'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact