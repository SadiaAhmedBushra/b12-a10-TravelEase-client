import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCarSportSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

import { GrServices } from "react-icons/gr";

const OurServices = () => {
  const services = [
    {
      serviceId: 1,
      serviceName: "Easy Vehicle Booking",
      serviceIcon: (
        <IoCarSportSharp className="text-6xl text-gradient mx-auto" />
      ),

      serviceDescription:
        "Book your preferred car in just a few clicks. Our seamless interface allows you to browse, compare, and confirm your ride instantly — no hidden charges or long waiting times.",
    },
    {
      serviceId: 2,
      serviceName: "Well-Maintained Vehicles",
      serviceIcon: <GrServices className="text-6xl text-gradient mx-auto" />,
      serviceDescription:
        "Every vehicle in our fleet goes through regular inspection and maintenance. We ensure clean, comfortable, and fully functional rides so you can travel with complete peace of mind.",
    },
    {
      serviceId: 3,
      serviceName: "Flexible Payment & Cancellation",
      serviceIcon: (
        <RiSecurePaymentFill className="text-6xl text-gradient mx-auto" />
      ),
      serviceDescription:
        "Enjoy total flexibility with secure online payments and easy cancellation policies. Whether your plans change or you need a last-minute booking, we’ve got you covered.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.7 },
    },
  };

  return (
    <div className="w-11/12 mx-auto my-10 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Services We Provide
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                variants={slideVariants}
                whileHover={{ scale: 1.05 }}
                className="relative bg-[#F0F8FF] rounded-2xl shadow-xl pt-10 pb-6 px-6 mx-3 mt-12 text-center"
              >
                <motion.div
                  className="absolute -left-6 -top-6 p-3 rounded-full text-primary"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {service.serviceIcon}
                </motion.div>

                <motion.h2 className="text-lg font-semibold mt-4 text-primary">
                  {service.serviceName}
                </motion.h2>

                <motion.p
                  className="text-gray-600 mt-3 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {service.serviceDescription}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default OurServices;
