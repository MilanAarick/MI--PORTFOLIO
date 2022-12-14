import AboutPortrait from "../../assets/alx.jpg"
import CV from "../../assets/cv.pdf"
import {HiArrowDownTray} from "react-icons/hi2"
import Card from "../../components/Card"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./about.css"
import data from "./data"
import { useEffect } from 'react';

const About = () => {

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <section id="about" >
      <div className="container about__container" data-aos="fade-in">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutPortrait} alt="About me Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>

          <div className="about__cards">
            {
              data.map( item => 
              <Card key={item.id} className = "about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>)
            }
          </div>

          <div>
            <p>
            Why tell a story with words when you can tell it with
             plenty of images and compelling behind-the-scenes footage of your production process? 
             That’s exactly what bakery Milk Bar does as soon as you land on its colorful About Us page. 
              However, this doesn’t mean it completely ignores the fundamental
              components of an About Us page that makes it effective. 
              Note that Milk Bar also includes:
            </p>
            <p>
            Sometimes simple works best.Like Wild One—a brand dedicated to 
            making pet products—a clear and straightforward 
            approach to what you do, who you do it for, 
            and what problem you solve can do the trick. 
            </p>
            <a href={CV} download className="btn primary">Download CV <HiArrowDownTray/></a>
          </div>
        </div>


      </div>
      
      </section>
  )
}

export default About
