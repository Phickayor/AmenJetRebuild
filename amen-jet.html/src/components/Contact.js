import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1 className="text-4xl font-mono text-blue-500">Contact</h1>
      <p className="text-lg font-mono">You can reach us </p>

      <div
        // data-aos="fade-up"
        // data-aos-duration="3000"
        className="flex w-full m-10 flex-wrap sm:flex-nowrap justify-center "
      >
        <form className=" bg-white w-9/12 m-5 text-black shadow-2xl p-5 rounded-3xl border-blue-500 border-4">
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

        <ul className="  bg-white m-5 text-black rounded-2xl flex justify-center sm:flex-col border-4 border-blue-500">
          <a href="https://wa.me/+2348056505476">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500"></li>
          </a>
          <a href=".">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500"></li>
          </a>
          <a href="tel:+2349025303318">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500"></li>
          </a>
          <a href="mailto:jetawotemitope@gmail@gmail.com">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500"></li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
