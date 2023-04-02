import React from 'react'
import deco from '../images/deco.png';
import terms from '../images/terms.png';
import '../components/styles/Welcome.css';

const Welcome = () => {
  return (
    <div className='App'>
      <div class="page-content">
        <div class="left-column">
          <div class="title">BlankCanva</div>
          <div class="slogan">
            whether you need a place to brainstorm,<br />
            sketch out ideas or create art,  
            <span class="blankcanva"> BlankCanva.</span>
          </div>
          <button className='buton-welcomepage'>
            Experience it for<br /> free
          </button>
          <div className='aboutUsContent'>
            <div className='aboutUsTitle'>
              What is <span class="blankcanva">BlankCanva</span> ?
            </div>
            <div className='aboutUsContent'>
            Welcome to our website! Our web app is designed to inspire and empower you to unleash your artistic talents and create beautiful works of art. <br /> <div className='separator'>*</div>
We understand the importance of having a platform that is user-friendly and intuitive, which is why we have put in countless hours of research and development to create an app that is both easy to use and fun. <br /> <div className='separator'>*</div>
We are thrilled to share our passion for web design with you, and we hope that our app will help you explore and express your creativity in new and exciting ways.  One of the unique features of our web app is the ability to easily share your creations with others. Whether it's sharing with friends, family, or a wider audience, our platform allows you to showcase your work and receive feedback from others.<br /> <div className='separator'>*</div>
Thank you for choosing our platform, and we can't wait to see the amazing things you will create! <br />
            </div>
          </div>
        </div>
        <div class="right-column">
          <img class="decoration" src={deco} alt=""/>
          <img class="terms" src={terms} alt=""/>
        </div>
      </div>

    </div>
  )
}

export default Welcome