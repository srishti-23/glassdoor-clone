import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/Index";
import {
  doSignInWithFacebook,
  doSignInWithGoogle,
} from "../firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSigningIn, setSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/password", { state: { email } });
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/");
      } catch (err) {
        setSigningIn(false);
        setErrorMessage(err.message);
      }
    }
  };

  const onFacebookSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setSigningIn(true);
      try {
        await doSignInWithFacebook();
        navigate("/");
      } catch (err) {
        setSigningIn(false);
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/" replace={true} />}
      <div className="signup-box">
        <p>
          Create an account or sign in. By continuing, you agree to our{" "}
          <a href="#" className="text-green-600 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className=" underline text-green-600">
            Privacy Policy
          </a>
        </p>
        <button
          disabled={isSigningIn}
          onClick={onGoogleSignIn}
          className="flex items-center border border-black social-btn"
        >
          <FcGoogle className="icon" />{" "}
          {isSigningIn ? "Signing In..." : "Continue with Google"}
        </button>
        <button
          disabled={isSigningIn}
          onClick={onFacebookSignIn}
          className="flex items-center border border-black social-btn"
        >
          <FaFacebook className="icon" />{" "}
          {isSigningIn ? "Signing In..." : "Continue with Facebook"}{" "}
        </button>
        <div className="divider">or</div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            className="w-60 p-2 my-2 border border-black"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-80 h-12 border border-black rounded hover:bg-green hover:text-white"
          >
            Continue with email
            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
