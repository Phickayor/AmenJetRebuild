import React from "react";

function Home() {
  return (
    <div className="flex flex-wrap flex-grow top-0">
      <div className="bg-gray-100 md:order-2 max-h-screen overflow-hidden md:w-1/2 border">
        <img
          className="w-full h-full md:h-fit "
          src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="doctor"
        />
      </div>
      <div className="md:w-1/2 w-full p-10 md:order-1 flex justify-center flex-col border">
        <h1 class="font-serif text-6xl ">AMEN JET MEDICAL SERVICES</h1>
        <p className="font-mono p-5 text-lg ">
          Bringing quality health care to your door step.
        </p>
        <button className="border p-5 text-white w-80 self-center bg-blue-500 rounded-3xl">
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
          fill-opacity="1"
          d="M0,320L17.1,272C34.3,224,69,128,103,80C137.1,32,171,32,206,37.3C240,43,274,53,309,80C342.9,107,377,149,411,149.3C445.7,149,480,107,514,85.3C548.6,64,583,64,617,64C651.4,64,686,64,720,96C754.3,128,789,192,823,186.7C857.1,181,891,107,926,101.3C960,96,994,160,1029,160C1062.9,160,1097,96,1131,58.7C1165.7,21,1200,11,1234,5.3C1268.6,0,1303,0,1337,16C1371.4,32,1406,64,1423,80L1440,96L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
