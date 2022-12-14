import headerImage from "../../assets/alxlogo.jpg"
import data from "./data"
import AOS from 'aos'
import 'aos/dist/aos.css'

import "./header.css"
import { useEffect } from 'react';

const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  return (
  
    <header id="header">
      <div className="container header__container">
          <div className="header__profile" data-aos ='zoom-in'>
            <img src={headerImage} alt="Header Portraits" />
          </div>
          
          <h3 data-aos="fade-up"> Mfonobong Udo </h3>
          
          <p data-aos="fade-up">
          My websites are designed to work 
          seamlessly on all devices. 
          I use the most advanced techniques 
          in web design—including responsive,
           mobile optimization, HTML5 and CSS3, 
           and several different CMS models to best
           suit the needs of my clients.
          From brochure websites to e-commerce solutions, 
          I provide a superior,
           customized user experience. 
          </p>

          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">Let's Talk</a>
            <a href="#portfolio"  className="btn light">My Work</a>
          </div>
          
          <div className="header__socials">
            {
            data.map(item => <a key ={item.id} href = {item.link} target ="_blank" 
            rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
      </div>
    </header>
  )
}

export default Header