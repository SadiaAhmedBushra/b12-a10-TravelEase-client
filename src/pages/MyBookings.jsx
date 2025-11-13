import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { formatDistanceToNow } from "date-fns";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) {
      setBookings([]);
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        setError(null);
        const res = await fetch(
          `https://travelease-server-alpha.vercel.app/bookings?userEmail=${encodeURIComponent(
            userEmail
          )}`
        );
        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        setBookings(data || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userEmail]);

  if (loading) return <LoadingPage></LoadingPage>;
  if (error) return <ErrorPage></ErrorPage>;

  if (!bookings.length)
    return (
      <p className="text-center mt-10 text-gray-600 font-semibold">
        No bookings found.
      </p>
    );

  return (
    <div>
      <h1 className="text-center">
        My Bookings
      </h1>
      <div className="w-4/5 mx-auto my-5">
        <ul>
          <li className="grid grid-cols-3 font-semibold border-b border-gray-300 pb-2 mb-5 text-primary p-6 bg-white rounded-lg shadow-lg">
            <span>Vehicle Name</span>
            <span>Price Per Day</span>
            <span>Booked</span>
          </li>

          {bookings.map((b) => (
            <li
              key={b._id}
              className="grid grid-cols-3 mb-5 py-3 border-b border-gray-200 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:text-white"
            >
              <span>{b.vehicleName}</span>
              <span>{b.pricePerDay} BDT</span>
              <span>
                {formatDistanceToNow(new Date(b.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyBookings;
