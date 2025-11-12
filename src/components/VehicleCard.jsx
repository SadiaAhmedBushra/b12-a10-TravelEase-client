import React from "react";
import {
  FaGasPump,
  FaUsers,
  FaTachometerAlt,
  FaStar,
  FaCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col h-[480px]">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={vehicle.coverImage}
          alt={vehicle.vehicleName}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute bottom-0 left-0 px-4 py-2 rounded-r-full text-sm font-semibold ${
            vehicle.availability === "Available"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {vehicle.availability}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-row text-left justify-start items-start gap-4 mb-4">
            <h2 className="text-2xl font-extrabold text-primary">
              {vehicle.vehicleName}
            </h2>
            <div className="bg-gradient flex items-center gap-1 text-primary">
              <FaBangladeshiTakaSign className="text-gradient" />
              <p className="text-md font-medium">{vehicle.pricePerDay}</p>
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="grid grid-cols-3 gap-y-4 text-sm font-medium">
              <div className="flex items-center gap-2 justify-start">
                <FaTachometerAlt className="text-primary" />
                <span>{vehicle.mileage}</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <FaUsers className="text-primary" />
                <span>{vehicle.numberOfSeats} seats</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <FaGasPump className="text-primary" />
                <span>{vehicle.fuelType}</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <FaCalendarAlt className="text-primary" />
                <span>{vehicle.yearOfManufacture}</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <FaRegStar className="text-primary" />
                <span>{vehicle.ratings}</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <FaLocationDot className="text-primary" />
                <span>{vehicle.location}</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-4 w-full" />

        <div className="flex flex-col gap-3">
          <Link
            to={`/vehicledetails/${vehicle._id}`}
            className="w-full py-2 text-center btn-gradient"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
