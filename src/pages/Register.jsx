import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogIn from "../components/SocialLogIn";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const { createUser, setUser, googleSignIn, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleGoogleSignIn = () => {
    // googleSignIn()
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     navigate(location.state ? location.state : "/");
    //   })
    googleSignIn()
  .then((result) => {
    const user = result.user;
    localStorage.setItem("userEmail", user.email); // ✅
    setUser(user);
    navigate(location.state ? location.state : "/");
  })

      .catch((error) => {
        setError(error.code);
      });
    toast.error("Sign Up unsuccessful!");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name must be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: url })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: url });
            navigate("./");
          })
          .catch((error) => {
            // setUser(user);
            setUser({ ...user, displayName: name, photoURL: url });
          });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorMessage);
        setError(errorCode);
        toast.error("Sign Up unsuccessful!");
      });
  };
  return (
    <div>
      <Toaster position="top-right" />

      <div className="w-11/12 mx-auto my-10">
        <div className="flex flex-col justify-items-center mx-auto gap-4">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-200 rounded">
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  required
                />
                {nameError && (
                  <p className=" text-xs text-error">{nameError}</p>
                )}
                <label className="label">Photo-URL</label>
                <input
                  name="url"
                  type="url"
                  className="input w-full"
                  placeholder="Photo-URL"
                  required
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
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
                {passwordError && (
                  <p className="text-xs text-error">{passwordError}</p>
                )}
                {error && <p className="text-xs text-error">{error}</p>}
                <button type="submit" className="btn btn-primary mt-4">
                  Register
                </button>
                <p>
                  Already Have an Account?<span> </span>
                  <Link to="/auth/login" className="text-primary font-bold">
                    Log In
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

export default Register;
