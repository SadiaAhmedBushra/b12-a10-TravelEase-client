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

  const slides = [
    { bg: "https://i.ibb.co.com/39WjHptn/sliderbg1.jpg" },
    { bg: "https://i.ibb.co.com/Lzb5psQj/sliderbg2.jpg" },
    { bg: "https://i.ibb.co.com/1G2CHr9J/s2.jpg" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="">
      <div className="w-full h-screen relative">
        <AnimatePresence>
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slides[index].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(4px)",
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col items-start justify-center px-16">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-5xl font-bold text-white">
                  Drive Your Journey with Ease
                </h1>
                <p className="text-xl text-gray-200">
                  Explore, Book, and Manage Vehicles Seamlessly — Your Adventure
                  Starts Here.
                </p>
              </div>

              <button
                onClick={() => navigate("/vehicles")}
                className="mt-6 px-8 py-3 btn-gradient text-white rounded-full text-lg font-bold"
              >
                All Vehicles
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div>
        <h1 className="text-center">Latest Vehicles</h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {data.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle._id} />
          ))}
        </div>
      </div>

      {/* <h1 className="text-3xl font-bold text-center mb-6">
        Meet Our Green Experts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {greenExperts.map((expert) => (
          <div
            className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-[#ECFFDC] px-2 py-4 rounded-lg"
            key={expert.expertId}
          >
            <img
              src={expert.expertImage}
              alt=""
              className="w-50 h-50 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-center">{expert.expertName}</h2>
            <p className="text-[#355E3B] text-center">
              {expert.expertSpecialization}
            </p>
          </div>
        ))}
      </div> */}

      <CustomerReviews></CustomerReviews>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
