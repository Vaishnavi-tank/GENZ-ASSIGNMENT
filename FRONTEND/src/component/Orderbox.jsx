import React, { useRef, useState } from 'react'
import './Orderbox.css'
import { useForm } from "react-hook-form"
import axios from "axios";
const Orderbox = () => {
  const [ordered, setOrdered] = useState(false)
  
  const inputRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setOrdered(true);
    const userInfo = {
      fullname: data.fullname,
      assignment: data.assignment,
      word: data.word,
      deadline: data.deadline,
      email: data.email,
      phone: data.phone,
      comment: data.comment
    }
    // console.log(userInfo)
    await axios
      .post("http://localhost:4000/user/order", userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          // alert("Ordered successfully")
        }
      }).catch((err) => {
        console.log(err)
        // alert("Error: ", err)
      })
  };
 
  return (
    <>
      <div className="orderbg relative md:w-full w-[725px] h-[600px] bg-base-100">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/premium-vector/abstract-dark-blue-background_115579-22.jpg"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm -z-0"/>
          <div className="absolute inset-0 bg-opacity-30"></div>
        </div>
        <div className="relative  flex flex-col items-center justify-center h-full">
          <h1 className='text-9xl text-white/100 ' style={{ textShadow: "2px 2px 2px white" }}>Order Now!</h1>
        </div>
      </div>

      <div className=" flex items-center justify-center bg-black/80 p-10 bg-no-repeat bg-cover bg-center md:w-full w-[725px] relative  h-[1000px] overflow-hidden ">
        {/* Background Video */}
        <video
        src="orderbg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
        <div className="absolute inset-0 backdrop-blur-md bg-black/10 shadow-2xl border-2 border-white/50  md:px-16 text-black  md:w-[750px] md:h-[900px] rounded-md text-center m-auto w-[500px]  ">
          <form action="https://formspree.io/f/myzwedbd"n  method='post'>
            <div className='md:w-[600px] md:p-5 p-[59px] text-center'>
              <div className=" md:flex-col grid justify-between md:p-0 p-2">
                <label htmlFor="" className=' '>Name  </label>
                <input type="text" className="md:w-[550px] " placeholder="Full name"
                  {...register("fullname", { required: true })} />
                {errors.fullname && <span className='text-sm text-red-500'>Name is required !</span>}
              </div>
              <div className='md:flex-col grid justify-between md:p-0 p-2'>
                <label htmlFor="" className=' '>Assignment  </label>
                <input type="text" placeholder='Assignment' className="md:w-[550px] "
                />
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-4'>Word count  </label>
                <input type="number" placeholder='No. of words' className="md:w-[550px] "
                />
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-10'>Deadline  </label>
                <input type="date" placeholder='Deadline' className="md:w-[550px] "
                  {...register("deadline", { required: true })} />
                {errors.deadline && <span className='text-sm text-red-500'>This field is required !</span>}
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-16'>Email  </label>
                <input type="email" placeholder='Email' className="md:w-[550px] "
                  {...register("email", { required: 'Email is required', pattern: { value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,})$/, message: 'Invalid email address' } })} />
                {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
              </div>
              <div className='md:flex-col grid  justify-between md:p-0 p-2'>
                <label htmlFor="" className='mr-3'>Phone number  </label>
                <input type="phone" placeholder='Enter mobile number' className="md:w-[550px] "
                  {...register("phone", { required: 'Phone number is required !', maxLength: { value: 10, message: "Number must be of 10 digits" } })} />
                {errors.phone && <span className='text-sm text-red-500'>{errors.phone.message}</span>}
              </div>
              <div>
                <textarea className='md:w-[550px] md:p-0 p-3 w-[360px] md:ml-[10px] mt-4' name="" id="" placeholder='Write your Comments'></textarea>
              </div>
              <button type="submit" disabled={ordered} className='font-bold md:text-center items-center hover:bg-black'>{ordered ? 'Ordered ✔' : 'Order Now'}</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Orderbox
