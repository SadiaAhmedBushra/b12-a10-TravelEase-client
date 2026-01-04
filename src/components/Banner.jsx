import React from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    img: "https://i.ibb.co/qLMgTskn/newsliderbg1.jpg",
    align: "left",
    title: "Drive Your Journey with TravelEase",
    description:
      "Whether it’s a weekend getaway or a business trip, TravelEase gets you on the road quickly with top-quality cars and hassle-free booking.",
  },
  {
    img: "https://i.ibb.co/rGnJsgWm/newsliderbg2.jpg",
    align: "right",
    title: "Explore The Best Rides Around You",
    description:
      "Find the perfect vehicle that suits your style and needs. Effortless booking just a click away.",
  },
  {
    img: "https://i.ibb.co/JMG1yPK/newsliderbg3.jpg",
    align: "left",
    title: "Your Adventure Starts Here",
    description:
      "Choose from a wide selection of cars and enjoy a seamless rental experience with TravelEase.",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation
        loop
        className="w-full h-full"
      >
        {slides.map(({ img, align, title, description }, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            <div
              className={`absolute top-1/2 transform -translate-y-1/2 p-8 rounded-2xl backdrop-blur-md bg-white/10 shadow-xl text-white
                ${
                  align === "left" ? "left-10 text-left" : "right-10 text-right"
                }
                max-w-xl w-[35vw] min-w-[280px]
              `}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg text-white/90">{description}</p>
              <button
                onClick={() => navigate("/vehicles")}
                className="mt-6 btn-gradient"
              >
                All Vehicles
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none z-50 bg-black bg-opacity-30 rounded-lg p-2">
        <span className="text-white text-sm mb-1 select-none">Scroll</span>
        <div className="w-6 h-6 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
