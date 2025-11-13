import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AllVehicles from "../pages/AllVehicles";
import VehicleCard from "../components/VehicleCard";
import CustomerReviews from "./CustomerReviews";
import OurServices from "./OurServices";

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-full h-screen relative">
        <img
          src="https://i.ibb.co.com/QvRkyDsj/360-F-584813294-c-MWq5-FAJDHKFCyj-Iw-B3-SYFPTumvu-UARK.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-start items-center px-10 md:px-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-4xl md:text-6xl font-bold z-10 max-w-xl">
            Drive Your Journey with TravelEase{" "}
          </h2>
          <p className="w-1/2 text-lg text-white">
            Whether it’s a weekend getaway or a business trip, TravelEase gets
            you on the road quickly with top-quality cars and hassle-free
            booking. Your adventure starts here!
          </p>
               <button
                onClick={() => navigate("/vehicles")}
                className="w-1/2 lg:w-1/5 btn-gradient"
              >
                All Vehicles
              </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl font-semibold my-8">
          Latest Vehicles
        </h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {data.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle._id} />
          ))}
        </div>
      </div>
      <CustomerReviews></CustomerReviews>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
