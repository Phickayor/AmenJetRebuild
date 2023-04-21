import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {

  const email = <FontAwesomeIcon icon={faEnvelope} className="text-primary1 text-2xl p-4" />
  const phone = <FontAwesomeIcon icon={faPhone} className="text-primary1 text-2xl p-4" />
  return (
    <div className="mt-10">
      <img src='https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=5000' className='h-52 w-full object-cover' alt="Water Container" />

      <div className='bg-primary2 flex flex-wrap justify-between px-4 md:px-5 py-5 text-white text-lg'>
        <div className='md:px-5 md:w-1/3 my-5 md:my-0 order-3 md:order-1 space-y-4'>
          <div className='flex'>
            <img src='/favicon.ico' alt="" className="h-20" />
            <h1 className='text-4xl font-rubik p-5 font-semibold'>Amen Jet</h1>
          </div>
          <p className='text-left text-xl font-krub'>
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </p>
          <ul className='flex gap-3 flex-wrap md:space-y-0  self-center my-6 font-krub'>
            <li className="flex space-x-4">
              <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{email}</h1>
              <h3 className='self-center'>amenjet@gmail.com</h3>
            </li>
            <li className="flex space-x-4">
              <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{phone}</h1>
              <h3 className='self-center'> (+234) 905 303 318 </h3>
            </li>
          </ul>
        </div>

        <div className='md:w-1/3 w-1/2 order-1 md:order-2 '>
          <h1 className='text-3xl font-semibold font-rubik pb-5'>Quick Links</h1>
          <ul className='space-y-4 font-krub'>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Gallery</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='md:w-1/3 w-1/2 order-2 md:order-3'>
          <h1 className='text-3xl font-semibold font-rubik pb-5'>Support</h1>
          <ul className='space-y-4 font-krub'>
            <li>Privacy and Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div >

      <div className='flex font-krub justify-center bg-primary2 py-5 text-white border-t border-[#8388A7]'>
        <p>&copy; Amen Jet Medical Services</p>
      </div>
    </div >
  )
}

export default Footer 