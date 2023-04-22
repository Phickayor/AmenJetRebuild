import React, { useEffect, useState } from "react"
function Home() {
  var backgrounds = ["/assets/home.jpg", "/assets/hero.jpg", "/assets/Amen Jet/image1.jpg", "/assets/Amen Jet/image7.jpg", "/assets/Amen Jet/image3.jpg"]
  var quotes = ["The greatest wealth is health", "Invest in your health today or pay for your illness tomorrow", "Good health and good sense are two of life's greatest blessings",
    "Take care of your body. It's the only place you have to live"]
  var [currentCount, setcurrentCount] = useState(0)
  function counter() {
    if (currentCount < 4) {
      setcurrentCount(currentCount++)
    }
    else {
      setcurrentCount(0)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      counter()
    }, 10000);
    return () => clearInterval(interval)
  })


  return (
    <div className="relative bg-slate-900">
      <img src={backgrounds[currentCount]} alt="" className="w-full left-0 absolute h-full object-cover opacity-50" />
      <div className="z-20 relative flex flex-col justify-center lg:w-10/12 lg:mx-auto mx-2 space-y-5 text-white h-[550px] ">
        <p className='bg-[#041C3780]  self-center block px-2 py-1 border-l-4 border-primary1'>Amen Jet Medical Services</p>
        <h5 className="font-rubik md:text-7xl text-5xl font-bold lg:leading-[71.1px]">{quotes[currentCount]} </h5>
        <button className="btns text-primary2 font-semibold bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] after:bg-white">Explore More</button>
      </div>
    </div>
  )
}
export default Home