import React, { useEffect ,useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Resultsection from './Resultsection'
import { useForm } from "react-hook-form"
const Results = () => {
  const [isOpen, setIsOpen] = useState(false);
      const [ordered, setOrdered] = useState(false);
      const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm()
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 3000);
      
          return () => clearTimeout(timer);
        }, []);
        const toggleForm = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[500px] md:h-[600px]">
  {/* Background Image with Blur */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1894,h_503/https://huconsultancy.com/wp-content/uploads/2019/10/Testimonials-Background-long-min.jpg"
      alt="Background"
      className="w-full h-full object-cover blur-sm"
    />
    <div className="absolute inset-0  bg-opacity-30 r"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-yellow-200 drop-shadow-md">
      Testimonials
    </h1>
    <p className="mt-6 text-xl md:text-3xl font-semibold text-white">
      Our customers <span className="text-yellow-400">happy 😊</span> reviews make us
      <span className="text-yellow-400"> happy ❤︎</span>
    </p>
  </div>
</div>

<div className='flex flex-col p-6 md:p-10 justify-center items-center text-justify bg-base-100'>
  <h1 className='text-white text-4xl md:text-6xl font-bold mb-10 text-center'>Reviews and Results</h1>

  {/* Grid for Top Images */}
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2'>
    <img src="/r2.jpeg" alt="" className='h-[250px] object-cover w-full rounded-xl' />
    <img src="/r3.jpeg" alt="" className='h-[250px] object-cover w-full rounded-xl' />
    <img src="/r4.jpeg" alt="" className='h-[250px] object-cover w-full rounded-xl' />
    <img src="/r14.jpeg" alt="" className='h-[250px] object-cover w-full rounded-xl' />
    <img src="/r6.png" alt="" className='h-[300px] object-cover w-full rounded-xl' />
    <img src="/r8.jpeg" alt="" className='h-[300px] object-cover w-full rounded-xl' />
    <img src="/r11.jpeg" alt="" className='h-[300px] object-cover w-full rounded-xl' />
    <img src="/r9.jpeg" alt="" className='h-[300px] object-cover w-full rounded-xl' />
  </div>

  {/* Bottom Row Images */}
  <div className='flex flex-col md:flex-row gap-4 mt-8 w-full px-2'>
    <img src="/r1.jpeg" alt="" className='w-full md:w-1/2 object-cover rounded-xl' />
    <img src="/r7.jpeg" alt="" className='w-full md:w-1/2 object-cover rounded-xl' />
  </div>
</div>


      <Resultsection />
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
      <Footer />
    </>
  )
}

export default Results
