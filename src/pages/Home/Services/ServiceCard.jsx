import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-red-600">Price: ${price}</p>
          <Link to={`/book/${_id}`}>
            <button className="text-red-600 ">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
