import React from 'react'
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <>
      <div className="bg-primary flex justify-center p-10 text-primary">

        <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Reset Password
          </h1>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          <input
            type="email"
            placeholder="Enter Registered Email"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          <button className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition">
            Send Recovery Code
          </button>

          <p className="text-center mt-4 text-sm text-secondary">
            Go back to{" "}
            <Link to="/Login" className="hover-text-accent-secondary">
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  )
}

export default Forgot
