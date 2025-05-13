import React, { useEffect } from 'react'
import './aboutsection.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Aboutsection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
        {/* Assignment helper */}
        <div className="bg-base-100 shadow-sm text-white w-full md:flex md:p-10 p-5 items-center">
  {/* Image Section */}
  <figure className="md:w-1/4 w-full mb-6 md:mb-0">
    <img
      src="/bg.png"
      alt="Album"
      className="md:w-[500px] h-[400px] md:h-full md:pl-5 object-cover rounded-md"
      data-aos="fade-up"
    />
  </figure>

  {/* Text Content */}
  <div className="md:w-3/4 w-full md:ml-10 text-justify">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We are Assignments Helpers!</h2>
    <p className="text-base md:text-lg mb-4">
      Quality assurance is an essential process implemented within organizations to ensure that products, services, and processes consistently meet or exceed predetermined quality standards. It encompasses various activities and strategies aimed at preventing defects, identifying and resolving issues, and enhancing overall customer satisfaction. We not only promise you the greatest quality, but we also give your files the best style and formatting.
    </p>
    <p className="text-base md:text-lg">
      We are able to always keep you informed and deliver your job on time thanks to our account-based tracking system. For many years, our experts have been honing their abilities to provide superior support with homework assignments. Frequently, we deliver papers before the due date. As little as three hours before your deadline, we can start working. Whatever the deadline for your paper, we guarantee to produce a finished, excellent product on time, or we’ll refund your money. We want to see you succeed.
    </p>
  </div>
</div>


{/* About us */}
<div className="flex items-center justify-center bg-base-100 px-4 py-10 w-full md:h-">
  <div
    className="backdrop-blur-md bg-white/80 border-4 border-black/80 rounded-2xl bg-no-repeat bg-cover shadow-xl w-full max-w-3xl min-h-[400px] md:min-h-[400px] text-center p-6 md:p-12"
    data-aos="flip-bottom"
  >
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">About Us</h1>
    <p className="text-justify md:text-xl  text-black flex justify-center items-center ">
      GenZ is a multinational conglomerate of businesses. The organisation began its operations with market research before moving on to business research, and it now works in a variety of fields, including assignments, tests, digital marketing, content production, web development, finance, marketing, law, accounting, and taxation, among others. The company’s major goal is to concentrate on fostering online social groups on a worldwide scale. The business anticipates growth in areas such as social media marketing, business market research, and brand management in order to achieve long-term success.
    </p>
  </div>
</div>
 
 {/* Goals */}
 {/* <div className='bg-base-100 text-white p-10 md:w-full w-[725px]' >
                <div className='text-center '>
                    <h1 className='text-4xl p-5' data-aos="fade-up">Goals</h1>
                    <p className='text-xl p-3'>The company has achieved great success in the sector of content writing and is having customers from all over the globe. The company is having a great customer response for its work and the value it is delivering to its customers. The company has already established itself globally and still growing its branches in other countries. The services company is providing currently are:</p>

                </div>
                <div className='md:p-10'>
                    <div className=" grid md:grid-cols-6 grid-cols-4 text-center ">
                        <div className=" w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-xl font-semibold ">Assignments</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-xl font-semibold  ">Thesis</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-xl font-semibold  ">Dissertation</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-xl font-semibold  ">Law Management</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="500">
                            <h2 className="text-xl font-semibold  ">Finance</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="600">
                            <h2 className="text-xl font-semibold  ">Accounting</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-xl font-semibold  ">Economics</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-xl font-semibold  ">Marketing</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4 flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-xl font-semibold ">Content Creation</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-xl font-semibold  ">Digital Marketing</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="500">
                            <h2 className="text-xl font-semibold  ">Web Development</h2>
                        </div>
                        <div className="w-40 h-40 md:rounded-full border-4  flex items-center justify-center shadow-lg m-2 bg-white text-black" data-aos="fade-up" data-aos-delay="600">
                            <h2 className="text-xl font-semibold  ">Affiliate Marketing</h2>
                        </div>
                    </div>

                </div>

            </div> */}
            <div className="bg-base-100 text-white px-4 py-10 w-full">
  <div className="text-center max-w-6xl mx-auto">
    <h1 className="text-4xl p-5" data-aos="fade-up">Goals</h1>
    <p className="text-xl p-3">
      The company has achieved great success in the sector of content writing and is having customers from all over the globe.
      The company is having a great customer response for its work and the value it is delivering to its customers.
      The company has already established itself globally and is still growing its branches in other countries.
      The services company is providing currently are:
    </p>
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-10 pt-10">
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
      {[
        "Assignments",
        "Thesis",
        "Dissertation",
        "Law Management",
        "Finance",
        "Accounting",
        "Economics",
        "Marketing",
        "Content Creation",
        "Digital Marketing",
        "Web Development",
        "Affiliate Marketing",
      ].map((service, idx) => (
        <div
          key={service}
          className="w-full aspect-square rounded-full md:rounded-full border-4 flex items-center justify-center shadow-lg m-2 bg-white text-black"
          data-aos="fade-up"
          data-aos-delay={100 + service* 100}
        >
          <h2 className="text-xl font-semibold px-2">{service}</h2>
        </div>
      ))}
    </div>
  </div>
</div>


{/* Vision and mission */}
<div className="bg-base-100 text-white p-8 md:p-16 w-full bg-no-repeat bg-cover">
  <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center max-w-6xl mx-auto">
    {/* Vision */}
    <div className="text-xl p-4 md:border-r-2 border-blue-500 md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl mb-2">Our Vision</h1>
      <p>
        We aspire to set the bar for excellence and to foster a cooperative, vibrant, and welcoming environment.
      </p>
    </div>

    {/* Mission */}
    <div className="text-xl p-4 md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl mb-2">Our Mission</h1>
      <p>
        The key component of GenZ mission is to strengthen social communities, client relations, and build cohesive relationships among core team members.
      </p>
    </div>
  </div>
</div>

            {/* Policies */}
            <div className="bg-base-100 text-white px-4 py-10 md:px-10 md:py-16 w-full">
  <div className="max-w-4xl mx-auto text-center bg-white text-black p-4 rounded-t-xl">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">GenZ Policies</h1>
    <p className="text-lg md:text-2xl pb-10">
      We have a very well-organized operational foundation. We operate in accordance with the needs of the students with good administration. Our main tenets are as follows:
    </p>
  </div>

  <div className="space-y-4 max-w-4xl mx-auto bg-white text-black p-4 rounded-b-xl">
   
    <details className="bg-white rounded-lg shadow-md">
      <summary className="cursor-pointer px-4 py-3 text-lg md:text-xl font-semibold bg-black text-white hover:bg-white hover:text-black transition">
        1. Quality & Content
      </summary>
      <div className="px-4 py-3 text-sm md:text-base bg-white">
        A professionally written, well-structured paper has the potential to earn higher scores. The highest quality editing services are created by our staff. The quality of the information, structure, writing styles, etc., is excellent.
      </div>
    </details>

    <details className="bg-white rounded-lg shadow-md">
      <summary className="cursor-pointer px-4 py-3 text-lg md:text-xl font-semibold bg-black text-white hover:bg-white hover:text-black transition">
        2. Timely Delivery
      </summary>
      <div className="px-4 py-3 text-sm md:text-base bg-white">
        Students frequently experience delays in receiving proofreading services. We make every effort to fulfil deadlines so students can review and prepare their project tasks on time.
      </div>
    </details>

    <details className="bg-white rounded-lg shadow-md">
      <summary className="cursor-pointer px-4 py-3 text-lg md:text-xl font-semibold bg-black text-white hover:bg-white hover:text-black transition">
        3. Original Work is Provided
      </summary>
      <div className="px-4 py-3 text-sm md:text-base bg-white">
        There is no tolerance for plagiarism. We strictly follow our No Plagiarism Policy and take student safety seriously. Submitting plagiarised work may have severe consequences.
      </div>
    </details>

    <details className="bg-white rounded-lg shadow-md">
      <summary className="cursor-pointer px-4 py-3 text-lg md:text-xl font-semibold bg-black text-white hover:bg-white hover:text-black transition">
        4. Satisfaction Guarantee
      </summary>
      <div className="px-4 py-3 text-sm md:text-base bg-white">
        The happiness of our students is our first priority. We’re available 24/7 to make interactions enjoyable and fulfill any student need.
      </div>
    </details>

    <details className="bg-white rounded-lg shadow-md">
      <summary className="cursor-pointer px-4 py-3 text-lg md:text-xl font-semibold bg-black text-white hover:bg-white hover:text-black transition">
        5. Best Pricing Policy
      </summary>
      <div className="px-4 py-3 text-sm md:text-base bg-white">
        Our Best Pricing Policy ensures high-quality services at reasonable rates, so students don’t need to worry about overspending.
      </div>
    </details>
  </div>
</div>


        </>
    )
}

export default Aboutsection
