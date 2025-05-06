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
      <div className='div1'>
        <div className=' md:w-full w-[725px] flex text-white flex-col text-2xl justify-center align-center relative  h-[700px] overflow-hidden '>
           {/* Background Video */}
        <video
        src="main.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
          <div className='mt-4 text-center absolute inset-0 flex flex-col justify-center'>
            <h1 className='text-[100px] ' >GenZ Assignments</h1>
            <h2 className=' text-4xl'>
              We Provide Best Offers
            </h2>
            <div className=" p-6">
              <Link to="/contact"   className='btn btn-neutral btn-outline bg-white/60 text-white text-xl rounded-xl cursor-pointer p-3 hover:text-xl hover:no-underline hover:bg-black/80'>Connect with Us</Link>
              </div>
          </div>
        </div>
      </div>
      <div className=" bg-base-200 md:w-full w-[725px] md:h-[320px] h-[850px]">
        <div className=' md:w-full w-[725px] md:flex justify-evenly align-center text-center items-center '>
          <div className='md:w-1/3 bg-no-repeat bg-cover rounded-md  border-blue-500 text-xl  h-[250px]  text-white m-4 pt-20' data-aos="fade-up" data-aos-delay="100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633458138940-ddf4c64604c7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", }}>
            <h1 className='font-semibold pb-3 text-3xl ' style={{ textShadow: "2px 2px 2px black" }}>150000+ </h1>
            <h2 className='font-bold'>Projects</h2> 
          </div>
          <div className='md:w-1/3 bg-no-repeat bg-cover rounded-md h-[250px] backdrop-blur-2xl  text-xl  text-white m-5 p-20' data-aos="fade-up" data-aos-delay="200" style={{ backgroundImage: "url('/bg-4.jpg", }}>
            <h1 className='font-semibold pb-3 text-3xl text-white' style={{ textShadow: "2px 2px 2px black" }}>30000+ </h1>
            <h2 className='font-bold'>Clients</h2>
          </div>
          <div className='md:w-1/3 bg-no-repeat bg-cover rounded-md h-[250px]  text-xl  text-white m-5 p-20' data-aos="fade-up" data-aos-delay="300" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/21/12/16/computer-1844996_1280.jpg", }}>
            <h1 className='font-semibold pb-3 text-3xl' style={{ textShadow: "2px 2px 2px black" }} >97% </h1>
            <h2 className='font-bold'>Passing rate</h2>
          </div>
        </div>
      </div>
      <div className="div3 flex md:w-full w-[725px] bg-base-100 text-white gap-24 h-[600px] md:h-[380px] justify-center items-center " >
        <div className='part1 p-5 w-1/2 ml-10' data-aos="fade-up-right" >
          <h1 className='text-4xl mt-3 text-blue-300 pb-2'>What We do</h1>
          <h2 className='text-2xl font-bold'>All types of Assignments</h2>
          <p className='text-xl md:text-lg'>We deals with all type of assignments with grate  results on the basis of above  facts.</p>
          <h2 className='text-2xl font-bold'>Thesis/Dissertation</h2>
          <p className='text-xl md:text-lg'>On the basis of the aforementioned facts, we handle all types of thesis and dissertation <br />with excellent outcomes.</p>
          <h2 className='text-2xl font-bold' >The Best Assignment Writers Get Outstanding Results</h2>
        </div>
        <div className='part2 w-1/2'>
          <img src="/bg-1.png" alt="" className='h-[300px] md:h-[450px] w-[450px] md:w-[500px]  md:rounded-xl rounded-full mt-5 ' data-aos="zoom-out-right" />
        </div>
      </div>
      <div className="div4 flex md:w-full w-[725px] bg-base-100 text-white gap-24 h-[380px] justify-center items-center" >
        <div className='part1 w-1/2 md:ml-24'  >
          <img src="/bg-2.png" alt="" className='h-[300px] md:h-[400px] w-[450px] md:w-[550px] md:rounded-xl rounded-full' data-aos="zoom-out-left" />
        </div>
        <div className='part2 p-5 w-1/2 ' data-aos="fade-up-left">
          <h1 className="text-4xl text-blue-300 pb-2" >We Guarantee three things: </h1>
          <h1 className='text-xl'>1. Passing Marks</h1>
          <h1 className='text-xl'>2. Best price in the industry</h1>
          <h1 className='text-xl'>3. Best Support From our Executives. </h1>
        </div>
      </div>
      <div className="div5  md:w-full w-[725px] md:h-[600px] h-[1000px] bg-base-100"  >
        <h2 className='text-6xl text-white text-center  p-4 ' >Why GenZ ?</h2>
        <div className="genz md:flex text-white" data-aos="flip-right" >

          <div className="md:w-1/4  one   p-4 m-4 text-justify " data-aos="flip-right">
            <h1 className='mb-4 font-bold'>Professional-Experts</h1>
            <p className='text-lg'>Professional experts   our staff have years of experience and are experts in their specialties. They are highly qualified and experienced in offering our clients excellent solutions and direction.</p>
          </div>
          <div className=" md:w-1/4 two backdrop-blur-md   p-4 m-4 text-justify " data-aos="flip-right">
            <h1 className='mb-4 font-bold'>Complete Privacy</h1>
            <p className='text-lg'>Our top priority is the security of your data. To stop your data from being misused or leaked, we employ cutting-edge security procedures. We promise that all of your transactions will be secure and private. </p>
          </div>
          <div className="md:w-1/4 three backdrop-blur-md  p-4 m-4 text-justify" data-aos="flip-right">
            <h1 className='mb-4 font-bold'>Quality Assurance</h1>
            <p className='text-lg'>Quality assurance is an essential process implemented within organizations to ensure that products, services, and processes consistently meet or exceed predetermined quality standards. It encompasses various activities and strategies aimed at preventing defects, identifying and resolving issues.</p>
          </div>
          <div className=" md:w-1/4 four backdrop-blur-md p-4 m-4 text-justify" data-aos="flip-right">
            <h1 className='mb-4 font-bold'>Timely Delivery</h1>
            <p className='text-lg'>We are able to always keep you informed and deliver your job on time thanks to our account-based tracking system. For many years, our experts have been honing their abilities to provide superior support with homework assignments.  </p>
          </div>
        </div>
      </div>
      <div className='bg-base-100 text-white p-10 md:w-full w-[725px]' >
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
        <div className='bg-base-100 md:w-full w-[725px] '>
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
        </div>
      </div>
      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto pt-44">
          <div className="bg-black/60 p-8 rounded-lg shadow-md w-[750px]  relative   ">
            <button
              onClick={toggleForm}
              className="absolute top-1 right-2 text-4xl font-bold text-white hover:text-red-500 bg-transparent w-20 border-none"
            id='formpopup'>
              ×
            </button>
            <h2 className="text-4xl font-bold mb-4 text-blue-500 text-center">Oder Form</h2>
            <form action="https://formspree.io/f/myzwedbd"  method='post' className=' z-50 '>
            <div className='md:w-[600px] md:p-5 p-[59px] text-center'>
              <div className=" md:flex-col grid justify-between  md:p-0 p-2">
                <label htmlFor="" className=' '>Name  </label>
                <input type="text" className="md:w-[550px] mx-10" placeholder="Full name"
                  {...register("fullname", { required: true })} />
                {errors.fullname && <span className='text-sm text-red-500'>Name is required !</span>}
              </div>
              <div className='md:flex-col grid justify-between md:p-0 p-2'>
                <label htmlFor="" className=' '>Assignment  </label>
                <input type="text" placeholder='Assignment' className="md:w-[550px] mx-10 "
                 {...register("assignment", { required: true })} />
                 {errors.deadline && <span className='text-sm text-red-500'>This field is required !</span>}
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-4'>Word count  </label>
                <input type="number" placeholder='No. of words' className="md:w-[550px] mx-10 "
                 {...register("number", { required: true })} />
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-10'>Deadline  </label>
                <input type="date" placeholder='Deadline' className="md:w-[550px] mx-10"
                  {...register("deadline", { required: true })} />
                {errors.deadline && <span className='text-sm text-red-500'>This field is required !</span>}
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-16'>Email  </label>
                <input type="email" placeholder='Email' className="md:w-[550px] mx-10"
                  {...register("email", { required: 'Email is required', pattern: { value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,})$/, message: 'Invalid email address' } })} />
                {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-3'>Phone number  </label>
                <input type="phone" placeholder='Enter mobile number' className="md:w-[550px] mx-10 "
                  {...register("phone", { required: 'Phone number is required !', maxLength: { value: 10, message: "Number must be of 10 digits" } })} />
                {errors.phone && <span className='text-sm text-red-500'>{errors.phone.message}</span>}
              </div>
              <div>
                <textarea className='md:w-[550px] md:ml-12 w-[360px]  mt-4' name="" id="" placeholder='Write your Comments'></textarea>
              </div>
              <button type="submit" disabled={ordered} className='font-bold md:ml-24 bg-black md:text-center items-center hover:bg-blue-500'>{ordered ? 'Ordered ✔' : 'Order Now'}</button>
            </div>
          </form>
          </div>
        </div>
      )}
     
      
    </>
  )
}

export default Main
