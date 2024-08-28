import React, {useEffect}from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Coffee from "../../img/coffee-shop-logo.png";
import Travel from "../../img/travel.png";
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'

// AOS
import AOS from 'aos';
import "aos/dist/aos.css";

const Works = () => {

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  // AOS
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);
  

  return (
    <div className='works' data-aos='zoom-out' data-aos-delay='200'>
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
        <span>Brands & Clients</span>
        <spane>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, atque corrupti.
          <br /> corrupti, veniam facere voluptatibus error fugit.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, atque corrupti.
          <br />
          corrupti, veniam facere voluptatibus error fugit.
        </spane>
        <Link spy={true} to='Contact' smooth={true}>
          <button className="button s-button">Hire Me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}

      <div className="w-right">
        <motion.div
          initial={{ rotate: 50 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}

          className="w-mainCircle">
            <a href="https://www.upwork.com/freelancers/~01187370dc8ddfc828" target='_blank'>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          </a>
          <a href="https://www.fiverr.com/sudipto_123?public_mode=true" target='_blank'>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
          </a>
          <a href="https://amazoncompany.netlify.app/" target='_blank'>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          </a>
          <a href="https://coffeetoday.netlify.app/" target='_blank'>
          <div className="w-secCircle">
            <img src={Coffee} alt=""/>
          </div>
          </a>
          <a href="https://triptoday.netlify.app/" target='_blank'>
          <div className="w-secCircle">
            <img src={Travel} alt="" />
          </div>
          </a>
        </motion.div>

        {/* background circles*/}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works