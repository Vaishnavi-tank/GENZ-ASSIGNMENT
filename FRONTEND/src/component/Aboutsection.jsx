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
            <div className="md:flex md:p-10  bg-base-100 md:h-[600px] shadow-sm text-white md:w-full w-[725px]" >
                <figure>
                    <img
                        src="/bg.png"
                        alt="Album"
                        className='w-[2250px] md:h-[500px]'
                        data-aos="fade-up"
                    />
                </figure>
                <div className="p-10 ml-16 text-justify">
                    <h2 className="card-title text-4xl text-white mb-5">We are Assignments Helpers!</h2>
                    <p className='text-xl'>Quality assurance is an essential process implemented within organizations to ensure that products, services, and processes consistently meet or exceed predetermined quality standards. It encompasses various activities and strategies aimed at preventing defects, identifying and resolving issues, and enhancing overall customer satisfaction. We not only promise you the greatest quality, but we also give your files the best style and formatting.
                    </p>
                    <p className='text-xl'>We are able to always keep you informed and deliver your job on time thanks to our account-based tracking system. For many years, our experts have been honing their abilities to provide superior support with homework assignments. Frequently, we deliver papers before the due date. As little as three hours before your deadline, we can start working. Whatever the deadline for your paper, we guarantee to produce a finished, excellent product on time, or we’ll refund your money. We want to see you succeed.</p>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-base-100 p-10  md:w-full w-[725px]">
                <div className="backdrop-blur-md bg-white/80 border-4 bg-no-repeat bg-cover border-black/80 rounded-2xl p-16 text-black shadow-xl w-[1000px] h-[500px] text-center " data-aos="flip-bottom" >
                    <h1 className="text-4xl font-bold my-10 text-black">About Us</h1>
                    <p className="text-lg">
                        GenZ is a multinational conglomerate of businesses. The organisation began its operations with market research before moving on to business research, and it now works in a variety of fields, including assignments, tests, digital marketing, content production, web development, finance, marketing, law, accounting, and taxation, among others. The company’s major goal is to concentrate on fostering online social groups on a worldwide scale. The business anticipates growth in areas such as social media marketing, business market research, and brand management. In order to achieve long-term success.
                    </p>
                </div>
            </div>
            <div className='bg-base-100 text-white p-10 md:w-full w-[725px]' >
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

            </div>
            <div className='flex bg-base-100 text-white gap-16 justify-center p-16 md:w-full w-[725px] bg-no-repeat bg-cover' >
                <div className='border-r-2 border-blue-500 text-xl p-4'><h1 className='text-4xl '>Our Vision</h1>
                    <p>We aspire to set the bar for excellence and to foster a cooperative, vibrant, and welcoming environment.</p></div>
                <div className='text-xl p-4'><h1 className='text-4xl'>Our Mission</h1>
                    <p>The key component of GenZ mission is to strengthen social communities, client relations, and
                        build cohesive relationships among core team members.</p></div>
            </div>
            {/* Policies */}
            <div className="bg-base-100 h-[900px] md:h-[800px] flex md:w-full w-[725px] text-white md:p-7">
                <div className="  text-center p-6 md:w-full w-[725px] ">
                    <h1 className="text-4xl font-bold mb-5 text-center">GenZ Policies</h1>
                    <p className="text-2xl pb-10   ">
                        We have a very well-organized operational foundation. We operate in accordance with the needs of the students with good administration. Our main tenets are as follows:
                    </p>
                    <div className='md:w-[800px] w-[650px] flex flex-col text-lg items-centerx justify-center md:m-auto text-justify'>
                        <h1 className='mt-5'>
                            <span className='font-bold text-2xl'>1. Quality & Content :</span> A professionally written, well-structured paper has the potential to earn higher scores. The highest quality editing services are created by our staff. The quality of the information, structure, writing styles, etc., is excellent.</h1>
                        <h1 className='mt-3'>
                            <span className='font-bold text-2xl'>2. Timely Delivery :</span> Students frequently experience delays in receiving proofreading services. If the pupils don’t get their services on time, it’s useless and a waste of time and money. To ensure that students have no issues using their services, we make every effort to fulfil deadlines. The students can further review and prepare their project tasks thanks to on-time delivery.</h1>
                        <h1 className='mt-3'>
                            <span className='font-bold text-2xl'>3. Original work is provided :</span> There is no tolerance for plagiarism. We adhere strictly to our No Plagiarism Policy and never waver from it. The safety of the pupils is something that we take very seriously. If pupils turn in plagiarised work, they risk facing severe consequences.</h1>
                        <h1 className='mt-3'>
                            <span className='font-bold text-2xl'>4. Satisfaction Guarantee :</span> The happiness of our students is our first priority. This represents our dedication to fulfilling any need a student might have. We are available for this 24/7. To make the students’ interactions with us enjoyable, we are reachable around-the-clock.</h1>
                        <h1 className='mt-3'>
                            <span className='font-bold text-2xl'>5. Best Pricing Policy :</span> Our Best Pricing Policy guarantees that you receive their services at a reasonable price. Because our editing services are affordable, you won’t have to worry about spending your hard-earned money. We provide you high-quality, reasonably priced services.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutsection
