import React from "react";

function NavBar() {
  return (
    <div
      className="sticky top-0 left-0 h-30 border-b flex z-30 justify-between backdrop-blur px-20"
    >
      <h1 className=" text-4xl font-serif p-5 text-blue-500 font-semibold">
        Amen Jet
      </h1>
      <ul className="hidden lg:flex  text-lg lg:text-xl font-mono justify-center mt-0 space-x-10 p-5">
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#home">Home</a>
        </li>
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#services">Services</a>
        </li>
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#goals">Goals</a>
        </li>
        <li className="hover:border-b-4 hover:border-blue-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
