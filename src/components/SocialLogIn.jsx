import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogIn = ({ handleGoogleSignIn }) => {
  return (
    <div className="mx-auto">
      <h2 className="font-bold mb-5 text-center mt-5">Log In with </h2>

      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline w-1/2 bg-base-200 flex items-center justify-center gap-2"
        >
          <FaGoogle /> Log In with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
