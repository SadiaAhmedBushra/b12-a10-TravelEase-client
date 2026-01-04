import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoaderData, useNavigate } from "react-router";
import VehicleCard from "../components/VehicleCard";
import CustomerReviews from "./CustomerReviews";
import OurServices from "./OurServices";
import Banner from "../components/Banner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const categories = [
  { icon: "🚗", name: "Sedans" },
  { icon: "🚙", name: "SUVs" },
  { icon: "⚡", name: "Electric" },
  { icon: "🏎️", name: "Sports" },
];

const highlights = [
  {
    title: "24/7 Customer Support",
    desc: "Always ready to assist you with your bookings.",
    icon: "💬",
  },
  {
    title: "Flexible Rentals",
    desc: "Rent a car for a day, week or month — your choice!",
    icon: "📅",
  },
  {
    title: "Easy Cancellation",
    desc: "Cancel anytime with no extra fees.",
    icon: "❌",
  },
];

const blogs = [
  {
    title: "Top 10 Road Trips in 2026",
    snippet: "Explore the most breathtaking routes for your next journey...",
  },
  {
    title: "How to Choose the Right Car Rental",
    snippet: "Tips and tricks to find the perfect vehicle for your needs.",
  },
];

const faqs = [
  {
    question: "How do I book a vehicle?",
    answer:
      "Select your preferred vehicle, choose dates, and complete the payment process.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel anytime with no extra fees up to 24 hours before pickup.",
  },
];

// Static "Why Choose Us" Data
const chooseUsData = [
  {
    icon: "🚗",
    title: "Wide Vehicle Selection",
    description: "Choose from a diverse range of cars to fit your style and needs.",
  },
  {
    icon: "💼",
    title: "Trusted Service",
    description: "Reliable and well-maintained vehicles with professional support.",
  },
  {
    icon: "💳",
    title: "Flexible Payment",
    description: "Multiple payment options with no hidden fees.",
  },
];

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="space-y-20">
      <Banner />

      {/* Latest Vehicles */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-center text-3xl font-semibold my-8"
        >
          Latest Vehicles
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
        >
          {data.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle._id} />
          ))}
        </motion.div>
      </motion.section>

      {/* Categories - slide from left */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromLeft}
        className="w-11/12 mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-10 text-center text-primary drop-shadow-sm"
        >
          Categories
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {categories.map(({ icon, name }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-[#F0F8FF] dark:bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center cursor-pointer"
            >
              <div className="text-6xl mb-4 animate-pulse">{icon}</div>
              <h3 className="text-xl font-semibold">{name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Highlights - slide from right */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromRight}
        className="w-3/4 mx-auto mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-10 text-center drop-shadow-sm"
        >
          Highlights
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-12 text-gray-700 dark:text-gray-300"
        >
          {highlights.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F0F8FF] dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow cursor-default text-center"
            >
              <div className="text-5xl mb-4 animate-pulse">{icon}</div>
              <h3 className="text-lg text-primary font-semibold mb-3">{title}</h3>
              <p className="text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us - slide from left */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromLeft}
        className="w-3/4 mx-auto mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-10 text-center text-primary drop-shadow-sm"
        >
          Why Choose Us
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-12 text-gray-700 dark:text-gray-300"
        >
          {chooseUsData.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F0F8FF] dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow cursor-default text-center"
            >
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="text-lg text-primary font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <CustomerReviews />
      <OurServices />

      {/* Blogs - slide from right */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromRight}
        className="w-3/4 mx-auto mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-10 text-center text-primary drop-shadow-sm"
        >
          Latest Blogs
        </motion.h2>
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          {blogs.map(({ title, snippet }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#F0F8FF] dark:bg-gray-900 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{snippet}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Newsletter Signup - slide from left */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromLeft}
        className="w-3/4 mx-auto mb-20 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-6 text-primary drop-shadow-sm"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.form
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed!");
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button type="submit" className="btn-gradient px-8 py-3 font-semibold">
            Subscribe
          </button>
        </motion.form>
      </motion.section>

      {/* FAQ - slide from right */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromRight}
        className="w-3/4 mx-auto mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-semibold mb-10 text-center text-primary drop-shadow-sm"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div variants={itemVariants} className="space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <motion.div
              key={i}
              className="bg-[#F0F8FF] dark:bg-gray-900 rounded-xl p-6 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                const next = e.currentTarget.querySelector("p");
                next.classList.toggle("hidden");
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{question}</h3>
              <p className="text-gray-700 dark:text-gray-300 hidden">{answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
