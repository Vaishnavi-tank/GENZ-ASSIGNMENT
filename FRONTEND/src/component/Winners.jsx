import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Winners = () => {
  return (
    <>
    <Navbar/>
    <div
  className="md:pt-16 md:pb-14 bg-black/80 bg-cover bg-no-repeat w-full md:min-h-screen h-[900px] flex items-center justify-center px-4"
  style={{ backgroundImage: "url('/winners.jpg')" }}
>
  <div className="overflow-auto max-h-[80vh] w-full max-w-5xl backdrop-blur-md border-4 border-white/30 rounded-lg shadow-2xl">
    <table className="w-full text-center text-black bg-white/90 rounded-lg">
      <thead>
        <tr className="bg-blue-300 text-2xl font-bold text-black">
          <th className="border border-gray-300 px-4 py-3">Rank</th>
          <th className="border border-gray-300 px-4 py-3">Name</th>
          <th className="border border-gray-300 px-4 py-3">Referral No.</th>
          <th className="border border-gray-300 px-4 py-3">Country</th>
        </tr>
      </thead>
      <tbody className="text-lg">
        <tr className="hover:bg-yellow-100 transition-all">
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Jainik Patel</td>
          <td className="border px-4 py-2">14</td>
          <td className="border px-4 py-2">Australia</td>
        </tr>
        <tr className="hover:bg-yellow-100 transition-all">
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Sidhant Kumar</td>
          <td className="border px-4 py-2">12</td>
          <td className="border px-4 py-2">United Kingdom</td>
        </tr>
        <tr className="hover:bg-yellow-100 transition-all">
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Akhil Sam</td>
          <td className="border px-4 py-2">11</td>
          <td className="border px-4 py-2">Germany</td>
        </tr>
        <tr className="hover:bg-yellow-100 transition-all">
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">Vishal Gupta</td>
          <td className="border px-4 py-2">10</td>
          <td className="border px-4 py-2">United Kingdom</td>
        </tr>
        <tr className="hover:bg-yellow-100 transition-all">
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">Priyanka B</td>
          <td className="border px-4 py-2">07</td>
          <td className="border px-4 py-2">New Zealand</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    <Footer/>
    </>
  )
}

export default Winners
