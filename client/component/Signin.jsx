import React, { useState } from 'react';
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
  const [showPass, setShowPass] = useState(false);

  const handleSignup = () => {
    if (!fullName || !email || !password) {
      alert("Please fill required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      name: fullName,
      email: email
    }));

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-primary min-h-screen flex justify-center items-center p-6 text-primary">

        <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">

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
          <div className="flex flex-col sm:flex-row gap-3 mb-3">

            <select
              className="p-3 border border-color bg-secondary text-primary rounded-lg w-full sm:w-40"
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

          {/* Password with Eye Toggle */}
          <div className="relative w-full mb-3">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted pr-12"
            />

            {/* Eye Toggle Button */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                // Eye Off Icon (hide)
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-6 h-6 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.584 10.59A3.001 3.001 0 0112 9c1.657 0 3 1.343 3 3 0 .42-.084.82-.236 1.184M6.532 6.53A9.98 9.98 0 003 12s3 7 9 7c1.838 0 3.53-.53 5-1.47m2.468-2.47A9.98 9.98 0 0021 12s-3-7-9-7c-1.838 0-3.53.53-5 1.47" />
                </svg>
              ) : (
                // Eye Icon (show)
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-6 h-6 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.01 9.964 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.01-9.964-7.183z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </span>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
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
