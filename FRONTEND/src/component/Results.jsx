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
      <div className="relative md:w-full w-[725px] h-[600px] bg-blue-300">
        <div className="absolute inset-0">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1894,h_503/https://huconsultancy.com/wp-content/uploads/2019/10/Testimonials-Background-long-min.jpg"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm -z-0"
          />
          <div className="absolute inset-0 bg-opacity-30"></div>
        </div>
        <div className="relative  flex flex-col items-center justify-center h-full">
          <h1 className='text-9xl text-yellow-200 ' >Testimonials</h1>
          <p className='text-4xl font-bold text-white'>Our customers <span className="text-yellow-600 font-bold">
            happy 😊</span> reviews make us
            <span className="text-yellow-600 font-semibold"> happy ❤︎</span></p>
        </div>
      </div>
      <div className='flex flex-col p-10 justify-center items-center text-justify bg-base-100'>
      <h1 className='text-white text-6xl mb-12'>Reviews and Results</h1>
    <div className='grid grid-cols-4 gap-4 m-4'>
     <img src="/r2.jpeg" alt=""   className='h-[300px]'/>
      <img src="/r3.jpeg" alt="" className='h-[300px]'/>
      <img src="/r4.jpeg" alt="" className='h-[300px]'/>
      <img src="/r14.jpeg" alt="" className='h-[300px]'/>
      <img src="/r6.png" alt="" className='h-[400px]'/>
      <img src="/r8.jpeg" alt="" className='h-[400px]'/>
      <img src="/r11.jpeg" alt="" className='h-[400px]'/>
      <img src="/r9.jpeg" alt="" className='h-[400px]'/>
      </div>
      <div className='flex gap-4 m-4'>
      <img src="/r1.jpeg" alt="" className='w-[700px]'/>
      <img src="/r7.jpeg" alt="" className='w-[600px]'/>
      </div>
    </div>
      <Resultsection />
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
      <Footer />
    </>
  )
}

export default Results