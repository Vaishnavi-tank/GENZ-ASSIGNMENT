import React, { useEffect } from 'react'
import './resultsection.css'
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resultsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <> 
    
      <div className='banner5 md:w-full w-[725px]'>
        <h1 className='text-4xl text-center p-5 text-yellow-800 font-bold'>What GenZ Happy Clients Say</h1>
        <div className='  text-white md:w-[700px] md:text-right m-auto  md:ml-[400px] md:mt-[100px] backdrop-blur-md'>
          <Slider {...settings}>
            <div className='reviews'>
              <p>❝ Got to know them through my colleague, and I’m really thankful to him for suggesting this platform and the support team helps you out even if you have a small query. It’s the highlight of the company. ❞</p>
              <h1>Mary Barnett - Australia</h1>
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
            <div className='reviews'>
              <p>❝
                The job being done with latest technologies also Received my work within given time period, and the work was also upto the mark.❞</p>
              <h1>Mukesh Swami - India</h1>
                <h1>⭐⭐⭐⭐⭐</h1>
            </div>
            <div className='reviews'>
              <p>❝ Loved the services and accuracy of work with zero delays because the work is deliver on-time and according to my requirements. ❞</p>
              <h1>Andrea Henry - UK</h1>
              <h1>⭐⭐⭐⭐⭐</h1>
            </div >
          </Slider>
        </div>
      </div>
     
      
    </>
  )
}

export default Resultsection
