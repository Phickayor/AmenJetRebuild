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
        <a href="/">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            Home
          </li>
        </a>
        <a href="#services">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            Services
          </li>
        </a>
        <a href="#gallery">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            Gallery
          </li>
        </a>
        <a href="#reviews">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            Reviews
          </li>
        </a>
        <a href="#about">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            About Us
          </li>
        </a>
        <a href="#contact">
          <li className="hover:bg-primary2 p-2 hover:text-white rounded-lg">
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
