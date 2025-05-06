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
    <div className="relative md:w-full w-[725px] h-[600px] bg-blue-300">
    
    <div className="absolute inset-0">
      
      <img
        src="https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="w-full h-full object-cover filter blur-sm -z-0"
      />
      <div className="absolute inset-0 bg-opacity-30"></div> 
    </div>
    <div className="relative  flex flex-col items-center justify-center h-full">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg" data-aos="fade-down-right">
      Contact Us
      </h1>
      <h1 className='text-2xl text-white' data-aos="fade-down-left">Welcome to The GenZ Assignments pvt. ltd</h1>
    </div>
  </div>













      <div className='formadd md:flex md:flex-row flex-col  md:p-8 text-black  bg-base-100'  >
      

    <div className=' md:w-1/2  w-[725px] '>
      <div className="form-section  rounded-xl m-3 bg-white/70" >
        
        <form  className="row g-4 " onSubmit={handleSubmit(onSubmit)} method='post' >
      
          <div className="mb-3 flex justify-between ">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control w-[500px] "  placeholder="Enter your name" {...register("fullname", { required: true })}/>
          </div>
      
          <div className="mb-3 flex justify-between">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control w-[500px]" id="email" placeholder="Enter your email"
            {...register("email", { required: true })}/>
          </div>
      
          <div className="mb-3 flex justify-between">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control w-[500px]" id="phone" placeholder="Enter your Number" 
            {...register("phone", { required: true })}/>
          </div>
      
          <div className="mb-3 flex justify-between">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control w-[500px]" id="title" placeholder="Assignment title"
            {...register("title", { required: true })}/>
          </div>
          <div className="text-center mt-4">
            <button type="submit" disabled={sended} className="btn btn-primary bg-blue-500">{sended ? 'Thank You' : 'SEND'}</button>
          </div>
        </form>
      </div>
      </div>


      <div className=' banner8  rounded-xl m-3 md:w-1/2 w-[725px] md:flex flex-col justify-center items-center text-2xl bg-white  text-white font-bold  shadow-lg shadow-black p-10 md:p-0  md:h-[480px]' data-aos="zoom-in">
            
                  <div className='backdrop-blur-md bg-black/10 shadow-2xl md:flex  justify-center items-center m-5 gap-5 text-center border-2 border-white md:h-[300px] md:w-[600px] '>
                 
                  <div className=' '>
                  <h1 className='text-3xl'>✉  Email</h1>
                  <p>  assignments@genzassignments.com</p>
                  <p>invoice.genz@gmail.com</p>
                  </div>
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
