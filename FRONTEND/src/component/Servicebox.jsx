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
        {/* Service cover */}
        <div className="relative w-full max-w-[1100px] mx-auto h-[400px] md:h-[600px] bg-black overflow-hidden">
  {/* Background Image */}
  <img
    src="https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-dark-mode-mockup-with-blank-space-for-placing-your-design-image_16007070.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
    <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold text-white animate__animated animate__bounceInDown">
      We Are Here for You
    </h1>
  </div>
</div>

            {/* projects */}
            {/* <div className='bg-base-100 md:w-full w-[725px] text-white'>
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
            </div> */}
<div className="bg-base-100 text-white px-4 py-10 w-full">
  <h1 className="text-center text-4xl font-bold mb-10" id="name" data-aos="fade-in-left">
    Projects
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    
    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Assignments and Quiz</h2>
      <p className="text-justify text-sm md:text-base">
        Welcome to our assignments-focused website! We have the tools and advice to enable you to succeed in assignment management whether you’re a student, professional, or someone trying to optimise work allocation within your organisation.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Finance and Accounting</h2>
      <p className="text-justify text-sm md:text-base">
        Best source for all financial and money management-related information. We can help you whether you’re an individual trying to better your personal finances or a company trying to improve your financial plans.
      </p>
    </div>

    <div className="bg-base-200 p-5 rounded-xl shadow-md project1" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Law</h2>
      <p className="text-justify text-sm md:text-base">
        Your complete one-stop web reference for all things legal. Whether you’re a lawyer, a student of the law, or someone seeking advice, our platform covers everything from commercial to criminal law.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Technology</h2>
      <p className="text-justify text-sm md:text-base">
        From Artificial Intelligence to programming in C++, Java, Python, and tools like Excel and SPSS, we cover it all to keep you up-to-date with the latest in tech.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Biology + Chemistry + Physics</h2>
      <p className="text-justify text-sm md:text-base">
        Explore DNA, ecosystems, physical laws, and more. Our resources include essays, videos, and interactive tools to engage your scientific curiosity.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Management & Business</h2>
      <p className="text-justify text-sm md:text-base">
        Learn about planning, organizing, and leadership to achieve business goals efficiently and effectively in competitive markets.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Health & Nursing</h2>
      <p className="text-justify text-sm md:text-base">
        Health is about well-being, and nursing is the practice of supporting it. Learn about vital nursing practices and patient care.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Cybersecurity & Networking</h2>
      <p className="text-justify text-sm md:text-base">
        Understand how networks connect and how to protect them. Learn fundamentals of digital safety and secure communication.
      </p>
    </div>

    <div className="project1 bg-base-200 p-5 rounded-xl shadow-md" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-center mb-2">Data & Analytics</h2>
      <p className="text-justify text-sm md:text-base">
        Learn how to transform raw data into smart decisions. Discover trends, patterns, and insights using modern analytics tools.
      </p>
    </div>

  </div>
</div>

{/* Services */}

<div className="flex items-center justify-center bg-base-100 px-4 py-10 w-full">
  <div
    className="backdrop-blur-md bg-black/60 border-4 border-white/30 rounded-2xl p-6 sm:p-10 md:p-14 text-white shadow-xl w-full max-w-5xl text-center"
    data-aos="flip-bottom"
  >
    <h1 className="text-3xl md:text-4xl font-bold my-4">Services</h1>
    <p className="text-base md:text-lg text-justify space-y-4">
      <span className="block mb-4">
        ➤ Our business is starting a large initiative that has the potential to reshape our field and the way we conduct business. We have focused on creating a ground-breaking product that responds to a critical market demand with a strong commitment to innovation and a forward-thinking strategy.
      </span>
      <span className="block mb-4">
        ➤ Being focused on delivering interactive, secure, and high performance. We are a team of brilliant young brains who knows the latest technologies, skills, and trends to design and develop your requirements.
      </span>
      <span className="block">
        ➤ We have discovered a gap that our initiative attempts to solve through thorough market research and meticulous analysis. We are working towards quiz, assignments, thesis, and dissertation in technology, finance, marketing, law, accounting, and other fields that will upend the current quo and offer our clients unmatched value by using our experience and cutting-edge technologies.
      </span>
    </p>
  </div>
</div>


        </>

    )
}

export default Servicebox
