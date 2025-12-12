import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

  const navigate = useNavigate();

  // Country list
  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "Canada", code: "+1" },
    { name: "China", code: "+86"},
    { name: "Mexico", code: "+52"},
    { name: "Germany", code: "+49"},
    { name: "France", code: "+33"},
    { name: "Italy", code: "+39"},
    { name: "Spain", code: "+34"},
    { name: "Poland", code: "+48"},
    { name: "Ukraine", code: "+380"},
    { name: "Russia", code: "+7"},
    { name: "Afghanistan", code: "+93"},
    { name: "Nepal", code: "+977"},
    { name: "Brazil", code: "+55"}
  ];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = () => {
    if (!fullName || !email || !password) {
      alert("Please fill required fields");
      return;
    }

    // Save ONLY name & email for Profile page
    localStorage.setItem("user", JSON.stringify({
      name: fullName,
      email: email
    }));

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-primary flex justify-center text-primary">

        <div className="w-full max-w-md bg-secondary p-8 m-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Create Account
          </h1>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Phone + Country */}
          <div className="flex gap-3 mb-3">

            <select
              className="p-3 border border-color bg-secondary text-primary rounded-lg"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
            >
              <option value="">Select Country</option>
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted"
            />
          </div>

          {/* Address */}
          <textarea
            placeholder="Address"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          ></textarea>

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition"
          >
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center mt-4 text-sm text-secondary">
            Already have an account?{" "}
            <Link to="/Login" className="hover-text-accent-secondary">
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  );
};

export default Signin;
