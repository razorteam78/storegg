import React from "react";

import { services } from "../data/data";

const Services = () => {
  return (
    <section id="services" className="text-center">
      <h2>It's Really That Easy to Win the Game</h2>

      <div className="text-left mt-10 grid gap-5 sm:grid-cols-3">
        {services.map((service, i) => (
          <div key={i}>
            <img src={service.image} />
            <h3 className="my-3">{service.title}</h3>
            <p className="text-indigo-900 font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
