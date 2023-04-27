import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import reviews from '../utils/reviews.json'
import { useState } from 'react'
function Reviews() {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [bgColor, setBgColor] = useState("bg-secondary1")
  const [textColor, settextColor] = useState("text-black")
  const left = <FontAwesomeIcon icon={faArrowLeft} className="text-4xl p-2.5" />
  const right = <FontAwesomeIcon icon={faArrowRight} className="text-4xl p-2.5 text-white" />
  function PositionIncrease() {
    if (currentPosition < reviews.length - 1) {
      setCurrentPosition(currentPosition + 1)
      // alert(reviews.length)
      if (bgColor !== "bg-primary2" && textColor !== "text-white") {
        setBgColor("bg-primary2")
        settextColor("text-white")
      }
      else {
        setBgColor("bg-secondary1")
        settextColor("text-black")
      }
    }
    else {
      setCurrentPosition(reviews.length - 1)
    }
  }
  function PositionDecrease() {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1)
      if (bgColor !== "bg-secondary1" && textColor !== "text-black") {
        setBgColor("bg-secondary1")
        settextColor("text-black")
      }
      else {
        setBgColor("bg-primary2")
        settextColor("text-white")
      }
    }
    else {
      setCurrentPosition(0)
    }
  }
  return (
    <div id='reviews' className='mx-auto md:w-9/12 py-5 md:py-10'>
      <div className='font-rubik text-headingfont px-2 md:px-10 my-5 space-y-5'>
        <p className='bg-secondary1 inline px-2 py-1 border-l-4 border-prima  ry1'>Testimonials</p>
        <div className='md:flex justify-between'>
          <h1 className='text-3xl md:text-4xl font-semibold py-2 '>What Our Customers Say</h1>
          <div className="flex space-x-10 justify-center">
            <div className='rounded-full w-14 h-14 bg-primary1 self-center cursor-pointer' onClick={PositionDecrease}>{left}</div>
            <div className='rounded-full w-14 h-14 bg-gray-800 self-center cursor-pointer' onClick={PositionIncrease}>{right}</div>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:pt-10 pt-5 md:pb-20 pb-10 w-11/12 mx-auto'>
        <div className='md:w-1/2 bg-secondary1 p-10 w-full rounded-3xl md:rounded-r-none'>
          <div className='flex justify-between'>
            <div className='flex space-x-2'>
              <div className='self-center'>
                <h3 className='font-semibold font-headingfont font-rubik text-xl'>Kathleen Smith</h3>
                <p className='font-normal font-paragraphfont font-krub text-lg'>Fuel Company</p>
              </div>
            </div>

          </div>
          <p className='py-4 text-lg font-krub'>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          <div className='flex pt-5 space-x-2 justify-center'>
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
          </div>
        </div>
        <div className='w-1/2 bg-primary2 text-secondary1 p-10 rounded-3xl md:rounded-l-none'>
          <div className='flex justify-between'>
            <div className='flex space-x-2'>
              <div className='self-center'>
                <h3 className='font-semibold font-headingfont font-rubik text-xl'>John Martin</h3>
                <p className='font-normal font-paragraphfont font-krub text-lg'>Restoration Company</p>
              </div>
            </div>

          </div>
          <p className='py-4 text-lg font-krub'>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>

          <div className='flex pt-5 space-x-2 justify-center'>
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
            <img src="/assets/Star.png" alt='star' />
          </div>
        </div>
      </div>
      <div className={`md:hidden ${bgColor} ${textColor} p-10 mx-auto w-11/12 rounded-3xl`}>
        <div className='flex justify-between'>
          <div className='flex space-x-2'>
            <div className='self-center'>
              <h3 className='font-semibold font-headingfont font-rubik text-xl'>{reviews[currentPosition].name}</h3>
              <p className='font-normal font-paragraphfont font-krub text-lg'>{reviews[currentPosition].service}</p>
            </div>
          </div>

        </div>
        <p className='py-4 text-lg font-krub'>{reviews[currentPosition].review}</p>
        <div className='flex pt-5 space-x-2 justify-center'>
          <img src="/assets/Star.png" alt='star' />
          <img src="/assets/Star.png" alt='star' />
          <img src="/assets/Star.png" alt='star' />
          <img src="/assets/Star.png" alt='star' />
          <img src="/assets/Star.png" alt='star' />
        </div>
      </div>
    </div>
  )
}

export default Reviews