import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddVehicles = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      vehicleName: e.target.vehicleName.value,
      owner: e.target.owner.value,
      category: e.target.category.value,
      pricePerDay: e.target.pricePerDay.value,
      location: e.target.location.value,
      availability: e.target.availability.value,
      description: e.target.description.value,
      fuelType: e.target.fuelType.value,
      mileage: e.target.mileage.value,
      numberOfSeats: e.target.numberOfSeats.value,
      ratings: e.target.ratings.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email || "Unknown",
    };

    fetch("http://localhost:3000/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Vehicle details submitted successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error Message:", error);
        alert("An unexpected error occurred while submitting vehicle details.");
      });
  };

  return (
    <div>
      <h1 className="text-center">Add Vehicle</h1>
      <div className="w-11/12 mx-auto p-6 bg-white rounded shadow-md mb-20">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <h2 className="text-2xl text-primary font-bold mb-4">Add Vehicle Information</h2>
              {/* Vehicle Name */}
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
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* Description */}
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
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
              </div>

              <div className=" grid grid-cols-6 gap-3">
                <div className="col-span-3">
                  {/* Category */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option value="">Select Category</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Electric">Electric</option>
                      <option value="Van">Van</option>
                    </select>
                  </div>

                  {/* Number of Seats */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Fuel Type */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Mileage */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-6 gap-3">
                <div className="col-span-3">
                  {" "}
                  {/* Ratings */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  {" "}
                  {/* Cover Image URL */}
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
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <h2 className="text-2xl text-primary font-bold mb-4">
                Add Owner and Rental Information
              </h2>
              {/* Owner */}
              <div>
                <label className="block mb-1 font-semibold" htmlFor="owner">
                  Owner
                </label>
                <input
                  type="text"
                  id="owner"
                  name="owner"
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* User Email (Read Only) */}
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
                  className="w-full border border-gray-300 rounded p-2 bg-gray-100"
                />
              </div>

              {/* Price Per Day */}
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
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block mb-1 font-semibold" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* Availability */}
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
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-[#1c1c84] text-white rounded-full text-lg hover:bg-[#dcdcdc] font-bold hover:text-primary transition"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicles;
