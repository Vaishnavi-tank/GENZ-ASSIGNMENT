import React, { useEffect } from 'react'
import './servicebox.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicebox = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="relative md:w-full w-[725px] h-[600px] bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-dark-mode-mockup-with-blank-space-for-placing-your-design-image_16007070.jpg"
                        alt="Background"
                        className="w-full h-full object-cover filter blur-sm -z-0"
                    />
                    <div className="absolute inset-0 bg-opacity-40"></div>
                </div>
                <div className="relative  flex flex-col items-center justify-center h-full">
                    <h1 className='text-9xl font-bold animate__animated animate__bounceInDown text-white/90'>
                        We Are Here for You
                    </h1>
                </div>
            </div>
            {/* projects */}
            <div className='bg-base-100 md:w-full w-[725px] text-white'>
                <h1 className='text-center text-4xl p-5 font-bold  ' id='name' data-aos="fade-in-left">Projects </h1>
                <div className='projects  py-3  justify-center items-center md:p-5'>
                    <div className='md:flex md:ml-0 ml-10'>
                        <div className="project1 text-center flex flex-col justify-center md:w-[500px] w-[600px]" >
                            <h1 className='text-xl text-center '>Assignments and Quiz</h1>
                            <p className='text-justify'>Welcome to our assignments-focused website! We have the tools and advice to enable you to succeed in assignment management whether you’re a student, professional, or someone trying to optimise work allocation within your organisation. The best practises, advice, and tactics for efficient assignment preparation, delegation, and execution are abundant on our platform.</p>
                        </div>
                        <div className="project1 md:w-[500px] w-[600px] flex flex-col justify-center" data-aos="fade-up">
                            <h1 className='text-xl text-center '>Finance and Accounting

                            </h1>
                            <p className='text-justify'>Best source for all financial and money management-related information. We can help you whether you’re an individual trying to better your personal finances or a company trying to improve your financial plans. Our website provides a wide selection of articles, how-tos, and other resources to assist you in confidently navigating the challenging world of finance.</p>
                        </div>
                        <div className="project1 md:w-[500px] w-[600px] flex flex-col justify-center" data-aos="fade-up">
                            <h1 className='text-xl text-center '>Law

                            </h1>
                            <p className='text-justify'>
                                Your complete one-stop web reference for all things legal. Whether you’re a lawyer, a student of the law, or a layperson looking for legal advice, our platform can provide you insightful information and tools. Our staff of skilled legal writers and specialists is committed to addressing a broad variety of legal subjects, including commercial law, intellectual property law, and civil and criminal law.</p>
                        </div>
                    </div>
                    <div className='md:flex md:ml-0 ml-10'>

                        <div className="project1 md:w-[500px] w-[600px] flex flex-col justify-center" data-aos="fade-up">
                            <h1 className='text-xl text-center '>Technology

                            </h1>
                            <p className='text-justify'>You’ve come to the correct spot whether you’re interested in technology, working in the field, or just want to keep up with the newest developments in the field. We cover everything, from the newest technology to ground-breaking advancements in Artificial Intelligence, C, C++, C#, JAVA, PYTHON, EXCEL, SPSS, RAPIDMINER and more.</p>
                        </div>
                        <div className="project1 flex flex-col justify-center md:w-[500px] w-[600px] " data-aos="fade-up">
                            <h1 className='text-xl text-center '>Biology + Chemistry + Physics

                            </h1>
                            <p className='text-justify'>We have a wealth of material on our website, including in-depth essays, interesting films, and interactive tools to pique your scientific interest. Explore the complicated dynamics of DNA and the fragile ecosystems that support our planet to learn more about the intricate complexity of life.</p>
                        </div>
                        <div className="project1 flex flex-col justify-center md:w-[500px] w-[600px] " data-aos="fade-up">
                            <h1 className='text-xl text-center '>Management & Business


                            </h1>
                            <p className='text-justify'>Management involves planning, organizing, and leading to achieve business goals efficiently. Business focuses on providing goods or services and generating profit. Together, they ensure smooth operations, smart decision-making, and growth in a competitive market.</p>
                        </div>
                    </div>
                    <div className='md:flex md:ml-0 ml-10'>

                        <div className="project1 md:w-[500px] w-[600px] flex flex-col justify-center" data-aos="fade-up">
                            <h1 className='text-xl text-center '>Health & Nursing

                            </h1>
                            <p className='text-justify'>Health refers to overall physical, mental, and social well-being. Nursing is the practice of caring for individuals to maintain or improve their health. Nurses play a vital role in patient care, health education, and support, making them essential to the healthcare system.</p>
                        </div>
                        <div className="project1 flex flex-col justify-center md:w-[500px] w-[600px] " data-aos="fade-up">
                            <h1 className='text-xl text-center '>Cybersecurity & Networking
                            </h1>
                            <p className='text-justify'>Networking connects computers and devices to share data, while Cybersecurity protects these networks from threats and attacks. Together, they ensure safe, fast, and secure communication, which is critical for protecting data and maintaining trust in digital systems.</p>
                        </div>
                        <div className="project1 flex flex-col justify-center md:w-[500px] w-[600px] " data-aos="fade-up">
                            <h1 className='text-xl text-center '> Data & Analytics


                            </h1>
                            <p className='text-justify'>Data is raw information, while Analytics involves examining that data to find patterns, trends, and insights. Together, they help businesses make smarter decisions, improve performance, and predict future outcomes using facts instead of guesses.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-base-100 p-10   md:w-full w-[725px]">
                <div className="backdrop-blur-md bg-black/60 border-4 bg-no-repeat bg-cover border-white/30 rounded-2xl p-16 text-white shadow-xl w-[1000px] h-[700px] md:h-[600px] text-center " data-aos="flip-bottom" >
                    <h1 className="text-4xl font-bold my-5 text-white">Services</h1>
                    <p className="text-lg text-justify">
                        ➤ Our business is starting a large initiative that has the potential to reshape our field and the way we conduct business. We have focused on creating a ground-breaking product that responds to a critical market demand with a strong commitment to innovation and a forward-thinking strategy. <br /><br />
                        ➤ Being focused on delivering interactive, secure, and high performance. We are a team of brilliant young brains who knows the latest technologies, Skills, and trends to design and develop your requirements. <br />
                        <br />
                        ➤ We have discovered a gap that our initiative attempts to solve through thorough marketresearch and meticulous analysis. We are working towards quiz, assignments, thesis and dissertation in technology, finance, marketing, law, accounting, and other fields that will upend the current quo and offer our clients unmatched value by using our experience and cutting-edge technologies.
                    </p>
                </div>
            </div>


        </>

    )
}

export default Servicebox
