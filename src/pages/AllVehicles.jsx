import React, { useState } from "react";
import useVehicles from "../Hooks/useVehicles";
import VehicleCard from "../components/VehicleCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const AllVehicles = () => {
  const { vehicles, loading, error } = useVehicles();
  const [sort, setSort] = useState("");

  const sortedVehicles = [...vehicles].sort((a, b) => {
    if (sort === "asc") {
      return a.pricePerDay - b.pricePerDay;
    } else if (sort === "desc") {
      return b.pricePerDay - a.pricePerDay;
    } else {
      return 0;
    }
  });

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="">
      <h1 className="text-center">All Vehicles</h1>

      <div className="flex justify-end mb-6 w-11/12 mx-auto">
        <select
          id="sortPrice"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-8 py-1 rounded-full border border-gray-400"
        >
          <option value="" disabled>
            Sort by Price
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {sortedVehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
