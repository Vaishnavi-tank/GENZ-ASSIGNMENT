import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import '../component/main.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useForm } from "react-hook-form"
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ordered, setOrdered] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()
  
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const toggleForm = () => setIsOpen(!isOpen);
  return (
    <>
    {/* main page poster */}
    <div className="relative w-full h-screen overflow-hidden text-white">
  {/* Background Video */}
  <video
    src="main.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  ></video>

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/40">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">GenZ Assignments</h1>
    <h2 className="text-xl md:text-3xl mb-6">We Provide Best Offers</h2>
    <Link
      to="/contact"
      className="btn btn-neutral btn-outline bg-white/60 text-white text-lg md:text-xl rounded-xl px-6 py-3 hover:bg-black/80"
    >
      Connect with Us
    </Link>
  </div>
</div>

{/*  what we do */}
<div className="div3 w-full bg-base-100 text-white py-8 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="md:w-1/2 w-full" data-aos="fade-up-right">
      <h1 className="text-3xl md:text-4xl text-blue-300 pb-3 font-bold">What We Do</h1>

      <h2 className="text-2xl font-semibold mb-1">All Types of Assignments</h2>
      <p className="text-lg text-white/90 mb-4">
        We deal with all types of assignments and deliver great results based on proven facts.
      </p>

      <h2 className="text-2xl font-semibold mb-1">Thesis/Dissertation</h2>
      <p className="text-lg text-white/90 mb-4">
        On the basis of the aforementioned facts, we handle all types of thesis and dissertation with excellent outcomes.
      </p>

      <h2 className="text-2xl font-semibold">
        The Best Assignment Writers Get Outstanding Results
      </h2>
    </div>

    {/* Image */}
    <div className="md:w-1/2 w-full flex justify-center" data-aos="zoom-out-right">
      <img
        src="/bg-1.png"
        alt="What We Do"
        className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover  transition-all duration-300"
      />
    </div>
  </div>
</div>

{/* Stats Section */}
<div className="bg-base-200 w-full py-12 px-4">

  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
    {/* Box 1 */}
    <div
      className="rounded-md bg-cover bg-no-repeat h-[250px] text-white flex flex-col justify-center items-center text-xl"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1633458138940-ddf4c64604c7?q=80&w=1976&auto=format&fit=crop')`,
      }}
    >
      <h1 className="font-semibold text-3xl mb-2" style={{ textShadow: "2px 2px 2px black" }}>150000+</h1>
      <h2 className="font-bold">Projects</h2>
    </div>

    {/* Box 2 */}
    <div
      className="rounded-md bg-cover bg-no-repeat h-[250px] text-white flex flex-col justify-center items-center text-xl"
      data-aos="fade-up"
      data-aos-delay="200"
      style={{
        backgroundImage: `url('/bg-4.jpg')`,
      }}
    >
      <h1 className="font-semibold text-3xl mb-2" style={{ textShadow: "2px 2px 2px black" }}>30000+</h1>
      <h2 className="font-bold">Clients</h2>
    </div>

    {/* Box 3 */}
    <div
      className="rounded-md bg-cover bg-no-repeat h-[250px] text-white flex flex-col justify-center items-center text-xl"
      data-aos="fade-up"
      data-aos-delay="300"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/21/12/16/computer-1844996_1280.jpg')`,
      }}
    >
      <h1 className="font-semibold text-3xl mb-2" style={{ textShadow: "2px 2px 2px black" }}>97%</h1>
      <h2 className="font-bold">Passing Rate</h2>
    </div>
  </div>
</div>

  
  {/* 3 things guaranteed */}
  <div className="div4 w-full bg-base-100 text-white py-10 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start" data-aos="zoom-out-left">
      <img
        src="/bg-2.png"
        alt="Guarantee"
        className="w-[250px] h-[250px] md:w-[450px] md:h-[350px] object-cover  md:rounded-xl"
      />
    </div>

    {/* Right Text */}
    <div className="w-full md:w-1/2" data-aos="fade-up-left">
      <h1 className="text-3xl md:text-4xl text-blue-300 font-bold pb-4">
        We Guarantee Three Things:
      </h1>
      <ul className="space-y-3 text-lg md:text-xl list-decimal list-inside">
        <li>Passing Marks</li>
        <li>Best Price in the Industry</li>
        <li>Best Support from Our Executives</li>
      </ul>
    </div>
  </div>
</div>


{/* Why Genz */}
<div className="div5 w-full bg-base-100 py-10 px-4">
  <h2 className="text-4xl md:text-6xl text-white text-center mb-8">Why GenZ?</h2>

  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white" data-aos="flip-right">

    {/* Card 1 */}
    <div className="one backdrop-blur-md p-6 rounded-xl shadow-md bg-white/10" data-aos="flip-right">
      <h3 className="text-2xl font-bold mb-3">Professional Experts</h3>
      <p className="text-base md:text-lg text-justify">
        Our staff have years of experience and are experts in their specialties. They provide clients with top-quality solutions and professional guidance.
      </p>
    </div>

    {/* Card 2 */}
    <div className="two backdrop-blur-md p-6 rounded-xl shadow-md bg-white/10" data-aos="flip-right">
      <h3 className="text-2xl font-bold mb-3">Complete Privacy</h3>
      <p className="text-base md:text-lg text-justify">
        Your data's security is our top priority. We use advanced protocols to prevent misuse or leaks and guarantee secure, private transactions.
      </p>
    </div>

    {/* Card 3 */}
    <div className="three backdrop-blur-md p-6 rounded-xl shadow-md bg-white/10" data-aos="flip-right">
      <h3 className="text-2xl font-bold mb-3">Quality Assurance</h3>
      <p className="text-base md:text-lg text-justify">
        Our QA process ensures all services meet the highest standards. We prevent defects and resolve issues through consistent strategies.
      </p>
    </div>

    {/* Card 4 */}
    <div className="four backdrop-blur-md p-6 rounded-xl shadow-md bg-white/10" data-aos="flip-right">
      <h3 className="text-2xl font-bold mb-3">Timely Delivery</h3>
      <p className="text-base md:text-lg text-justify">
        With our tracking system, we keep you updated and deliver on time. Our experienced experts ensure efficient and prompt support.
      </p>
    </div>

  </div>
</div>


{/* goals */}

{/* <div className='bg-base-100 text-white p-10 md:w-full w-[725px]' >
        <div className='text-center '>
          <h1 className='text-5xl p-5' data-aos="fade-up">Goals</h1>
          <p className='text-xl p-3'>The company has achieved great success in the sector of content writing and is having customers from all over the globe. The company is having a great customer response for its work and the value it is delivering to its customers. The company has already established itself globally and still growing its branches in other countries. The services company is providing currently are:</p>
        </div>
        <div className='md:p-2'>
          <div className=" grid md:grid-cols-4 grid-cols-4 text-center md:ml-16">
            <div className="text-5xl text-center mt-10 md:w-60 h-40   flex flex-col items-center justify-center shadow-lg m-2  text-white" data-aos="fade-up" data-aos-delay="100"> 👨🏻‍💻
             <h2 className="text-3xl font-bold ">Technology</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="200">📚
              <h2 className="text-3xl font-bold  ">Thesis</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="300">&lt;/&gt;
              <h2 className="text-3xl font-bold  ">Web Development</h2> 
            </div>

            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="400">📈
              <h2 className="text-3xl font-bold  ">Finance</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="100">📝
              <h2 className="text-3xl font-bold  ">Accounting</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="200">📊
              <h2 className="text-3xl font-bold  ">Economics</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="300">💱
              <h2 className="text-3xl font-bold  ">Marketing</h2>
            </div>
            <div className="text-5xl text-center mt-10 md:w-60 h-40 flex flex-col items-center justify-center shadow-lg m-2 text-white" data-aos="fade-up" data-aos-delay="400">✍
              <h2 className="text-3xl font-bold ">Content Creation</h2>
            </div>
          </div>
        </div>
        </div> */}
<div className='bg-base-100 text-white p-6 md:p-10 w-full'>
  <div className='text-center'>
    <h1 className='text-4xl md:text-5xl p-4' data-aos="fade-up">Goals</h1>
    <p className='text-base md:text-xl px-2 md:px-10 pb-6'>
      The company has achieved great success in the sector of content writing and is having customers from all over the globe.
      The company is having a great customer response for its work and the value it is delivering to its customers. 
      The company has already established itself globally and still growing its branches in other countries. 
      The services company is providing currently are:
    </p>
  </div>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-16'>
    {[
      { icon: '👨🏻‍💻', label: 'Technology', delay: 100 },
      { icon: '📚', label: 'Thesis', delay: 200 },
      { icon: '</>', label: 'Web Development', delay: 300 },
      { icon: '📈', label: 'Finance', delay: 400 },
      { icon: '📝', label: 'Accounting', delay: 100 },
      { icon: '📊', label: 'Economics', delay: 200 },
      { icon: '💱', label: 'Marketing', delay: 300 },
      { icon: '✍', label: 'Content Creation', delay: 400 }
    ].map((item, index) => (
      <div
        key={index}
        className='text-4xl md:text-5xl flex flex-col items-center justify-center shadow-lg rounded-lg py-6 bg-opacity-10'
        data-aos="fade-up"
        data-aos-delay={item.delay}
      >
        <div>{item.icon}</div>
        <h2 className='text-2xl md:text-3xl font-bold mt-2'>{item.label}</h2>
      </div>
    ))}
  </div>
</div>


{/* Projects */}


        {/* <div className='bg-base-100 md:w-full w-[725px] '>
          <h1 className='text-center text-4xl p-5 font-bold  text-white' id='name' data-aos="fade-in-left">Projects </h1>
          <div className="slider-container font-semibold md:mt-8">
            <Slider {...settings}>
              <div className="assignment bg-no-repeat bg-cover h-[250px] w-[100px] p-2" >
                <h1 className='text-4xl p-16'>Assignments and Quiz</h1>
              </div>
              <div className="finan  bg-no-repeat bg-cover h-[250px] w-[100px]  p-2">
                <h1 className='text-4xl p-10 '>Finance, <br />Accounting, <br />Economics and<br /> Marketing</h1>
              </div>
              <div className="chem bg-no-repeat bg-cover h-[250px] w-[100px] p-2">
                <h1 className='text-4xl p-14'>Biology+ <br /> Chemistry+ <br /> Physics</h1>
              </div>
              <div className="tech bg-no-repeat bg-cover h-[250px] w-[100px] p-2">
                <h1 className='text-4xl p-16'>Technology</h1>
              </div>
              <div className="law bg-no-repeat bg-cover h-[250px] w-[100px] p-2" >
                <h1 className='text-4xl p-16'>Law</h1>
              </div>
              <div className='bM bg-no-repeat bg-cover h-[250px] w-[100px] p-'>
                  <h1 className='text-4xl p-16'>Bussiness and Management</h1>
              </div>
              <div className='hN bg-no-repeat bg-cover h-[250px] w-[100px] p-'>
                  <h1 className='text-4xl p-16'>Health & Nursing</h1>
              </div>
              <div className='cN bg-no-repeat bg-cover h-[250px] w-[100px] p-'>
                  <h1 className='text-4xl p-16'>Cybersecurity & Networking</h1>
              </div>
              <div className='dA bg-no-repeat bg-cover h-[250px] w-[100px] p-'>
                  <h1 className='text-4xl p-16'>Data & Analytics</h1>
              </div>
            </Slider>
          </div>
        </div> */}
        <div className='bg-base-100 w-full px-4 md:px-10 py-6'>
  <h1 className='text-center text-3xl md:text-4xl p-5 font-bold text-white' id='name' data-aos="fade-in-left">
    Projects
  </h1>

  <div className="slider-container font-semibold mt-6 md:mt-10">
    <Slider {...settings}>
      <div className="assignment bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-5 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Assignments <br /> Quiz</h1>
      </div>

      <div className="finan bg-no-repeat bg-cover h-[200px]  md:h-[250px] md:w-full sm:w-[300px] md:p-4 p-2 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white '>
          Finance, <br />
          Accounting, <br />
          Economics<br />
          Marketing
        </h1>
      </div>

      <div className="chem bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>
          Biology+<br />
          Chemistry+<br />
          Physics
        </h1>
      </div>

      <div className="tech bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Technology</h1>
      </div>

      <div className="law bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Law</h1>
      </div>

      <div className="bM bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Business and Management</h1>
      </div>

      <div className="hN bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Health & Nursing</h1>
      </div>

      <div className="cN bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Cybersecurity & Networking</h1>
      </div>

      <div className="dA bg-no-repeat bg-cover h-[200px]  md:h-[250px] w-full sm:w-[300px] p-4 flex items-center justify-center text-center">
        <h1 className='text-xl md:text-2xl text-white'>Data & Analytics</h1>
      </div>
    </Slider>
  </div>
</div>

     
      {/* Popup */}
      {isOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto md:pt-28 pt-36">
    <div className="bg-black/60 p-6 rounded-lg shadow-md w-full max-w-3xl mx-8  relative">
      <button
        onClick={toggleForm}
        className="absolute top-2 right-2 text-3xl font-bold text-white hover:text-red-500 bg-transparent border-none"
        id="formpopup"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">Order Form</h2>

      <form
        action="https://formspree.io/f/myzwedbd"
        method="post"
        className="space-y-5 md:h-screen"
      >
        <div className="space-y-4 px-4">
          {/* Name */}
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 rounded"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">Name is required!</span>
            )}
          </div>

          {/* Assignment */}
          <div>
            <label className="block text-white">Assignment</label>
            <input
              type="text"
              placeholder="Assignment"
              className="w-full px-4 py-2 rounded"
              {...register("assignment", { required: true })}
            />
            {errors.assignment && (
              <span className="text-sm text-red-500">This field is required!</span>
            )}
          </div>

          {/* Word count */}
          <div>
            <label className="block text-white">Word count</label>
            <input
              type="number"
              placeholder="No. of words"
              className="w-full px-4 py-2 rounded"
              {...register("number", { required: true })}
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-white">Deadline</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded"
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <span className="text-sm text-red-500">This field is required!</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-white">Phone number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full px-4 py-2 rounded"
              {...register("phone", {
                required: "Phone number is required!",
                maxLength: {
                  value: 10,
                  message: "Number must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <span className="text-sm text-red-500">{errors.phone.message}</span>
            )}
          </div>

          {/* Comments */}
          <div>
            <textarea
              className="w-full px-4 py-2 rounded mt-2"
              placeholder="Write your comments"
              rows={4}
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              disabled={ordered}
              className="px-6 py-2 bg-black text-white font-bold rounded hover:bg-blue-500"
            >
              {ordered ? "Ordered ✔" : "Order Now"}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}

      
    </>
  )
}

export default Main
