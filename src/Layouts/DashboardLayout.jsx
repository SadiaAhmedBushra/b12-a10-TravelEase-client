import React from "react";
import { Outlet, NavLink } from "react-router";
import { MdDashboard, MdDirectionsCar, MdBookOnline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <>
      <Header />

      <div className="drawer lg:drawer-open"> 
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content flex flex-col">
          <div className="navbar bg-base-100 shadow px-6">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </label>

            <div className="flex-1 font-semibold text-lg">
              Dashboard
            </div>
          </div>

          <div className="p-6">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-64 bg-base-200">
            <li>
              <NavLink to="/dashboard">
                <MdDashboard /> Dashboard Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-vehicles">
                <MdDirectionsCar /> Add Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-vehicles">
                <MdDirectionsCar /> My Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-bookings">
                <MdBookOnline /> My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile /> Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
