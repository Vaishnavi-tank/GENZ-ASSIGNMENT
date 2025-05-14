import React, { useEffect ,useState} from 'react'
import Navbar from './Navbar'
import Aboutsection from './Aboutsection'
import Footer from './Footer'
import { useForm } from "react-hook-form"
const About = () => {
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
        }, 20000);
    
        return () => clearTimeout(timer);
      }, []);
      const toggleForm = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar/>
      <figure
  className="relative min-h-[70vh] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center text-center"
  tabIndex={0}
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  <div
    className="px-4 py-16 md:py-0"
    role="img"
    tabIndex={0}
  >
    <h1
      className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold"
      data-aos="fade-right"
    >
      We are GenZ
    </h1>
  </div>
</figure>

      <Aboutsection/>
      <Footer/>
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
//https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
export default About
