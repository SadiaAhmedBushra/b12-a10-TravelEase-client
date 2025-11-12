import React from "react";
import useVehicles from "../Hooks/useVehicles";
import VehicleCard from "../components/VehicleCard";

const AllVehicles = () => {
  const { vehicles, loading, error } = useVehicles();

  return (
    <div className="">
      <h1 className="text-center">All Vehicles</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
