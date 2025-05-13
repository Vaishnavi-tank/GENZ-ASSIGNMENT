import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <footer className="bg-base-100 text-base-content w-full p-6 shadow-inner">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    {/* Brand Name */}
    <div>
      <h1 id="footer" className="text-xl font-bold text-blue-400">GenZ Assignments</h1>
    </div>

    {/* Social Media Icons */}
    <div className="flex gap-6 text-xl">
      <a href="https://www.instagram.com/genz_assignment" target="_blank" rel="noopener noreferrer" className="hover:text-white text-blue-400 transition">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/company/india-business-ventures/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-blue-400 transition">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#" className="hover:text-white text-blue-400 transition">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="hover:text-white text-blue-400 transition">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-4 text-center text-lg text-gray-600">
    <p>© {new Date().getFullYear()} GenZ Assignment . All rights reserved.</p>
  </div>
</footer>


    </>
  )
}

export default Footer

