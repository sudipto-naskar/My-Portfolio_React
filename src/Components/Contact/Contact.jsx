import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import cimg from '../../img/cimg.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IoIosSend } from "react-icons/io";

// AOS FOR ANIMATION
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cbht22e', 'template_gwxivlf', form.current, 'SX4Uwd3cqoqsL2iFw')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // Reset the form after successful submission
          form.current.reset();
          // Reload the page after a short delay (optional)
          setTimeout(() => {
            window.location.reload();
          }, 1500); // Reload after 1.5 seconds (1500 milliseconds)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // AOS 

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="contact-me" id="Contact" data-aos='zoom-out' data-aos-delay="200">
      <div className="container">
        <div className="item">
          <div className="contact">
            <div className="first-text">Let's get in touch</div>
            <div className="c-us">
              <img src={cimg} alt="" />
            </div>
            <div className="social-links">
              <span className="secnd-text">Connect With Me:</span>
              <div className="social-media">
                <a href="https://github.com/sudipto-naskar" target="_blank" rel="noopener noreferrer" title="Follow Me on Github">
                  <Github color="var(--orange)" size="2.4rem" />
                </a>
                <a href="https://www.linkedin.com/in/sudipto-naskar/" target="_blank" rel="noopener noreferrer" title="Follow Me on Linkedin">
                  <Linkedin color="var(--orange)" size="2.4rem" />
                </a>
                <a href="https://www.instagram.com/ig_itz_dexter/" target="_blank" rel="noopener noreferrer" title="Follow Me on Instagram">
                  <Insta color="var(--orange)" size="2.4rem" />
                </a>
              </div>
            </div>
          </div>
          <div className="submit-form">
            <h4 className="third-text text">Contact Me</h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" className="user" name="user_name" required />
                <label htmlFor="">Name</label>
              </div>
              <div className="input-box">
                <input type="text" className="user" name="user_email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <input type="tel" className="user" required/>
                <label htmlFor="">Phone</label>
              </div>
              <div className="input-box">
                <textarea name="message" className="user" cols="30" rows="6" required></textarea>
                <label htmlFor="">Message</label>
              </div>
              {/* <div>
              <input type="submit" className="btn" value="Send"/>
              <IoIosSend />
              </div> */}
              <button className='btn'>
                Send&nbsp;
                <IoIosSend />
              </button>
              {done && (
                <span>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '1.12rem' }} /> Thanks for contacting me!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
