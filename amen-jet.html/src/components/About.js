import React from 'react'
function About() {
  return (
    <div id="about" className='md:text-left bg-primary2 py-10 md:py-20 text-white'>
      <div className='gap-10 w-11/12 mx-auto flex justify-around'>
        <div className='w-full'>
          <p className='bg-secondary1 text-headingfont inline px-2 py-1 border-l-4 border-primary1'>About Us</p>
          <h1 className='text-3xl md:text-4xl font-rubik my-4 font-semibold'>Get to know us better</h1>
          <p className='font-krub text-lg lg:text-xl md:py-5'>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
        </div>
        <div className='hidden w-1/2 md:flex flex-col max-h-min self-center'>
          <img src='/assets/about.jpeg' alt="illustration" className='self-center h-96 object-cover rounded-3xl' />
        </div>



      </div>
    </div>
  )
}

export default About