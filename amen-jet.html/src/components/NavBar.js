import React from "react";

function NavBar() {
  return (
    <div class="fixed w-screen h-30 border bg-white">
      <h1 className="absolute p-5 text-3xl font-serif text-blue-500">
        Amen Jet
      </h1>
      <ul className=" hidden inline text-lg lg:flex font-mono justify-center mt-0 space-x-10 p-5">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#goals">Goals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
