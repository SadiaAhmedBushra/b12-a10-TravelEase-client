import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./ErrorPage";

const AddVehicles = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      vehicleName: e.target.vehicleName.value,
      owner: e.target.owner.value,
      category: e.target.category.value,
      pricePerDay: Number(e.target.pricePerDay.value),
      location: e.target.location.value,
      availability: e.target.availability.value,
      description: e.target.description.value,
      fuelType: e.target.fuelType.value,
      mileage: e.target.mileage.value,
      numberOfSeats: Number(e.target.numberOfSeats.value),
      ratings: Number(e.target.ratings.value),
      yearOfManufacture: e.target.yearOfManufacture.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email,
      createdAt: new Date(),
    };

    fetch("https://travelease-server-alpha.vercel.app/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Vehicle added successfully!");
        console.log(data);

        e.target.reset();

        setTimeout(() => {
          navigate("/my-vehicles");
        }, 1500);
      })
      .catch((err) => {
        toast.error("Unexpected Error Occurred!");
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="text-center">Add Vehicle</h1>
      <div className="w-11/12 mx-auto p-6 bg-base-100 rounded shadow-md mb-20">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <h2 className="text-2xl text-primary font-bold mb-4">
                Add Vehicle Information
              </h2>

              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="vehicleName"
                >
                  Vehicle Name
                </label>
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  required
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="1"
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6 md:col-span-3 lg:col-span-3">
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select Category</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Electric">Electric</option>
                      <option value="Van">Van</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="numberOfSeats"
                    >
                      Number of Seats
                    </label>
                    <input
                      type="number"
                      id="numberOfSeats"
                      name="numberOfSeats"
                      min="1"
                      required
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="col-span-6 md:col-span-3 lg:col-span-3">
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="fuelType"
                    >
                      Fuel Type
                    </label>
                    <select
                      id="fuelType"
                      name="fuelType"
                      required
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="mileage"
                    >
                      Mileage (km/l or km/kWh)
                    </label>
                    <input
                      type="number"
                      id="mileage"
                      name="mileage"
                      min="0"
                      step="0.1"
                      required
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-3">
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="yearOfManufacture"
                    >
                      Year Of Manufacture
                    </label>
                    <input
                      type="year"
                      id="yearOfManufacture"
                      name="yearOfManufacture"
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="ratings"
                    >
                      Ratings (0 to 5)
                    </label>
                    <input
                      type="number"
                      id="ratings"
                      name="ratings"
                      min="0"
                      max="5"
                      step="0.1"
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="coverImage"
                    >
                      Cover Image URL
                    </label>
                    <input
                      type="url"
                      id="coverImage"
                      name="coverImage"
                      className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <h2 className="text-2xl text-primary font-bold mb-4">
                Add Owner and Rental Information
              </h2>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="owner">
                  Owner
                </label>
                <input
                  type="text"
                  id="owner"
                  name="owner"
                  required
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="userEmail">
                  Owner Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={user?.email || "Unknown"}
                  readOnly
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="pricePerDay"
                >
                  Price Per Day (BDT)
                </label>
                <input
                  type="number"
                  id="pricePerDay"
                  name="pricePerDay"
                  min="0"
                  required
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="availability"
                >
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full border border-gray-300 rounded p-2  text-black dark:bg-gray-800 dark:text-white"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-6">
            <button type="submit" className=" btn-gradient">
              Add Vehicle
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddVehicles;
