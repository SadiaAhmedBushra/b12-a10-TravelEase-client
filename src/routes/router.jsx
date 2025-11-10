import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import LoadingPage from "../pages/LoadingPage";
import AllVehicles from "../pages/AllVehicles";
import AddVehicles from "../pages/AddVehicles";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import Home from "../pages/Home";
import Login from "../pages/LogIn";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/vehicles",
        element: <AllVehicles />,
      },
      {
        path: "/add-vehicles",
        element: <AddVehicles />,
      },
      {
        path: "/my-vehicles",
        element: <MyVehicles />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  // {
  //   path: "/vehicledetails/:vehicleId",
  //   element: (
  //     <PrivateRoute>
  //       <VehicleDetails></VehicleDetails>
  //     </PrivateRoute>
  //   ),
  //   loader: () => fetch("/vehicle.json"),
  //   hydrateFallbackElement: <LoadingPage></LoadingPage>,
  // },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoute>
  //       <MyProfile />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: "/*",
  //   element: <ErrorPage></ErrorPage>,
  // },
]);

export default router;
