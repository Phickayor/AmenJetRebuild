import React from "react";

function Home() {
  return (
    <div id="home" className="flex flex-wrap flex-grow top-0">
      <div className="bg-gray-100 md:order-2 max-h-screen overflow-hidden md:w-1/2 border">
        <img
          className="w-full h-full md:h-fit "
          src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="doctor"
        />
      </div>
      <div className="md:w-1/2 w-full p-10 md:order-1 flex justify-center flex-col border">
        <h1 className="font-serif text-6xl ">AMEN JET MEDICAL SERVICES</h1>
        <p className="font-mono p-5 text-lg ">
          Bringing quality health care to your door step.
        </p>
        <button className="border p-10 text-white text-xl w-80 self-center bg-blue-500 rounded-3xl">
          Book Appointment
        </button>
      </div>
      <svg
        className="order-3 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L120,101.3C240,107,480,117,720,149.3C960,181,1200,235,1320,261.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
