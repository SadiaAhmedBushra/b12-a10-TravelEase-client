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
import PrivateRoute from "../provider/PrivateRoute";
import VehicleDetailsPage from "../pages/VehicleDetailsPage";
import UpdateVehicleDetailsPage from "../pages/UpdateVehicleDeatilsPage";
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
        element: (
          <PrivateRoute>
            <AddVehicles />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicles />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/vehicledetails/:id",
        element: (
          <PrivateRoute>
            <VehicleDetailsPage></VehicleDetailsPage>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/vehicles/${params.id}`
          );

          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }

          const data = await res.json();
          return data.result; // return only the vehicle data here
        },
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/update-vehicle/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicleDetailsPage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/vehicles/${params.id}`
          );

          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }

          const data = await res.json();
          return data.result; // only vehicle data
        },
        hydrateFallbackElement: <LoadingPage />,
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
