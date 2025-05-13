import React ,{useEffect,useState} from 'react'
import './contactbox.css'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form"
import axios from "axios";
const Contactbox = () => {
  const [sended, setSended] = useState(false);
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()
    const onSubmit =async (data) =>{
      setSended(true);
      const contactInfo={
        fullname:data.fullname,
        email:data.email,
        phone:data.phone,
        title:data.title
      }
      console.log(contactInfo)
      await axios
    .post("http://localhost:4000/contact/login",contactInfo)
     .then((res)=>{
      console.log(res.data)
      if(res.data){
        // console.log(res.data)

      }
     }).catch((err)=>{
      // console.log(err)
      // alert("Error: ", err)
     })
    };
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    
    <>
  <div className="relative w-full h-[600px] bg-blue-300 overflow-hidden">
  {/* Blurred Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background"
      className="w-full h-full object-cover filter blur-sm"
    />
    <div className="absolute inset-0 bg-opacity-30"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1
      className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4"
      data-aos="fade-down-right"
    >
      Contact Us
    </h1>
    <h2
      className="text-2xl md:text-3xl text-white drop-shadow"
      data-aos="fade-down-left"
    >
      Welcome to The GenZ Assignments Pvt. Ltd.
    </h2>
  </div>
</div>




<div className="formadd md:flex md:flex-row flex-col bg-base-100 text-black md:p-8 p-4">
  {/* Form Section */}
  <div className="md:w-1/2 w-full">
  <div className="form-section rounded-xl m-3 bg-white/70 p-6 shadow-md  flex flex-col justify-between h-[520px]">
    <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)} method="post">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="fullname" className="font-semibold">Name</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          {...register("fullname", { required: true })}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-semibold">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your number"
          {...register("phone", { required: true })}
        />
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-semibold">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Assignment title"
          {...register("title", { required: true })}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center ">
        <button
          type="submit"
          disabled={sended}
          className={`px-6 py-2 rounded shadow font-semibold text-white transition duration-300 ${
            sended ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {sended ? 'Thank You' : 'SEND'}
        </button>
      </div>
    </form>
  </div>
</div>


  {/* Contact Banner */}
  <div
    className="banner8 rounded-xl m-3 md:w-1/2 w-full flex flex-col justify-center items-center text-white font-bold shadow-lg p-6 md:p-0"
    data-aos="zoom-in"
  >
    <div className="backdrop-blur-md bg-black/10 border-2 border-white text-center p-8 shadow-2xl rounded-lg md:w-[600px]">
      <h1 className="text-3xl mb-3">✉ Email</h1>
      <p className="text-lg">assignments@genzassignments.com</p>
      <p className="text-lg">invoice.genz@gmail.com</p>
    </div>
  </div>
</div>

      {/* map */}
      <div className='bg-base-100'>
      <div className="relative text-right md:w-[900px] w-[725px] h-[450px] m-auto p-2 ">
      <div className="overflow-hidden bg-none w-full h-full ">
        <iframe
          width="900"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=20-22%20Wenlock%20Road%20London%20N1%207GU%20England&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>

    </div>
    </div>
    </>
  )
}

export default Contactbox
