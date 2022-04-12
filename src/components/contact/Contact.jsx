import './contact.css'
import Email from '../../img/email-logo.png'
import Github from '../../img/github-logo.png'
import LinkedIn from '../../img/linkedin-logo.png'
import { useRef } from 'react'

const Contact = () => {

    const formRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> 
                    Discuss my Project 
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                            src={Email} 
                            alt="" 
                            className="c-icon" 
                        />
                        email.email.com
                    </div>
                    <div className="c-info-item">
                        <img 
                            src={Github} 
                            alt="" 
                            className="c-icon" 
                        />
                        https://github.com/Shalah
                    </div>
                    <div className="c-info-item">
                        <img 
                            src={LinkedIn} 
                            alt="" 
                            className="c-icon" 
                        />
                        https://www.linkedin.com/in/rim-zoungrana/
                    </div>
                </div>
            </div>

            <div className="c-right">
                <p className="c-desc">
                    <b> What's your story? </b> Get in touch. Always ready for freelancing if the right project comes along
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' name='user_name' />
                    <input type='text' placeholder='Subject' name='user_subject' />
                    <input type='text' placeholder='Email' name='user_email' />
                    <textarea rows='5' placeholder='Message' name='message' />
                    <button> Submit </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact