import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleInfo } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const UpdateVehicleDetailsPage = () => {
  const { id: vehicleId } = useParams();

  const [vehicle, setVehicle] = useState({
    vehicleName: "",
    owner: "",
    category: "",
    yearOfManufacture: "",
    pricePerDay: "",
    location: "",
    availability: "Available",
    description: "",
    coverImage: "",
    fuelType: "",
    mileage: "",
    numberOfSeats: "",
    ratings: 0,
  });

  const [loading, setLoading] = useState(true);
  const [descChars, setDescChars] = useState(0);
  const maxDescLength = 200;
  const [redirecttoVDP, setRedirectToVDP] = useState(false);

  useEffect(() => {
    if (!vehicleId) return;

    const fetchVehicle = async () => {
      try {
        const res = await fetch(`https://travelease-server-alpha.vercel.app/vehicles/${vehicleId}`);
        if (!res.ok) throw new Error("Failed to fetch vehicle data");
        const data = await res.json();
        const fetchedVehicle = data.result;
        setVehicle(fetchedVehicle);
        setDescChars(fetchedVehicle.description?.length || 0);
      } catch (error) {
        toast.error("Failed to load vehicle data");
        <ErrorPage></ErrorPage>;
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "description" && value.length > maxDescLength) return;

    console.log(`Changing ${name} to`, value);

    setVehicle((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "description") setDescChars(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _id, ...vehicleData } = vehicle;

      const res = await fetch(`https://travelease-server-alpha.vercel.app/vehicles/${vehicleId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicleData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Update failed");
      }

      toast.success("Vehicle updated successfully!");
      setTimeout(() => setRedirectToVDP(true), 1200);
    } catch (error) {
      toast.error(error.message || "Failed to update vehicle");
    }
  };

  if (loading)
    return (
      <LoadingPage></LoadingPage>
    );

  if (redirecttoVDP) {
    return <Navigate to={`/vehicledetails/${vehicleId}`} />;
  }

  return (
    <div className="w-11/12 mx-auto flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 rounded-3xl p-8 shadow-2xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <img
              src={vehicle.coverImage}
              alt="Cover"
              className="rounded-xl shadow-md w-full object-cover mb-4"
            />
            <label
              htmlFor="coverImage"
              className="block text-primary font-semibold mb-1"
            >
              Change Cover Image
            </label>
            <input
              type="url"
              id="coverImage"
              name="coverImage"
              value={vehicle.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <div className="flex flex-row items-center gap-2 text-xl text-primary mb-3 border-b border-primary pb-1">
              <FaCircleInfo />
              <h3 className="font-semibold ">Basic Information</h3>
            </div>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Vehicle Name
              <input
                type="text"
                name="vehicleName"
                value={vehicle.vehicleName}
                onChange={handleChange}
                required
                placeholder="Toyota Corolla"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Owner
              <input
                type="text"
                name="owner"
                value={vehicle.owner}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Category
              <input
                type="text"
                name="category"
                value={vehicle.category}
                onChange={handleChange}
                required
                placeholder="Sedan"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Location
              <input
                type="text"
                name="location"
                value={vehicle.location}
                onChange={handleChange}
                required
                placeholder="Dhaka, Bangladesh"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Availability
              <select
                name="availability"
                value={vehicle.availability}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option>Available</option>
                <option>Not Available</option>
                <option>Under Maintenance</option>
              </select>
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex flex-row items-center gap-2 text-xl  text-primary mb-3 border-b border-primary pb-1">
              <IoSettings /> <h3 className="font-semibold ">Specifications</h3>
            </div>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Year of Manufacture
              <input
                type="number"
                name="yearOfManufacture"
                min="1900"
                max={new Date().getFullYear()}
                value={vehicle.yearOfManufacture}
                onChange={handleChange}
                required
                placeholder="2021"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Price Per Day (৳)
              <input
                type="number"
                name="pricePerDay"
                min="0"
                value={vehicle.pricePerDay}
                onChange={handleChange}
                required
                placeholder="5500"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Fuel Type
              <input
                type="text"
                name="fuelType"
                value={vehicle.fuelType}
                onChange={handleChange}
                placeholder="Petrol, Diesel, Electric"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Mileage
              <input
                type="text"
                name="mileage"
                value={vehicle.mileage}
                onChange={handleChange}
                placeholder="14 km/l"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Number of Seats
              <input
                type="number"
                name="numberOfSeats"
                min="1"
                max="20"
                value={vehicle.numberOfSeats}
                onChange={handleChange}
                placeholder="5"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="block mb-1 font-semibold text-black dark:text-white">
              Ratings
              <input
                type="number"
                name="ratings"
                min="0"
                max="5"
                step="0.1"
                value={vehicle.ratings}
                onChange={handleChange}
                placeholder="4.6"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2 text-xl  text-primary mb-3 border-b border-primary pb-1">
              <MdOutlineDescription />
              <h3 className="font-semibold ">Description</h3>
            </div>
            <textarea
              name="description"
              value={vehicle.description}
              onChange={handleChange}
              placeholder="Comfortable 5-seater with A/C and GPS."
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <p className="text-right text-sm text-gray-500 mt-1">
              {descChars}/{maxDescLength} characters
            </p>
          </div>
        </div>

        <button type="submit" className="md:col-span-2 mt-6 btn-gradient">
          Save Changes
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default UpdateVehicleDetailsPage;
