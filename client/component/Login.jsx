import axios from 'axios';
import { useState } from 'react'
import { Link,useNavigate} from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  let[userData,setUserData]=useState({
    username:"",
    password:""
  })

  function handleInput(e){
  setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  async function handleFormSubmit(e){
  e.preventDefault();
  console.log(userData);
    try {
      const res = await axios.post("http://localhost:3000/user/login",userData,);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");

    } catch (error) {
      console.log(error || "Login failed");
      alert("Invalid username or password");
    }
  }



  return (
    <>
      <div className="bg-primary flex justify-center p-10 grow text-primary">
        <div className="w-full max-w-md bg-secondary p-8 rounded-2xl flex flex-col gap-6 shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Welcome Back
          </h1>

        <form onSubmit={handleFormSubmit}>
          <input
            name="username"
            value={userData.username}
            onChange={handleInput}
            type="text"
            placeholder=" Email address"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />
          <div className='relative flex items-center mb-3'>
          <input
            name="password"
            value={userData.password}
            onChange={handleInput}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 bg-secondary border border-color rounded-lg  text-primary placeholder:text-muted"
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 flex items-center cursor-pointer text-muted hover:text-primary">
          {showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted pr-12"
            />

            {/* Eye Toggle Icon (Default Style) */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                /* Eye OFF icon (hide) */
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
                /* Eye ON icon (show) */
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

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition"
          >
            Login
          </button>
        </form>

          {/* Links */}
          <div className="flex justify-between text-sm mt-4 text-secondary">
            <Link to="/Forgot" className="hover-text-accent-secondary">
              Forgot Password?
            </Link>
            <Link to="/SignUp" className="hover-text-accent-secondary">
              Create Account
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
