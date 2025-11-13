import React from "react";
import errorImg from "../assets/errorimg.jpg"

const ErrorPage = () => {
  return(
   
   <div className="">
    <div className="w-11/12 md:w-2/5 lg:w-2/5 mx-auto flex flex-col gap-4">
      <img className="mx-auto mt-30 rounded-4xl" src={errorImg} alt="error image" />
      <h2 className="text-primary text-2xl md:text-3xl lg:text-3xl font-bold text-center">Something went wrong!</h2>
      </div>
   </div>
 
  )
  
};

export default ErrorPage;