import React from "react";

function NavBar() {
  return (
    <div
      className="sticky top-0 left-0 h-30 border-b flex z-30 justify-between backdrop-blur md:px-20 bg-white"
    >
      <h1 className=" text-4xl font-rubik p-5 text-blue-500 font-semibold">
        Amen Jet
      </h1>
      <ul className="hidden lg:flex font-krub  text-2xl justify-center mt-0 space-x-10 p-5">
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#home">Home</a>
        </li>
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#services">Services</a>
        </li>
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#about">About Us</a>
        </li>
        <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
