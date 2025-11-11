import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AllVehicles from "../pages/AllVehicles";


const Home = () => {
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
          {/* Background Blur */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[index].bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px)",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-16">

            {/* Heading + Subtitle */}
            <div className="max-w-2xl space-y-4">
              <h1 className="text-5xl font-bold text-white">
                Drive Your Journey with Ease
              </h1>
              <p className="text-xl text-gray-200">
                Explore, Book, and Manage Vehicles Seamlessly — Your Adventure
                Starts Here.
              </p>
            </div>

            {/* Button */}
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
      

{/* all vehilces */}

<AllVehicles></AllVehicles>

    </div>
  );
};

export default Home;
