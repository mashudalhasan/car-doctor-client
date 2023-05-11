import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-red-600">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-5 text-center">
        <button className="btn btn-outline text-red-500 border-red-500 hover:bg-red-500 hover:border-none">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
