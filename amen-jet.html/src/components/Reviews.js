import React, { useEffect } from "react";
import { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Reviews() {
  const [slideNumber, setSlideNumber] = useState(1);

  function slidesNumber() {
    if (window.innerWidth >= 1024) {
      setSlideNumber(3);
    } else if (window.innerWidth >= 600) {
      setSlideNumber(2);
    } else {
      setSlideNumber(1);
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("load", slidesNumber);
    window.addEventListener("resize", slidesNumber);
  });
  const reviews = [
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mobile Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Home Embambling",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    },
    {
      service: "Mental Nursing",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Fikayo Jetawo"
    }
  ];
  return (
    <div id="reviews" className="mt-20">
      <h1 className="text-4xl font-mono text-blue-500 ">Reviews</h1>
      <p className="text-lg font-mono mb-10">
        What people say about our services.
      </p>
      <Swiper
        className="my-0 mx-auto md:w-4/5"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slideNumber}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="border-blue-500 h-32 min-h-max p-10 border-2 text-center rounded-full"
          >
            <h1 className="text-3xl border-b p-5 border-white rounded-3xl font-serif">
              {review.service}
            </h1>
            <q className="text-lg font-mono w-full">{review.review}</q>
            <br />
            <cite className="block m-2">{"~" + review.author}</cite>
          </SwiperSlide>
        ))}
        <h1 className="mt-5 opacity-0">...</h1>
      </Swiper>
    </div>
  );
}
export default Reviews;
