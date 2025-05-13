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
 <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
    {/* Logo & Mobile Menu */}
    <div className="flex items-center">
      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden">
        <button tabIndex={0} className="btn btn-ghost p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white text-black rounded-box w-52"
        >
          {navItems}
        </ul>
      </div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        className="h-12 w-auto ml-2 sm:h-14 md:h-16 lg:h-20 object-contain"
      />
    </div>

    {/* Desktop Menu */}
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-semibold">
        {navItems}
      </ul>
    </div>
  </div>
</nav>



    </>
  )
}
export default Navbar
