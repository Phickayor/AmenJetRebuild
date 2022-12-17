import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const arrow = <FontAwesomeIcon icon={faAngleRight} />
  return (
    <div className="w-full bg-gray-800 absolute my-20">
      <img className="absolute z-10 w-full h-full opacity-30 " src=" https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="footer Background" />
      <div className="relative z-20 text-white border h-full grid grid-cols-2 lg:grid-cols-4 w-full space-y-5 space-x-5 ">
        <div className="m-5">
          <h1 className="text-3xl font-bold">Site Map</h1>
          <ul className="text-xl space-y-5 mt-4  font-semibold">
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#home">{arrow} Home</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#goals">{arrow} Goals</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#gallery">{arrow} Gallery</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#services">{arrow} Services</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2">
              <a href="#contact">{arrow} Contact</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Site Map</h1>
          <ul className="text-xl space-y-5 mt-4  font-semibold">
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#home">{arrow} Home</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#goals">{arrow} Goals</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#gallery">{arrow} Gallery</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#services">{arrow} Services</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2">
              <a href="#contact">{arrow} Contact</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Site Map</h1>
          <ul className="text-xl space-y-5 mt-4  font-semibold">
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#home">{arrow} Home</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#goals">{arrow} Goals</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#gallery">{arrow} Gallery</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#services">{arrow} Services</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2">
              <a href="#contact">{arrow} Contact</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Site Map</h1>
          <ul className="text-xl space-y-5 mt-4  font-semibold">
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#home">{arrow} Home</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#goals">{arrow} Goals</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#gallery">{arrow} Gallery</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2"><a href="#services">{arrow} Services</a></li>
            <li className="hover:cursor-pointer hover:border border-blue-400 rounded-xl hover:p-2">
              <a href="#contact">{arrow} Contact</a></li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Footer;
