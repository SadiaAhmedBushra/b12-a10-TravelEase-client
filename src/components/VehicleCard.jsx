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
import { Link, useLoaderData } from "react-router";

const VehicleCard = ({ vehicle }) => {
// const vehicle = useLoaderData();  
// const data = useLoaderData();
// const vehicle = data.result;  


  // const data = useLoaderData();
  // const vehicle = data.result;
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
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

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-primary">
          {vehicle.vehicleName}
        </h2>

        {/* INFO GRID (PERFECTLY ALIGNED) */}
        {/* <div className="grid grid-cols-3 gap-y-4 text-gray-700 text-sm font-medium"> */}
            <div className="w-full mx-auto">
                <div className="grid grid-cols-3 gap-y-4  text-sm font-medium ">

          {/* Mileage */}
          <div className="flex items-center gap-2 justify-start">
            <FaTachometerAlt className="text-primary" />
            <span>{vehicle.mileage}</span>
          </div>

      {/* Seats */}
          <div className="flex items-center gap-2 justify-start">
            <FaUsers className="text-primary" />
            <span>{vehicle.numberOfSeats} seats</span>
          </div>


          {/* Fuel */}
          <div className="flex items-center gap-2 justify-start">
            <FaGasPump className="text-primary" />
            <span>{vehicle.fuelType}</span>
          </div>
          
    


          {/* Year */}
          <div className="flex items-center gap-2 justify-start">
            <FaCalendarAlt className="text-primary" />
            <span>{vehicle.yearOfManufacture}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 justify-start">
            <FaRegStar className="text-primary" />
            <span>{vehicle.ratings}</span>
          </div>

                    {/* Location */}
          <div className="flex items-center gap-2 justify-start">
            <FaLocationDot className="text-primary" />
            <span>{vehicle.location}</span>
          </div>
        </div>
            </div>

        <hr className="border-gray-200 my-4" />

        <div className="flex flex-col gap-3">
          <button className="px-8 py-3 bg-[#1c1c84] text-white rounded-full text-lg hover:bg-[#dcdcdc] font-bold hover:text-primary transition">
            {vehicle.pricePerDay} BDT / day
          </button>

            <Link to={`/vehicledetails/${vehicle._id}`} className="w-full py-2 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
