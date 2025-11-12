import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        // ✅ Fetch vehicles filtered by userEmail on backend
        const res = await fetch(
          `http://localhost:3000/vehicles?userEmail=${encodeURIComponent(
            loggedInUserEmail
          )}`
        );
        const data = await res.json();

        console.log("Logged-in email:", loggedInUserEmail);
        console.log("Filtered vehicles from DB:", data);

        setVehicles(data);
      } catch (err) {
        toast.error("Failed to fetch vehicles.");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, [loggedInUserEmail]);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/vehicles/${deleteId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setVehicles((prev) => prev.filter((v) => v._id !== deleteId));
      toast.success("Vehicle deleted successfully");
    } catch {
      toast.error("Failed to delete vehicle");
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen font-semibold text-xl">
        <LoadingPage></LoadingPage>
      </div>
    );

  if (!vehicles.length)
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">No Vehicles Found!</h2>
        <Link to="/add-vehicles" className="btn-gradient">
          Add Your First Vehicle
        </Link>
      </div>
    );

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h1 className="text-center">My Vehicles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="bg-white rounded-xl shadow-2xl"
          >
            <img
              src={vehicle.coverImage}
              alt={vehicle.vehicleName}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex flex-row text-left justify-start items-start gap-4">
                <h2 className="text-2xl font-extrabold text-black ">
                  {vehicle.vehicleName}
                </h2>

                <div className="bg-gradient flex items-center gap-1 text-primary">
                  <p className="text-sm font-medium">{vehicle.category}</p>
                </div>
              </div>
              <div className=" flex items-center gap-1 text-primary">
                <FaBangladeshiTakaSign className="text-gradient" />
                <p className="text-md font-medium">{vehicle.pricePerDay}</p>
              </div>

              <div className="flex items-center gap-3 mt-3 ">
                  <Link
                    to={`/vehicledetails/${vehicle._id}`}
                    className="flex-1 border border-primary border-3 py-1.4 rounded-full text-center"
                  >
                    View Details
                  </Link>
                

                <div className="flex items-center gap-3">
                  <FiEdit
                  onClick={() => navigate(`/update-vehicle/${vehicle._id}`)}
                  className="flex-1 text-primary size-7"
                />

                <RiDeleteBin6Line
                  onClick={() => navigate(`/update-vehicle/${vehicle._id}`)}
                  className="flex-1 text-primary size-7"
                />
                </div>

                {/* <button
                  onClick={() => handleDeleteClick(vehicle._id)}
                  className="flex-1 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Confirm Deletion
            </h3>
            <p className="mb-6 text-center text-gray-700">
              Are you sure you want to delete this vehicle? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={confirmDelete}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default MyVehicles;
