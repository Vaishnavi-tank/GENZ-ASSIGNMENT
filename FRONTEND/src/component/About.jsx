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
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
      const toggleForm = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar/>
      <figure className="  h-[600px] text-center md:flex md:justify-center md:items-center md:text-center bg-base-100 md:w-full   w-[725px] bg-no-repeat bg-cover" tabIndex={0} style={{backgroundImage: "url('https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}}>
            
            {/* /circle-scatter-haikei.svg */}
                <div className="bg-no-repeat pt-[150px] md:pt-0" role="img" tabIndex={0}>
                    <div className=" flex text-center  text-9xl text-white justify-center items-center"  data-aos="fade-right">We are GenZ</div>
                </div>
            </figure>
      <Aboutsection/>
      <Footer/>
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
//https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
export default About
