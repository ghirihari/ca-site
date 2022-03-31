import React, {useRef, useState} from 'react'
import './contact.css'
import {ImLocation2} from 'react-icons/im'
import {GiRotaryPhone} from 'react-icons/gi'
import {IoIosMail} from 'react-icons/io'
import { address, mailID, phoneNumber } from '../../../consts'


const Contact = () => {
    const form = useRef();
    const [button, setButton] = useState({name:'Submit', class:'btn-warning'})

    const validate = () => {

    }

    const sendMail = (e) => {
        e.preventDefault();
        validate(form.current.name.value,form.current.email.value,form.current.message.value)
        setButton({name:'Submitting', class:'btn-warning'})

        fetch(`https://emailing-api.herokuapp.com/send?name=${form.current.name.value}&email=${form.current.email.value}&message=${form.current.message.value}`)
        .then(response => {
            if(response.status===200)
                setButton({name:'Submitted', class:'btn-success'})
            else
                setButton({name:'Failed, Try again later', class:'btn-danger'})
            
        })
        .catch(error => {
            setButton({name:'Failed, Try again later', class:'btn-danger'})
        });
    }
    

    return (
        <div className="expContainer" style={{margin:'30px 0px'}}>
            <div className='contentTitle'>
                <label className="subtitle">Get in touch</label>
                <hr className='line'/>
            </div>
            <div className='bannerBG'>
                <div className='blueOverlay'>
                    <div className='col d-lg-none' style={{display:'flex', alignItems:'center'}}>
                        <div className="contactCard">
                            <h1>J Vishnu & Associates</h1>
                            <div>
                                <ImLocation2 size={32} style={{minWidth:"32px"}}/>
                                <div>
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        href={address.link}
                                        className='locationLink'>
                                        {address.text}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <IoIosMail size={32}/> 
                                <label>{mailID}</label>
                            </div>
                            <div>
                                <GiRotaryPhone size={32}/>
                                <label>{phoneNumber[0]} / {phoneNumber[1]}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='expContainer' style={{margin:'20px 0px'}}>
                    <div className='row'>
                        <div className='col d-none d-lg-block' style={{display:'flex', alignItems:'center'}}>
                            <div className="contactCard">
                                <h2>J Vishnu & Associates</h2>
                                <div>
                                    <ImLocation2 size={32}/>
                                    <div>
                                        <a
                                            target="_blank" rel="noopener noreferrer"
                                            href={address.link}
                                            className='locationLink'>
                                            {address.text}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <IoIosMail size={32}/> 
                                    <label>{mailID}</label>
                                </div>
                                <div>
                                    <GiRotaryPhone size={32}/>
                                    <label>{phoneNumber[0]} / {phoneNumber[1]}</label>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <h4>Leave us a message</h4>
                            <form className="contactForm" ref={form} onSubmit={sendMail}>
                                <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                <input type="email" name="email" className="form-control" placeholder="Email" required/>
                                <textarea name="message" className="form-control" placeholder="Enter your message" required/>
                                <button 
                                    type="submit" 
                                    className={'btn form-control '+button.class}
                                    disabled={button.class==="btn-success"}
                                >
                                    {button.name}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact