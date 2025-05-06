import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
      <footer className=" text-center  bg-base-100 text-base-content md:w-full  p-4 w-[720px]">
        <div className='flex justify-between'>
          <div >
            <h1 id="footer" className='text-xl font-bold text-blue-300'>GenZ Assignments</h1>
          </div>
          <div className="flex justify-center  gap-10 pt-0">
            <a href="https://www.instagram.com/genz_assignment" target='_blank' className='hover:text-white text-blue-300 fill-current text-xl'>
              <FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/india-business-ventures/" className='hover:text-white text-blue-300 text-xl'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className='hover:text-white text-blue-300 text-xl'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className='hover:text-white text-blue-300 text-xl'><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
        <aside >
          <p className=' text-xl'>Copyright © {new Date().getFullYear()} - All right reserved by GenZ Assignment pvt Ltd</p>
        </aside>
      </footer>

    </>
  )
}

export default Footer

