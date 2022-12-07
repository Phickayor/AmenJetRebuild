import React from "react";

function Gallery() {
  return (
    <div id="gallery" className="mt-20">
      {/* <h1 className="text-4xl font-mono text-blue-500 mt-10">Gallery</h1>
      <p className="text-lg font-mono mb-10">
        Relive the moments with us. Memories lasts forever.
      </p> */}
      <div
        style={{ height: "35rem" }}
        className="w-full mt-10 bg-gray-900 flex justify-center rounded-3xl"
      >
        <img
          style={{ height: "35rem" }}
          className="w-fit rounded-3xl opacity-40"
          src="https://images.pexels.com/photos/6129207/pexels-photo-6129207.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Gallery-Background"
        />
        <div
          style={{ height: "35rem" }}
          className="absolute border flex justify-center text-white flex-col w-full "
        >
          <h1 className="text-5xl m-2 text-blue-200">Amen Jet Gallery</h1>
          <p className="text-lg font-mono mb-5">
            Take a journey with us to visit our memories one after the other.
          </p>
          <a href="https://amenjet.pixieset.com/amenjetgallery">
            <button className="border-2 p-5 rounded-3xl hover:border-blue-500 hover:w-1/2">
              View Gallery
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
