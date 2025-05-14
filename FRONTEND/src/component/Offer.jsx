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

   
    </>
  )
}

export default Offer
