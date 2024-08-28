import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
// import Pic from '../../img/My Pic.png';
import thumbsup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

// AOS ANIMATION

import AOS from 'aos';
import "aos/dist/aos.css";


const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme  = useContext(themeContext);

    const darkMode = theme.state.darkMode;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="intro" data-aos='zoom-in' data-aos-delay="300">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                <span>Sudipto Naskar</span>
                <span>Frontend Developer with high level of experience in web designing and development, producing the Quality work</span>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className='button i-button'>Hire Me</button>
            </Link>
            <div className='i-icons'>
                <a href='https://github.com/sudipto-naskar' target='_blank' rel="noopener noreferrer" title='Follow Me on Github'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/sudipto-naskar/' target='_blank' rel="noopener noreferrer" title='Follow Me on Linkedin'>
                <img src={Linkedin} alt="" />
                </a>
                <a href='https://www.instagram.com/ig_itz_dexter/' target='_blank' rel="noopener noreferrer" title='Follow Me on Instagram'>
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" /> 
            <img src={Vector2} alt="" /> 
            <img src="/" alt="" /> 
            <motion.img 
            initial={{left: '-46%'}}
            whileInView={{left: '-25%'}}
            transition={transition}
            src={glassesimoji}
            alt="" ></motion.img>
            
            <motion.div 
            initial={{top: '-4%', left: '80%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            
            style={{top: '-4%',left: '68%'}}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div 
            initial={{left: '12rem', top: '18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            
            style={{top:'18rem',left:'0rem'}}
            className='floating-div'
            >
                <FloatingDiv image={thumbsup} txt1='Best Design' txt2='Award'/>
            </motion.div>

            {/* blur divs*/}

            <div className="blur" style={{background: "rgb (238 210 255)" }}></div>
            <div className="blur" style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
                }}></div>
        </div> 
    </div>
  )
}

export default Intro