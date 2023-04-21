import React from "react";
import services from "../utils/services.json"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
function Services() {
  return (
    <div id="goals" className="py-10 md:w-5/6 mx-auto">
      <div className='font-rubik text-headingfont md:px-10 px-5 my-5'>
        <p className='bg-secondary1 inline px-2 py-1 border-l-4 border-primary1'>Our Services</p>
        <h1 className='text-4xl font-semibold py-4'>Who we are, What we do</h1>
      </div>

      <div className="bg-secondary1 md:rounded-3xl">
        <div className='md:my-10 my-5'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.name}>
                <div className=' mx-auto md:flex block'>
                  <div className='md:w-1/2 self-center order-2 text-left space-y-8  p-5'>
                    <h1 className="text-4xl font-semibold font-rubik text-blue-500">{service.name}</h1>
                    <p className='text-2xl font-krub '>{service.desc}</p>
                  </div>
                  <div className='md:w-1/2 order-1 h-max px-4 md:px-0'>
                    <img className=" h-auto max-w-full rounded-l-3xl md:rounded-r-none rounded-3xl" src={service.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Services;
