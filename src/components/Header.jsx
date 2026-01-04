import React, { useContext, useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { MdLogout, MdOutlineLogin } from "react-icons/md";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sticky top-0 z-50 navbar-glass">
      <div className="navbar w-11/12 mx-auto lg:my-2 md:my-2 my-5 rounded-box">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 z-10 mt-3 w-52 p-2"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/vehicles">Vehicles</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/privacyterms">Privacy Terms</NavLink>
              </li>

              {/* {user && (
                <>
                  <li>
                    <NavLink to="/add-vehicles">Add Vehicle</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-vehicles">My Vehicles</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-bookings">My Bookings</NavLink>
                  </li>
                </>
              )} */}
            </ul>
          </div>

          <div className="flex flex-row items-center gap-2">
            <FaCar className="text-[#6C757D] size-8" />
            <NavLink to="/" className="font-semibold text-primary text-xl">
              Travel
              <span className="font-bold text-[#6C757D] text-2xl">Ease</span>
            </NavLink>
          </div>
        </div>

        <div className="navbar-center gap-5 hidden lg:flex">
          <ul className="flex gap-5 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/privacyterms">Privacy Terms</NavLink>
            </li>
            {/* {user && (
              <>
                <li>
                  <NavLink to="/add-vehicles">Add Vehicle</NavLink>
                </li>
                <li>
                  <NavLink to="/my-vehicles">My Vehicles</NavLink>
                </li>
                <li>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>

        <div className="navbar-end gap-5 flex-col-reverse md:flex-row lg:flex-row items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm hidden lg:inline">Dark Mode</span>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
              className="toggle"
            />
          </label>

          {user ? (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full bg-base-100 cursor-pointer"
                title={user.displayName}
              />

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 mt-3 w-40 p-2 shadow"
              >
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2"
                  >
                    <MdLogout size={16} /> Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex lg:flex-row flex-col gap-2">
              <Link
                to="/auth/login"
                className="btn btn-primary btn-gradient flex items-center gap-2"
              >
                <MdOutlineLogin size={18} /> Log In
              </Link>
              <Link
                to="/auth/register"
                className="btn border-2 border-primary rounded-full px-6 flex items-center gap-2"
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
