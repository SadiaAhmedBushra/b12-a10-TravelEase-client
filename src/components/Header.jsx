import React, { useContext, useState, useEffect, useRef } from "react";
import { FaCar } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { MdLogout, MdOutlineLogin } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);

   const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });

   
  };
  return (
    //  Home, All Vehicles, Add Vehicle, My Vehicles, My Bookings, Login/Register

    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 "
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold bg-base-200" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                Add Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                My Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                My Bookings
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-between items-center gap-2">
          <FaCar className="text-[#6C757D] size-8" />
          <NavLink to="/" className="font-semibold text-primary text-xl">
            Travel
            <span className="font-bold text-[#6C757D] text-2xl">Ease</span>
          </NavLink>
        </div>
      </div>

      <div className="navbar-center gap-5 flex-row items-center">
        <div className="hidden lg:flex">
          <ul className="flex flex-row justify-between items-center gap-5 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                Add Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-vehicles"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                My Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  isActive ? "text-[#1A73E8] font-bold bg-base-200" : ""
                }
              >
                My Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-5 flex-row items-center">
        {/* LogIN/Register Buttons */}
        <div className="flex items-center justify-center">
          {/* <Link to="/auth/login" className="px-8 py-1 bg-primary text-white rounded-full text-lg hover:bg-[#dcdcdc] font-bold hover:text-primary transition">
            Login
          </Link> */}

          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            {user ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full bg-base-100"
              />
            ) : (
              ""
            )}
          </div>
          {user && dropdown && (
            <div className="absolute right-0 z-10 mt-12 bg-white rounded p-3 flex flex-col gap-2 "  ref={dropdownRef}>
              <span className="">{user.displayName}</span>{" "}
              <span className="text-xs">{user && user.email}</span>
              <button
                onClick={handleLogOut}
                className="btn btn-primary flex items-center gap-2"
              >
                <MdLogout size={18} /> Log Out
              </button>
            </div>
          )}

          {!user && (
            <div className="flex lg:flex-row flex-col gap-2">
              <Link
                to="/auth/login"
                className="btn btn-primary btn-gradient flex items-center gap-2"
              >
                <MdOutlineLogin size={18} /> Log In
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-base-100 flex items-center gap-2"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
