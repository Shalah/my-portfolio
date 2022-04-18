import './contact.css'
import Email from '../../img/email-logo.png'
import Github from '../../img/github-logo.png'
import LinkedIn from '../../img/linkedin-logo.png'
import Resume from '../../img/resume-logo.png'
import { useContext, useRef, useState } from 'react'
import emailjs from "emailjs-com";
import { ThemeContext } from '../../context'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs.sendForm('service_eb14gke', 'template_iituxcl', formRef.current, 'sk56TEFwIDoyyqCGV')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
        
    

  return (
    <div className='c'> 
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> 
                    Contact Me
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <a href='https://docs.google.com/document/d/1NZ13Rein7wN_0Judk4YkxoJc_SiBlw1n/edit?usp=sharing&ouid=114442831849016114024&rtpof=true&sd=true'
                        target= '_blank'
                        rel="noreferrer">
                            <img 
                            src={Resume} 
                            alt="" 
                            className="c-icon" 
                        />
                        <span className="c-info-item-name">Resume</span>  
                        </a>
                    </div>

                    <div className="c-info-item">
                        <a href='https://github.com/Shalah' 
                        target= '_blank'
                        rel="noreferrer">
                            <img 
                            src={Github} 
                            alt="" 
                            className="c-icon" 
                        />
                        Shalah
                        </a>
                        
                    </div>
                    <div className="c-info-item">
                        <a href='https://www.linkedin.com/in/rim-zoungrana/' 
                        target= '_blank'
                        rel="noreferrer">
                            <img 
                            src={LinkedIn} 
                            alt="" 
                            className="c-icon" 
                        />
                        Rim Zoungrana
                        </a>
                    </div>
                    <div className="c-info-item">
                        <a href='zoungranarim@gmail.com' 
                        target= '_blank'
                        rel="noreferrer">
                           <img 
                            src={Email} 
                            alt="" 
                            className="c-icon" 
                            />
                            zoungranarim@gmail.com 
                        </a>  
                    </div>
                </div>
            </div>

            <div className="c-right">
                <p className="c-desc">
                    <b> What's your next project? </b> Get in touch and let's collaborate to make it happen
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message' />
                    <button> Submit </button>
                    {done && 'Thank you ...'}
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact