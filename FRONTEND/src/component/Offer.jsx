import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import Winners from './Winners'
import { useForm } from "react-hook-form"
const Offer = () => {
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
    {/* <div className='bg-base-100 bg-no-repeat bg-cover '>
      <div className=' bg-cover bg-no-repeat '>

<img src="/offer Cover.jpeg" alt="" className='m-auto md:h-[160vh]' />
</div>
<div className=' p-10'>
    <div className='flex gap-5 md:mb-10 md:ml-10'>
    <img src="/offer1.jpeg" alt="" />
    <img src="/offer2.jpeg" alt="" />
    </div>
<div className='flex gap-5 md:mb-10 md:ml-10'>
<img src="/offer4.png" alt="" />
<img src="/offer3.png" alt="" />
</div>
<div className='flex gap-5 md:mb-10 md:ml-10'>
<img src="/offer5.png" alt="" />
<img src="/offer6.png" alt="" />
</div>

</div>
<div className='flex  gap-10 justify-center'>
    <h1 className='text-white text-2xl p-2'>Check Results :</h1>
    <Link to="/winner" ><button style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/thumbnails/020/414/382/small/colorful-gradient-soft-background-video.jpg')"}} className=' text-black font-bold'>Click here</button></Link>
</div>

    </div> */}
    <div className="bg-base-100 bg-no-repeat bg-cover">
  {/* Cover Image */}
  <div className="bg-base-100 py-10 flex justify-center items-center">
  <img
    src="/offer Cover.jpeg"
    alt="Offer Cover"
    className="w-[90%] max-w-4xl rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-white"
    data-aos="fade-up"
  />
</div>

  {/* Offer Images */}
  <div className="p-4 md:p-10 space-y-6">
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center" data-aos="zoom-in-up">
      <img
        src="/offer1.jpeg"
        alt="Offer 1"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
      <img
        src="/offer2.jpeg"
        alt="Offer 2"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
    </div>

    <div className="flex flex-col md:flex-row gap-4 items-center justify-center" data-aos="zoom-in-up">
      <img
        src="/offer4.png"
        alt="Offer 4"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
      <img
        src="/offer3.png"
        alt="Offer 3"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
    </div>

    <div className="flex flex-col md:flex-row gap-4 items-center justify-center" data-aos="zoom-in-up">
      <img
        src="/offer5.png"
        alt="Offer 5"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
      <img
        src="/offer6.png"
        alt="Offer 6"
        className="w-full md:w-[45%] rounded-lg shadow-2xl transition transform duration-500 hover:scale-105 hover:shadow-white"
      />
    </div>
  </div>

  {/* CTA */}
  <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center pb-10" data-aos="fade-up">
    <h1 className="text-white text-2xl font-semibold drop-shadow-md">Check Results :</h1>
    <Link to="/winner">
      <button
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/020/414/382/small/colorful-gradient-soft-background-video.jpg')",
        }}
        className="text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
      >
        Click here
      </button>
    </Link>
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

export default Offer
