import React from 'react'
import './intro.css'
const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'> 
        <div className="i-left-wrapper">

          <h2 className='i-intro'> Hello, my name is </h2>
          <h1 className='i-name'> Rim Zoungrana </h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Web developer</div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Project Manager</div>
              <div className="i-title-item"> Back End </div>
              <div className="i-title-item"> Front End</div>
            </div>
          </div>

          <br></br>

          <div className="i-description">
            I'm an information systems management professional <br/>
            With a bachelors in biomedical engineering technology and an interest in <br/>
            I am familiar with HTML, CSS, JavaScript, Node JS and MySql.  <br/>
          </div>

        </div>
      </div>

      <div className='i-right'> Right </div>
    </div>
  )
}

export default Intro