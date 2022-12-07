import React from "react";

function NavBar() {
  return (
    <div
      style={{ zIndex: 10, backdropFilter: "blur(1.094rem)" }}
      className="fixed w-screen h-30 border-b flex"
    >
      <h1 className=" lg:w-1/4  text-3xl font-serif p-5 text-blue-500">
        Amen Jet
      </h1>
      <ul className="hidden w-2/4 lg:flex  text-lg font-mono justify-center mt-0 space-x-10 p-5">
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
