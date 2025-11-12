import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogIn from "../components/SocialLogIn";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, setUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    // logIn(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     // console.log(user);
    //     navigate(`${location.state ? location.state : "/"}`);
    //   })
    logIn(email, password)
  .then((result) => {
    const user = result.user;
    localStorage.setItem("userEmail", user.email); // ✅
    navigate(location.state ? location.state : "/");
  })

      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
        toast.error("Wrong email or password. Log In unsuccessful!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
                toast.error("Log In unsuccessful!");

      });
  };
  return (
    <div>
      <Toaster position="top-right" />

      <div className="w-11/12 mx-auto my-10">
        <div className="flex flex-col justify-items-center mx-auto gap-4 ">
          <div className="text-center mb-5 ">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-200 rounded">
            <form onSubmit={handleLogIn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input  w-full"
                  placeholder="Email"
                  name="email"
                  required
                />

                <label className="label">Password</label>
                <div className="relative w-full">
                  <input
                    type={hidePassword ? "password" : "text"}
                    placeholder="Enter your password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input w-full pr-12"
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer "
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? (
                      <BiSolidShow size={20} className="text-base-300" />
                    ) : (
                      <BiSolidHide size={20} className="text-base-300" />
                    )}{" "}
                  </span>
                </div>

                <div>
                  <Link
                    to="/auth/forgotpassword"
                    className="link link-hover text-base-300 text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                {error && <p className="text-xs text-error">{error}</p>}
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
                <p>
                  Don't Have an Account?<span> </span>
                  <Link to="/auth/register" className="text-primary font-bold">
                    Register Now!
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="text-center mt-5">
          <SocialLogIn handleGoogleSignIn={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Login;
