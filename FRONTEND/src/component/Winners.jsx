import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Winners = () => {
  return (
    <>
    <Navbar/>
      <div className="md:pt-16 md:pb-14 bg-black/80 bg-cover bg-no-repeat md:w-full w-[725px] md:min-h-screen h-[900px]" style={{backgroundImage:"url('/winners.jpg')"}}>
      <table className="m-auto   md:w-[750px] w-[725px] min-h-[80vh]  border-4 border-black/15 shadow-xl backdrop-blur-md border-gray-300 ">
        <thead className=''>
          <tr className="bg-blue-300 font-bold text-2xl">
            <th className='border border-gray-300 px-4 py-2'>Rank</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Refferal No.</th>
            <th className="border border-gray-300 px-4 py-2">Country</th>
          </tr>
        </thead>
        <tbody className='text-black text-lg'>
        <tr  className="">
                <td className="border border-gray-300 px-4">1</td>
              <td className="border border-gray-300 px-4 py-2">Jainik Patel</td>
              <td className="border border-gray-300 px-4 py-2">14</td>
              <td className="border border-gray-300 px-4 py-2">Australia</td>
            </tr>
            <tr  className="">
                <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Sidhant Kumar</td>
              <td className="border border-gray-300 px-4 py-2">12</td>
              <td className="border border-gray-300 px-4 py-2">United Kingdom</td>
            </tr><tr  className="">
            <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Akhil Sam</td>
              <td className="border border-gray-300 px-4 py-2">11  </td>
              <td className="border border-gray-300 px-4 py-2">Germany</td>
            </tr><tr  className="">
            </tr>
            <tr>
            <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">Vishal Gupta</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">United Kingdom</td></tr><tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">Priyanka B</td>
              <td className="border border-gray-300 px-4 py-2">07</td>
              <td className="border border-gray-300 px-4 py-2">Newzealand</td></tr>
            {/* 
             */}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  )
}

export default Winners
