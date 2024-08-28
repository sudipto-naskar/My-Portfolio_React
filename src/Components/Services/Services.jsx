import React, { useEffect } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import MyResume from "./Resume.pdf"
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion, spring } from 'framer-motion';

// AOS
import AOS from 'aos';
import "aos/dist/aos.css";

const Services = () => {

  const transition = {duration : 1, type : spring}

  const theme  = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="services" id='Services'data-aos='zoom-out' data-aos-delay='200'>

      {/* left side */}

      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <spane>I specialize in front-end development using HTML, CSS, JavaScript, and React to create responsive, <br/> dynamic web applications. On the back-end, I use Node.js and Express to develop scalable server-side <br/> applications and RESTful APIs. Additionally, I manage databases with MongoDB, optimizing performance <br/> and ensuring seamless integration. I provide full-stack development, technical consultation, and ongoing support.</spane>
        <a href={MyResume} target='_blank' rel="noopener noreferrer">
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur bluring2" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}

      <div className="cards">
        <motion.div 
        initial={{left: '22rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        
        style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </motion.div>

        {/*second card*/}

        <motion.div 
        initial={{ left: "-11rem", top: "15rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}

        style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>

        {/*third card*/}

        <motion.div 
        initial={{ top: "19rem", left: "22rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        
        style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={"lorem loremlorem lorem lorem lorem lorem lorem lorem"}
          />
        </motion.div>

        <div className="blur bluring1" style={{background: "var(--purple)"}}></div>

      </div>
    </div>
  )
}

export default Services