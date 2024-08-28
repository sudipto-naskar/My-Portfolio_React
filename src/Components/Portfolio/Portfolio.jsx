import React, {useEffect} from 'react'
import './Portfolio.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './swiper.css'

import Weatherapp from "../../img/weather.jpeg";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import Dex from "../../img/Dex.jpg"

import { themeContext } from '../../Context';
import { useContext } from "react";

// AOS
import AOS from 'aos';
import "aos/dist/aos.css";

const Portfolio = () => {

    const theme = useContext(themeContext);

    const darkMode = theme.state.darkMode;

      // AOS
      useEffect(()=> {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="portfolio" id='Portfolio' data-aos='zoom-out' data-aos-delay='100'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 2500 }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="">
                    <img src = {Weatherapp} alt='Weather-App'/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                     <a href="">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </a>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default Portfolio