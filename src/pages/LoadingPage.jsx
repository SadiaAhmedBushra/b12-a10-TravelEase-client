import React from "react";

const LoadingPage = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-10 mx-auto">
      {Array.from({ length: count }).map((__, i) => (
        <div key={i} className="flex justify-center items-center w-80 flex-col gap-4 mx-auto">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingPage;