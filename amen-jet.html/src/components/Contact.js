import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  return (
    <div id="contact" className="mt-20">
      <div className="mx-auto my-0 w-4/5">
        <h1 className="text-4xl font-mono  text-blue-500">Contact</h1>
        <p className="text-lg font-mono mb-10">You can reach us </p>
      </div>

      <div className="my-0 mx-auto w-4/5 flex flex-wrap md:flex-nowrap justify-center">
        <form className=" bg-white text-black w-full shadow-2xl p-5 rounded-3xl border-blue-500 border-4">
          <label className="p-5 font-mono text-3xl">E-mail</label>
          <br />
          <input
            type="email"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Your Mail..."
            required
          />
          <br />
          <label className="p-5 font-mono text-3xl">Message</label>
          <br />
          <textarea
            type="text"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Drop your message here..."
            required
          />
          <button className="lg:w-2/4 m-5 w-9/12 bg-white text-black text-center focus:outline-none text-2xl shadow-2xl p-5 font-mono rounded-3xl border-4 border-black hover:bg-blue-700 hover:text-white hover:lg:w-9/12">
            Submit
          </button>
        </form>

        <ul className="  bg-white m-5 text-black rounded-2xl flex justify-center md:flex-col border-4 border-blue-500">
          <a href="https://wa.me/+2348056505476">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500">
              {whatsapp}
            </li>
          </a>
          <a href=".">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500">
              {instagram}
            </li>
          </a>
          <a href="tel:+2349025303318">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500">
              {phone}
            </li>
          </a>
          <a href="mailto:jetawotemitope@gmail@gmail.com">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500">
              {mail}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
