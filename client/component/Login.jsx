import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleLogin() {
    if (!username.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Save user info
    localStorage.setItem("user", JSON.stringify({
      name: username,
      password: password
    }));

    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <div className="bg-primary flex justify-center p-10 grow text-primary">
        <div className="w-full max-w-md bg-secondary p-8 rounded-2xl flex flex-col gap-6 shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Welcome Back
          </h1>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Password with show/hide */}
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted pr-12"
            />

            {/* Eye Button */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
              onClick={() => setShowPass(!showPass)}
            >
            </span>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition"
          >
            Login
          </button>

          <div className="flex justify-between text-sm mt-4 text-secondary">
            <Link to="/Forgot" className="hover-text-accent-secondary">
              Forgot Password?
            </Link>

            <Link to="/Signin" className="hover-text-accent-secondary">
              Create Account
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
