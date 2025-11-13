import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerReviews = () => {
  const customers = [
    {
      customerId: 1,
      customerName: "Razin Sahab",
      customerReview:
        "TravelEase made my trip so smooth. The booking process was quick, and the vehicle was in excellent condition. I’ll definitely use this service again.",
      customerImage: "https://i.ibb.co.com/Ymcsv6z/customer2.webp",
    },
    {
      customerId: 2,
      customerName: "Salman Khan",
      customerReview:
        "I was impressed by how clean and well-maintained the car was. The pricing was reasonable, and the owner was very cooperative. Highly recommended!",
      customerImage: "https://i.ibb.co/zh78Gw0h/customer3.jpg",
    },
    {
      customerId: 3,
      customerName: "Anwar Ali",
      customerReview:
        "Superb Experience I must say! Customer support was friendly and responsive. The whole booking process was smooth and professional. I’ll be coming back for my next trip!",
      customerImage: "https://i.ibb.co/FbMk0gX0/customer1.webp",
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
    <div className="w-3/4 mx-auto my-16 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Listen from Our Customers
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
          {customers.map((customer) => (
            <SwiperSlide key={customer.customerId}>
              <motion.div
                variants={slideVariants}
                whileHover={{ scale: 1.05 }}
                className="relative bg-[#F0F8FF] rounded-2xl pt-16 pb-4 px-6 mx-3 mt-12 text-center flex flex-col items-center"
              >
                <motion.div
                  className="absolute -top-12"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={customer.customerImage}
                    alt={customer.customerName}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </motion.div>

                <motion.h2
                  className="text-lg font-semibold mt-4 text-primary"                >
                  {customer.customerName}
                </motion.h2>

                <motion.p
                  className="text-gray-600 mt-3 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {customer.customerReview}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default CustomerReviews;
