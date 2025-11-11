import React from "react";
import {
  FaGasPump,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const VehicleDetailsPage = () => {
  const vehicle = useLoaderData();

  if (!vehicle) return <p>Loading...</p>;

  return (
    <div className="text-center">
      <h1>Vehicle Details</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT PANEL — Floating Card */}
        <div className="lg:col-span-2 ">
          {/* Floating Car Card */}
          <div className="p-4 rounded-2xl shadow-xl">
            <img
              src={vehicle.coverImage}
              className="w-full rounded-xl object-cover"
            />

            <div className="my-5">
              <div className=" flex flex-row justify-start items-center gap-5">
                <h2 className="text-3xl text-left font-bold ">
                  {vehicle.vehicleName}
                </h2>
                <div className="btn-gradient px-3 py-1">
                  <p className="text-gray text-md">
                  {vehicle.category}
                </p>
                </div>
              </div>
              {/* Description */}
              <div className="text-left my-5">
                <p className="text-black text-md">{vehicle.description}</p>
              </div>
            </div>
          </div>

          

          <div className="flex flex-col justify-between items-center">
{/* Specifications Grid */}
          <div className="my-10 p-4 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Specifications</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <FaGasPump className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Fuel</p>
                <p className="font-semibold">{vehicle.fuelType}</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaUsers className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Seats</p>
                <p className="font-semibold">{vehicle.numberOfSeats}</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaStar className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Rating</p>
                <p className="font-semibold">{vehicle.ratings} ⭐</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaCalendarAlt className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Year</p>
                <p className="font-semibold">{vehicle.yearOfManufacture}</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaMapMarkerAlt className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Location</p>
                <p className="font-semibold">{vehicle.location}</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaGasPump className="text-[#8377ff] text-3xl" />
                <p className="mt-2 text-gray-300">Mileage</p>
                <p className="font-semibold">{vehicle.mileage}</p>
              </div>
            </div>
          </div>
            <div>
              <Link to="" className="w-full p-3 rounded-full text-white font-bold bg-gradient-to-r from-[#1c1c84] via-[#3b2ca8] to-[#6a1bce] shadow-lg hover:opacity-90 transition">
              Update</Link>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Rental Information</h2>

            <p>
              <span className="text-gray-300">Owner:</span> {vehicle.owner}
            </p>
            <p>
              <span className="text-gray-300">Email:</span> {vehicle.userEmail}
            </p>

            <p className="mt-3 text-xl font-semibold">
              Price:
              <span className="text-[#9ea0ff] ml-2">
                {vehicle.pricePerDay} BDT/day
              </span>
            </p>

            <p className="mt-2">
              Availability:
              <span className="ml-2 text-sm px-3 py-1 bg-green-600/60 rounded-full">
                {vehicle.availability}
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button className="w-full py-3 rounded-full text-white font-bold bg-gradient-to-r from-[#1c1c84] via-[#3b2ca8] to-[#6a1bce] shadow-lg hover:opacity-90 transition">
                Book Now
              </button>

              <button className="w-full py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
