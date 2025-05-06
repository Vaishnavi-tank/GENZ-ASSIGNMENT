import React from 'react'
import "../component/navbar.css"
const Navbar = () => {
  const navItems=(<>
  <li className="list-none"><a href="/">Home</a></li>
      <li><a href="/about">About  </a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="results">Results</a></li>
      <li><a href="/order">Order</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/megaOffer">Mega-Offers</a></li>
  </> )
  return (
    <>
    <nav className=' bg-black text-white md:flex-row md:flex flex-col justify-center md:justify-around gap-10 md:gap-0 p-4 h-16 md:h-14 opacity-1 fixed w-[750px] md:w-[1550px] opacity-100 m-0
    '>
      <div className="navbar-start h-[10px] m-0 p-0 ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    {/* <img src="" alt="" /> */}
    <img src="/logo.png" alt="" className='md:h-[140px] h-[75px] ' id="logo"/>
  </div>
  <div className="navbar-end space-x-3 ">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-xl  ">
        {navItems}
        </ul>
  </div>
  </div>
  </nav>
    </>
  )
}
export default Navbar
