import React from "react";
import { useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="bg-primary flex justify-center grow p-10 text-primary">
      <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Verify OTP
        </h1>

        <p className="text-sm text-center mb-4 text-muted">
          OTP sent to <span className="font-semibold">{email}</span>
        </p>

        {/* OTP FIELD */}
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full p-3 mb-4 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted"
        />

        {/* NEW PASSWORD FIELD */}
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-6 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted"
        />

        {/* DISPLAY BUTTON */}
        <button
          className="bg-accent-secondary w-full p-3 rounded-lg font-semibold cursor-pointer"
        >
          Change Password
        </button>

      </div>
    </div>
  );
};

export default VerifyOtp;