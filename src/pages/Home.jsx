import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AllVehicles from "../pages/AllVehicles";
import VehicleCard from "../components/VehicleCard";

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   html.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const handleTheme = (checked) => {
  //   setTheme(checked ? "dark" : "light");
  // };
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
                className="mt-6 px-8 py-3 btn-gradient bg-[#1c1c84] text-white rounded-full text-lg hover:bg-[#dcdcdc] font-bold hover:text-primary transition"
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
    </div>
  );
};

export default Home;
