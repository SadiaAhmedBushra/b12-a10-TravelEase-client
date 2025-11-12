import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";
import { FaBangladeshiTakaSign, FaRegStar } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const loggedInUserEmail = user?.email;

  useEffect(() => {
    if (!loggedInUserEmail) {
      setVehicles([]);
      setLoading(false);
      return;
    }

    const fetchVehicles = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/vehicles?userEmail=${encodeURIComponent(
            loggedInUserEmail
          )}`
        );
        const data = await res.json();
        setVehicles(data);
      } catch (err) {
        toast.error("Unexpected Error while fetching vehicles.");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, [loggedInUserEmail]);

  const handleDelete = (vehicleId) => {
    Swal.fire({
      title: "Are you sure you want to delete this vehicle?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/vehicles/${vehicleId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            setVehicles((prevVehicles) =>
            prevVehicles.filter((v) => v._id !== vehicleId));

            Swal.fire({
              title: "Deleted!",
              text: "Your vehicle has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  if (loading) return <LoadingPage></LoadingPage>;

  if (!vehicles.length)
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">No Vehicles Found!</h2>
        <Link to="/add-vehicles" className="btn-gradient">
          Add Your First Vehicle
        </Link>
      </div>
    );

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h1 className="text-center text-primary">My Vehicles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="bg-base-100 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={vehicle.coverImage}
              alt={vehicle.vehicleName}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <div className="flex flex-row justify-start gap-3 items-start">
                <h2 className="text-2xl font-extrabold text-base-content">
                  {vehicle.vehicleName}
                </h2>
                <p className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {vehicle.category}
                </p>
                <div className="flex flex-row items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">
                  <p>{vehicle.ratings}</p>
                  <FaRegStar />
                </div>
              </div>

              <div className="flex items-center gap-1 text-primary mt-2">
                <FaBangladeshiTakaSign className="text-gradient" />
                <p className="text-md font-medium">{vehicle.pricePerDay}</p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <Link
                  to={`/vehicledetails/${vehicle._id}`}
                  className="flex-1 border-primary border-3 text-primary py-1 rounded-full text-center"
                >
                  View Details
                </Link>

                <FiEdit
                  onClick={() => navigate(`/update-vehicle/${vehicle._id}`)}
                  className="text-primary size-7"
                />

                <RiDeleteBin6Line
                  onClick={() => handleDelete(vehicle._id)}
                  className="text-primary size-7"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default MyVehicles;
