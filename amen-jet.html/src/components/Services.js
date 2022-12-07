import React from "react";

function Services() {
  const services = [
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Mental Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Mobile Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Home Embambling",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6753471/pexels-photo-6753471.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Ambulance Services",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6753471/pexels-photo-6753471.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Geriatric Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Recruitment of registered nurses",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];
  return (
    <div id="services" className="mx-auto my-0 w-4/5 ">
      <h1 className="text-4xl font-mono text-blue-500">Services</h1>
      <p className="text-lg font-mono">
        The things we do to bring smiles to the community
      </p>

      <div className="flex justify-between mt-10 w-full  flex-wrap">
        {services.map((service) => (
          <div
            key={service.name}
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-96 bg-white m-2 hover:p-10 shadow-2xl p-5 rounded-3xl"
          >
            <img
              src={service.image}
              alt={service.name + "image"}
              className="rounded-3xl h-52 w-full"
            />
            <h1 className="text-4xl text-blue-500 font-serif w-full">
              {service.name}
            </h1>
            <p className="text-lg font-mono w-full">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
