// import React, { useState } from "react";
// import useVehicles from "../Hooks/useVehicles";
// import VehicleCard from "../components/VehicleCard";
// import LoadingPage from "./LoadingPage";
// import ErrorPage from "./ErrorPage";

// const AllVehicles = () => {
//   const { vehicles, loading, error } = useVehicles();
//   const [sort, setSort] = useState("");

//   const sortedVehicles = [...vehicles].sort((a, b) => {
//     if (sort === "asc") {
//       return a.pricePerDay - b.pricePerDay;
//     } else if (sort === "desc") {
//       return b.pricePerDay - a.pricePerDay;
//     } else {
//       return 0;
//     }
//   });

//   if (loading) {
//     return <LoadingPage></LoadingPage>;
//   }

//   if (error) {
//     return <ErrorPage></ErrorPage>;
//   }

//   return (
//     <div className="">
//       <h1 className="text-center">All Vehicles</h1>

//       <div className="flex justify-end mb-6 w-11/12 mx-auto">
//         <select
//           id="sortPrice"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="px-8 py-1 rounded-full border border-gray-400"
//         >
//           <option value="" disabled>
//             Sort by Price
//           </option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
        
//       </div>
//       <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
//         {sortedVehicles.map((vehicle) => (
//           <VehicleCard vehicle={vehicle} key={vehicle._id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllVehicles;












import React, { useState, useMemo } from "react";
import useVehicles from "../Hooks/useVehicles";
import VehicleCard from "../components/VehicleCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const ITEMS_PER_PAGE = 6;

const AllVehicles = () => {
  const { vehicles, loading, error } = useVehicles();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const filteredVehicles = useMemo(() => {
    if (!vehicles) return [];

    let filtered = [...vehicles];

    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter((v) => {
        if (v.vehicleName && typeof v.vehicleName === "string") {
          return v.vehicleName.toLowerCase().includes(lowerSearch);
        }
        return false;
      });
    }

    if (categoryFilter !== "") {
      filtered = filtered.filter((v) => v.category === categoryFilter);
    }

    if (ratingFilter !== "") {
      const minRating = Number(ratingFilter);
      filtered = filtered.filter((v) => {
        const rating = Number(v.ratings); 
        if (!isNaN(rating)) {
          return rating >= minRating;
        }
        return false;
      });
    }

    if (sort === "asc") {
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    return filtered;
  }, [vehicles, searchTerm, categoryFilter, ratingFilter, sort]);

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const paginatedVehicles = filteredVehicles.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setPage(pageNum);
  };

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <div>
      <h1 className="text-center mb-6">All Vehicles</h1>

      <div className="w-11/12 mx-auto mb-6 flex flex-col lg:flex-row lg:items-center lg:gap-4">
        <input
          type="text"
          placeholder="Search by vehicle name..."
          className="rounded-full border border-gray-400 px-4 py-2 mb-4 lg:mb-0 flex-grow"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />

        <select
        defaultValue=""
          className="rounded-full px-4 py-2 border border-gray-400 mb-4 lg:mb-0 text-black dark:text-white dark:bg-gray-700"
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPage(1);
          }}
          style={{ color: "inherit" }}
        >
          
          <option value="" className="text-black dark:text-white">All Categories</option>
          <option value="Sedan" className="text-black dark:text-white">Sedan</option>
          <option value="SUV" className="text-black dark:text-white">SUV</option>
          <option value="Electric" className="text-black dark:text-white">Electric</option>
          <option value="Van" className="text-black dark:text-white">Van</option>
        </select>

        <select
          className="rounded-full px-4 py-2 border border-gray-400 mb-4 lg:mb-0 text-black dark:text-white dark:bg-gray-700"
          value={ratingFilter}
          onChange={(e) => {
            setRatingFilter(e.target.value);
            setPage(1);
          }}
          style={{ color: "inherit" }}
        >
          <option value="" className="text-black dark:text-white">All Ratings</option>
          <option value="1" className="text-black dark:text-white">1 star & up</option>
          <option value="2" className="text-black dark:text-white">2 stars & up</option>
          <option value="3" className="text-black dark:text-white">3 stars & up</option>
          <option value="4" className="text-black dark:text-white">4 stars & up</option>
          <option value="5" className="text-black dark:text-white">5 stars</option>
        </select>

        <select
          id="sortPrice"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="px-8 py-2 rounded-full border border-gray-400 text-black dark:text-white dark:bg-gray-700"
          style={{ minWidth: "140px" }}
        >
          <option value="" disabled>
            Sort by Price
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {paginatedVehicles.length > 0 ? (
          paginatedVehicles.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle._id} />
          ))
        ) : (
          <p className="text-center w-full col-span-full">No vehicles found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-10 mb-6">
          <button
            className="btn btn-outline rounded-full"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`btn ${page === i + 1 ? "btn-primary rounded-full" : "btn-outline rounded-full"}`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-outline rounded-full"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllVehicles;

