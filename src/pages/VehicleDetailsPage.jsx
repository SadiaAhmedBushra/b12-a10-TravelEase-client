import React, { useContext } from "react";
import {
  FaGasPump,
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaCalendarCheck,
} from "react-icons/fa";
import { IoIosSpeedometer, IoMdPricetag } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";
import { toast, ToastContainer } from "react-toastify";
import { MdEmail } from "react-icons/md";

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const vehicle = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBooking = async () => {
    if (!user?.email) {
      alert("Please Log In First!");
      return;
    }

    const bookingData = {
      vehicleId: id,
      vehicleName: vehicle.vehicleName,
      pricePerDay: vehicle.pricePerDay,
      image: vehicle.coverImage,
      userEmail: user.email,
      ownerEmail: vehicle.userEmail,
      ownerName: vehicle.owner,
      createdAt: new Date(),
    };

    const res = await fetch("https://travelease-server-alpha.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    if (data.success) toast.success("Vehicle deleted successfully");
    else toast.error("Failed to book this vehicle.");
  };

  return (
    <div className="">
      <h1 className="text-center">Vehicle Details</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 ">
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
                  <p className="text-gray text-md">{vehicle.category}</p>
                </div>
              </div>
              <div className="text-left my-5">
                <p className="text-base-content text-md">{vehicle.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="flex flex-col justify-between items-center">
            <div className="py-5 px-10 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                  <IoIosSpeedometer className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Mileage</p>
                  <p className="font-semibold">{vehicle.mileage}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <FaGasPump className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Fuel</p>
                  <p className="font-semibold">{vehicle.fuelType}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaMapMarkerAlt className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Location</p>
                  <p className="font-semibold">{vehicle.location}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaCalendarAlt className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Year</p>
                  <p className="font-semibold">{vehicle.yearOfManufacture}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaUsers className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Seats</p>
                  <p className="font-semibold">{vehicle.numberOfSeats}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <FaStar className="text-primary text-3xl" />
                  <p className="mt-2 text-gray-300">Rating</p>
                  <p className="font-semibold">{vehicle.ratings}</p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold my-4">Rental Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <FaUserTie className="text-primary text-3xl" />
                    <p>
                      <span className="text-gray-300"></span> {vehicle.owner}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MdEmail className="text-primary text-3xl" />
                    <p>
                      <span className="text-gray-300"></span>
                      {vehicle.userEmail}
                    </p>
                  </div>
                  <div className="flex flex-row  items-center gap-2">
                    <IoMdPricetag className="text-primary text-3xl" />
                    <p className=" text-xl font-semibold">
                      <span className="">{vehicle.pricePerDay} BDT/day</span>
                    </p>
                  </div>

                  <div className="flex flex-row  items-center gap-2">
                    <FaCalendarCheck className="text-primary text-3xl" />
                    <p className="mt-2">
                      <span
                        className={`text-sm px-3 py-1 rounded-full text-white ${
                          vehicle.availability === "Available"
                            ? "bg-green-500"
                            : vehicle.availability === "Booked"
                            ? "bg-red-500"
                            : "bg-gray-400"
                        }`}
                      >
                        {vehicle.availability}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    onClick={handleBooking}
                    className="w-full py-3 rounded-full text-white font-bold bg-gradient-to-r from-[#1c1c84] via-[#3b2ca8] to-[#6a1bce] shadow-lg hover:opacity-90 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default VehicleDetailsPage;
