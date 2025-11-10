import React from 'react';
import useVehicles from '../Hooks/useVehicles';
import VehicleCard from '../components/VehicleCard';

const AllVehicles = () => {
      const { vehicles, loading, error } = useVehicles();

    return (
    
             <div className=''>
      <h1 className="text-3xl text-center font-bold my-4">
        Latest Vehicles
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.vehicleId}> </VehicleCard>
        ))}
      </div>
    </div>
      
    );
};

export default AllVehicles;