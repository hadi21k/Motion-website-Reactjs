import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../Button";
import "./SignUp.css";
const SignUp = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen p-4 bg-gray-900 shadow-lg md:p-0 signUp">
      <div className="py-12 bg-white rounded shadow-lg md:px-3 signup-section">
        <div className="py-5 mb-5 text-2xl font-bold text-center text-black uppercase title">
          <h3>Sign Up</h3>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center px-8 space-y-4"
        >
          <input
            onChange={handleChangeName}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-5 font-semibold placeholder-black bg-white border-0 shadow-lg"
            value={name}
          />
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-5 font-semibold placeholder-black bg-white border-0 shadow-lg"
            value={email}
          />
          <input
            onChange={handleChangePassword}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-5 font-semibold placeholder-black bg-white border-0 shadow-lg"
            value={password}
          />
          <div className="flex items-center py-3 space-x-2 md:p-3 checkbox">
            <input type="checkbox" />
            <h3 className="text-sm font-semibold text-black ">
              I read and agree to{" "}
              <span className="font-bold text-red-600 ">
                Terms & Conditions
              </span>
            </h3>
          </div>
          <div className="signup-btn">
            <Button btnText="Create Account" SignUpBtn={true} />
          </div>
          <div className="sign-in">
            <h3 className="text-sm font-semibold text-black ">
              Already have an account?{" "}
              <span className="font-bold text-red-600">Sign in</span>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
