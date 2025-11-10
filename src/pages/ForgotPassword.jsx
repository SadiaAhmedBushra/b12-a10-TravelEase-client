import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

const ForgotPassword = () => {
  const { forgotPassword } = use(AuthContext);
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");

      return;
    }
    forgotPassword(email)
      .then(() => {
        toast.success("Reset password email sent.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error sending reset password email. Please try again.");
      });
  };
  return (
    <div className="w-11/12 mx-auto mt-15">
      <Toaster position="top-right" />

      <main className="">
        <h1 className="text-3xl text-center font-semibold my-4">
          Forgot Password?
        </h1>

        <div className="w-11/12 lg:w-1/2 mx-auto my-10 p-10 bg-base-200 rounded">
          <form onSubmit={handleResetPassword} className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your Gmail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full mb-4"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Send Reset Email
            </button>
                           
        
                  <Link to="/auth/login" className="text-xs mt-2 text-primary font-bold hover:underline">
                    Or, Log In?
                  </Link>
               
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
