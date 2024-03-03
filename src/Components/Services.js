import React from "react";
import { service1, service2 } from "../Utils&Constants/constants";

const Services = () => {
  return (
    <div id="services" className="text-green-500 mt-6  mx-6 py-10 bg-black bg-opacity-50 rounded-lg font-mono">
      <div className="flex justify-center text-4xl font-semibold">Services</div>

      <div className="mx-48 my-12">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            {service1.map((service) => {
              return (
                <div key={service.icon} className="flex py-6">
                  <img alt="" className="w-16" src={service.icon}></img>
                  <div className="mx-4 text-lg my-auto hover:text-green-300 hover:text-xl transition-all translate-300 hover:cursor-pointer">{service.about}</div>
                </div>
              );
            })}
          </div>

          <div className="col-span-6">
            {service2.map((service) => {
              return (
                <div key={service.icon} className="flex py-6">
                  <img alt="" className="w-16" src={service.icon}></img>
                  <div className="mx-4 text-lg my-auto hover:text-green-300 hover:text-xl transition-all translate-300 hover:cursor-pointer">{service.about}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
