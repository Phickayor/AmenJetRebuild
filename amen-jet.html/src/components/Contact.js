import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Contact() {
  const email = <FontAwesomeIcon icon={faEnvelope} className="text-primary1 text-2xl p-4" />
  const phone = <FontAwesomeIcon icon={faPhone} className="text-primary1 text-2xl p-4" />
  return (
    <div id="contact" className='target:pt-20 bg-primary2 py-10 text-white'>
      <div className='block lg:flex gap-10 w-11/12 mx-auto'>

        <div className='font-rubik'>
          <p className='bg-secondary1 text-headingfont inline px-2 py-1 border-l-4 border-primary1'>What We Do</p>
          <h1 className='text-3xl md:text-4xl font-rubik lg:text-5xl my-4 font-semibold'>Get in touch with us</h1>
          <p className='font-krub text-lg lg:text-xl'>
            Leverage agile frameworks to provide a robust synopsis
            for strategy foster collaborative
            thinking to further the overall value.
          </p>
          <ul className=' my-5 block space-y-5  '>

            <li className="flex space-x-2 justify-center  ">
              <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{email}</h1>
              <div className='self-center'>
                amenjet@gmail.com
              </div>
            </li>
            <li className="flex space-x-2 justify-center">
              <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{phone}</h1>
              <div className='self-center'>
                (+234) 902 530 3318
              </div>
            </li>
          </ul>
        </div>
        <form className='w-full my-10 space-y-8 font-poppins '>
          <div className='flex space-x-5'>
            <input type="text" placeholder="Your name*" className='bg-inherit border rounded-lg px-5 p-3 w-1/2' />
            <input type="text" placeholder="Email*" className='bg-inherit border px-5 rounded-lg  p-3 w-1/2' />
          </div>
          <div className='flex space-x-5'>
            <input type="text" placeholder="Phone Number*" className='bg-inherit border rounded-lg  px-5 p-3 w-1/2' />
            <input type="text" placeholder="City*" className='bg-inherit border rounded-lg  px-5 p-3 w-1/2' />
          </div>
          <textarea className='bg-inherit border px-5 rounded-lg p-4 w-full h-40' placeholder='Your Message*' />
          <button className="px-10 py-4 text-primary2 font-semibold bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">Submit Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact