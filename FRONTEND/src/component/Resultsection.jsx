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
    
      {/* <div className='banner5 md:w-full w-[425px]'>
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
      */}
     <div className=" w-full max-w-[750px] mx-auto px-4 py-10">
  <h1 className="text-3xl md:text-4xl text-center text-yellow-800 font-bold mb-8">
    What GenZ Happy Clients Say
  </h1>

  <div className="backdrop-blur-md bg-black/40 rounded-xl p-4">
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={4000}
      arrows={false}
    >
      {/* Slide 1 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl md:text-xl leading-relaxed mb-4 italic">
          ❝ Got to know them through my colleague, and I’m really thankful to him for suggesting this platform. The support team helps you out even with small queries. It’s the highlight of the company. ❞
        </p>
        <h2 className="font-semibold text-2xl">Mary Barnett - Australia</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>

      {/* Slide 2 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl md:text-xl leading-relaxed mb-4 italic">
          ❝ The job was done using the latest technologies. I received my work within the given time period, and it was up to the mark. ❞
        </p>
        <h2 className="font-semibold text-2xl">Mukesh Swami - India</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
 
      {/* Slide 3 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ Loved the services and accuracy of the work with zero delays. Everything was delivered on time and according to my requirements. ❞
        </p>
        <h2 className="font-semibold text-2xl">Andrea Henry - UK</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 4 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ Got to know them through my colleague, and I'm really thankful to him for suggesting this platform. ❞
        </p>
        <h2 className="font-semibold text-2xl">David Smith - Germany</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 5 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ The work is deliver on-time and according to my requirements. ❞
        </p>
        <h2 className="font-semibold text-2xl">Robert Nicholson - Germany</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 6 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ The kind of work they provide is exemplary. It is like a stop solution to all our problems. ❞
        </p>
        <h2 className="font-semibold text-2xl">Alisha Fernandez - UK</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 7 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ The support team helps you out even if you have a small query. It's the highlight of the company. ❞
        </p>
        <h2 className="font-semibold text-2xl">Sophie Calley - New Zealand</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 8 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ Loved the services and accuracy of work with zero delays. ❞
        </p>
        <h2 className="font-semibold text-2xl">Kay Lynn - UK</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 9 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ The job being done with latest technologies which make my website look more attractive.❞
        </p>
        <h2 className="font-semibold text-2xl">Wendy Allis - USA</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
      {/* Slide 10 */}
      <div className="text-black text-center px-4 py-6 font-bold">
        <p className="text-xl  md:text-xl leading-relaxed mb-4 italic">
          ❝ Received my work within given time period, and the work was also upto the mark. ❞
        </p>
        <h2 className="font-semibold text-2xl">Sam Oakes - UAE</h2>
        <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
      </div>
    </Slider>
  </div>
</div>


      
    </>
  )
}

export default Resultsection
