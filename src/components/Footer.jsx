import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoLogoYoutube,
} from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { FaCar } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-11/12 mx-auto mt-60 bg-gradient text-white pt-40 pb-10">
      <div
        className="flex flex-col items-center gap-3 border-2 border-t-primary border-b-0 border-l-0 border-r-0 absolute left-1/2 w-2/3 max-w-4xl  bg-opacity-10 rounded-b-4xl py-10 shadow-lg"
        style={{ top: "-5rem", transform: "translateX(-50%)" }}
      >
        <div className="flex flex-row justify-between items-center gap-2">
          <FaCar className="text-[#6C757D] size-8" />
          <NavLink to="/" className="font-semibold text-primary text-xl">
            Travel
            <span className="font-bold text-[#6C757D] text-2xl">Ease</span>
          </NavLink>
        </div>
    
        <Link to="/auth/register" className="btn-gradient font-bold">
          Register Now!
        </Link>
      </div>

      <div className="w-11/12 mx-auto flex flex-col justify-between items-center gap-5">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="lg:w-2/3 flex flex-col items-center lg:items-start gap-3">
            <h2 className="text-3xl mt-25 md:mt-25">About Us</h2>
            <p className="text-justify">
              TravelEase is your reliable companion for seamless vehicle booking
              and trip management. We empower travelers and vehicle owners alike
              to explore, list, and manage a wide range of vehicles — from
              everyday rides to adventure-ready cars — all in one convenient
              platform. Our mission is to simplify travel planning by offering a
              user-friendly, full-stack web application where authenticated
              users can effortlessly add, update, and manage their vehicles,
              trips, and bookings. <br /> <br />
              At TravelEase, we believe that booking a vehicle should be
              hassle-free and accessible to everyone. Whether you're a traveler
              seeking your next journey or a vehicle owner looking to share your
              ride, TravelEase makes the experience smooth, transparent, and
              enjoyable. Join us in creating a community where mobility meets
              convenience, and every trip starts with confidence.
            </p>
            <nav>
              <div className="flex flex-row gap-4 mt-5 text-xl">
              <a  href="">  <FaXTwitter /></a>
               <a  href=""> <IoLogoYoutube /></a>
              <a  href="">  <FaFacebookF /></a>
              </div>
            </nav>
          </div>

          <nav className="flex flex-col gap-4 items-center lg:items-start text-lg">
            <div className="flex flex-row gap-2 items-center">
              <IoCallOutline />
              <p className="link link-hover">+8803463467888</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <IoLocationOutline />
              <p className="link link-hover">Dhaka, Bangladesh</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <HiOutlineMail />
              <p className="link link-hover">travelease@company.com</p>
            </div>
          </nav>
        </div>

        <div className="flex justify-between items-center gap-3 w-1/2 text-sm">
          <p className="link link-hover">Privacy Policy</p>
          <p className="link link-hover">Cookies Policy</p>
          <p className="link link-hover">Terms and Conditions</p>
          <p className="link link-hover">Accessibility</p>
        </div>

        <aside>
          <p className="text-center text-sm pb-10">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            TravelEase Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
