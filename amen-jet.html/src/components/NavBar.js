import React from "react";

function NavBar() {
  return (
    <div class="sticky h-30 border bg-none">
      <h1 className="absolute p-5 text-3xl font-serif text-blue-500">
        Amen Jet
      </h1>
      <ul className=" hidden inline text-lg lg:flex font-mono justify-center mt-0 space-x-10 p-5">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Goals</li>
      </ul>
    </div>
  );
}

export default NavBar;
