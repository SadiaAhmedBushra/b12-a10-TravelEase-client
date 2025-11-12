import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

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
          `http://localhost:3000/bookings?userEmail=${encodeURIComponent(
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

  if (loading)
    return (
      <p className="text-center mt-10 text-lg font-semibold">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Error: {error}
      </p>
    );

  if (!bookings.length)
    return (
      <p className="text-center mt-10 text-gray-600 font-semibold">
        No bookings found.
      </p>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">
        My Bookings
      </h1>
      <div className="max-w-3xl mx-auto my-5">
        <ul>
          <li className="grid grid-cols-2 font-semibold border-b border-gray-300 pb-2 mb-5 text-primary p-6 bg-white rounded-lg shadow-lg">
            <span>Vehicle Name</span>
            <span>Price Per Day</span>
          </li>

          {bookings.map((b) => (
            <li
              key={b._id}
              className="grid grid-cols-2 mb-5 py-3 border-b last:border-0 border-gray-200 p-6 bg-white rounded-lg shadow-lg"
            >
              <span className="truncate">{b.vehicleName}</span>
              <span>{b.pricePerDay} BDT</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyBookings;
