import React, { useState } from "react";
import { faBars, faBookOpen, faClose, faHome, faPhotoFilm, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";

function NavBar() {

  const [sideBarWidth, setSideBarWidth] = useState("0%");
  const close = (
    <FontAwesomeIcon
      icon={faClose}
      className="py-3 px-4 text-4xl font-semibold text-textcolor "
    />
  );
  const harmburger = (
    <FontAwesomeIcon icon={faBars} className="p-4 text-4xl " />
  );

  function toggleSideBar() {
    if (sideBarWidth === "0%") {
      setSideBarWidth("100%");
    } else {
      setSideBarWidth("0%");
    }
  }
  return (
    <div className="sticky top-0 left-0  border-b flex z-30 justify-between backdrop-blur px-5 md:px-5">
      <h1 className=" text-4xl font-rubik p-2 self-center text-blue-500 font-semibold">
        Amen Jet
      </h1>
      <ul className="hidden lg:flex font-krub text-2xl justify-center mt-0 space-x-10 p-3">
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
      <div className="lg:hidden ">
        <div
          className=" self-center cursor-pointer"
          onClick={() => toggleSideBar()}
        >
          {harmburger}
        </div>
        <div
          className="absolute duration-[1.5s] right-0 top-0 l h-screen fixed overflow-y-auto bg-primary2 text-white flex-col flex"
          style={{ width: sideBarWidth }}
        >
          <div className=" py-5 ">
            <div className="flex justify-between sticky top-0 backdrop-blur">
              <div className='flex space-x-2 ml-2 my-2 self-center'>
                <img src='/favicon.ico' alt="" className="sm:block hidden h-20" />
                <h1 className='text-3xl md:text-4xl font-rubik self-center font-semibold'>Amen Jet</h1>
              </div>
              <button
                className="mt-2 mr-5 self-center bg-white text-primary2 rounded-full w-16 h-16"
                onClick={() => toggleSideBar()}
              >
                {close}
              </button>
            </div>
            <div className="flex flex-col text-left mt-10 mx-auto w-11/12 font-light text-2xl space-y-10">
              <a href="#home" onClick={() => toggleSideBar()} className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900 px-5 rounded-xl py-4">
                <FontAwesomeIcon icon={faHome} className="self-center" />
                <h3 className="self-center" >
                  Home
                </h3>
              </a>
              <a href="#about" className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900" onClick={() => toggleSideBar()}>
                <FontAwesomeIcon icon={faBookOpen} className="self-center" />
                <h3 className="self-center" >
                  About
                </h3>
              </a>
              <a href="#services" className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900" onClick={() => toggleSideBar()}>
                <FontAwesomeIcon icon={faServicestack} className="self-center" />
                <h3 className="self-center" >
                  Services
                </h3>
              </a>
              <a href="#gallery" className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900" onClick={() => toggleSideBar()}>
                <FontAwesomeIcon icon={faPhotoFilm} className="self-center" />
                <h3 className="self-center" >
                  Gallery
                </h3>
              </a>
              <a href="#reviews" className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900" onClick={() => toggleSideBar()}>
                <FontAwesomeIcon icon={faQuoteRight} className="self-center" />
                <h3 className="self-center" >
                  Reviews
                </h3>
              </a>
              <a href="#contact" className="flex space-x-4 px-5 rounded-xl py-4 hover:bg-gray-900" onClick={() => toggleSideBar()}>
                <FontAwesomeIcon icon={faContactCard} className="self-center" />
                <h3 className="self-center" >
                  Contact
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
