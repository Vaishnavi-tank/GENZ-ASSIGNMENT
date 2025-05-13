import React, { useRef, useState } from 'react'
import 'intl-tel-input/build/css/intlTelInput.css';
import './Orderbox.css'
import { useForm } from "react-hook-form"
// import axios from "axios";
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
  //   const userInfo = {
  //     fullname: data.fullname,
  //     assignment: data.assignment,
  //     word: data.word,
  //     deadline: data.deadline,
  //     email: data.email,
  //     phone: data.phone,
  //     comment: data.comment
  //   }
  //   console.log(userInfo)
  //   await axios
  //     .post("http://localhost:4000/user/order", userInfo)
  //     .then((res) => {
  //       console.log(res.data)
  //       if (res.data) {
  //         alert("Ordered successfully")
  //       }
  //     }).catch((err) => {
  //       console.log(err)
  //       alert("Error: ", err)
  //     })
  // 
  };
 
  return (
    <>
    {/* Order cover */}
    <div className="orderbg relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-base-100">
  <div className="absolute inset-0 z-0">
    <img
      src="https://img.freepik.com/premium-vector/abstract-dark-blue-background_115579-22.jpg"
      alt="Background"
      className="w-full h-full object-cover filter blur-sm"
    />
    <div className="absolute inset-0  bg-opacity-40"></div>
  </div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold text-white text-center drop-shadow-lg">
      Order Now!
    </h1>
  </div>
</div>


<div className="flex items-center justify-center bg-black/80 p-10 relative w-full h-[1000px] overflow-hidden">
  {/* Background Video */}
  <video
    src="orderbg.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  ></video>

  {/* Form Container */}
  <div className="absolute inset-0 backdrop-blur-md bg-black/10 shadow-2xl border-2 border-white/50 rounded-md text-white max-w-[750px] mx-auto my-auto p-6 md:p-12 z-10 overflow-y-auto">
    <form action="https://formspree.io/f/myzwedbd" method="post" className="space-y-4">
      <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>

      <div className="flex flex-col">
        <label>Name</label>
        <input type="text" name="fullname" placeholder="Full name" className="input input-bordered w-full bg-white text-black" required />
      </div>

      <div className="flex flex-col">
        <label>Assignment</label>
        <input type="text" name="assignment" placeholder="Assignment Topic" className="input input-bordered w-full bg-white text-black" />
      </div>

      <div className="flex flex-col">
        <label>Word Count</label>
        <input type="number" name="wordcount" placeholder="No. of words" className="input input-bordered w-full bg-white text-black" />
      </div>

      <div className="flex flex-col">
        <label>Deadline</label>
        <input type="date" name="deadline" className="input input-bordered w-full bg-white text-black" required />
      </div>

      <div className="flex flex-col">
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full bg-white text-black" required />
      </div>

      <div className="flex flex-col">
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Phone Number" className="input input-bordered w-full bg-white text-black" required maxLength={10} />
      </div>

      <div className="flex flex-col">
        <label>Comments</label>
        <textarea name="comments" placeholder="Write your comments" className="textarea textarea-bordered w-full bg-white text-black"></textarea>
      </div>

      <div className="flex justify-center">
      <button type="submit" disabled={ordered} className='font-bold md:text-center items-center hover:bg-black'>{ordered ? 'Ordered ✔' : 'Order Now'}</button>
      </div>
    </form>
  </div>
</div>


    </>
  )
}

export default Orderbox
