import React from "react";

function Gallery() {
  return (
    <div className="w-10/12 mx-auto py-10">
      <div className='font-rubik text-headingfont px-10 my-5'>
        <p className='bg-secondary1 inline px-2 py-1 border-l-4 border-primary1'>Our Gallery</p>
        <h1 className='text-4xl font-semibold py-4'>With every <b className="text-blue-500 font-semibold">Click</b>, a <b className="font-semibold text-blue-500">Story</b> to tell</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/hero.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/home.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image2.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image3.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image4.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image5.jpg" alt="" />
          </div>
        </div>
        <div className="hidden md:grid gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image6.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image7.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image8.jpg" alt="" />
          </div>
        </div>
        <div className="hidden md:grid gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image9.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image1.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/assets/Amen Jet/image10.jpg" alt="" />
          </div>
        </div>
      </div>
      <a href="https://amenjet.pixieset.com/amenjetgallery/">
        <button className="btns my-5">Show More</button>
      </a>
    </div>

  );
}

export default Gallery;
