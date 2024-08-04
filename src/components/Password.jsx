import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ".././pages/Home.css";
import right from "../assets/rightimg.svg";
import left from "../assets/leftimg.svg";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

const Password = () => {
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        navigate("/community"); // Navigate to the home page or desired page after successful registration
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      <div className="flex">
        <h1 className="flex mx-auto my-4 text-5xl font-bold text-green-600">
          Your work people are here
        </h1>
      </div>
      <h2 className="flex justify-center my-4 text-2xl font-bold text-black">
        Welcome to Glassdoor
      </h2>
      <div className="container gap-10 ">
        <img src={left} className="w-[368px] h-[520px]" />
        <div className="signup-box">
          <p>Create your account as {email}</p>
          <form onSubmit={onSubmit}>
            <input
              type="password"
              value={password}
              className="w-60 p-2 my-2 border border-black rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center bg-black w-60 h-12 text-white p-4 my-2 rounded-md hover:bg-green-600"
            >
              <span className="mx-auto">Create account</span>
            </button>
            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
          </form>
        </div>
        <img src={right} className="w-[368px] h-[520px]" />
      </div>
    </>
  );
};

export default Password;
