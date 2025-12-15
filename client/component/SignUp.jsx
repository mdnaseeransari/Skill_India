import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
 
  let[userData,setUserData]=useState({
    fullName:"",
    email:"",
    selectedCode:"",
    phoneNumber:"",
    address:"",
    password:""
  })
function handleInput(e){
  setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
}
async function handleFormSubmit(e){
  e.preventDefault();
  console.log(userData);
    try {
      const res = await axios.post("http://localhost:3000/user/signup",userData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data?.error || "Signup failed");
      alert(error.response?.data?.error || "Signup failed");
    }
  }
  return (
    <>
      <div className="bg-primary flex justify-center  text-primary">

        <div className="w-full max-w-md bg-secondary p-8 m-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Create Account
          </h1>

          {/* Full Name */}
          <form onSubmit={handleFormSubmit}>
          <input
            value={userData.fullName}
            name="fullName"
            onChange={handleInput}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Email */}
          <input
            value={userData.email}
            name="email"
            onChange={handleInput}          
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          {/* Phone Number with Country Dropdown */}
          <div className="flex gap-3 mb-3">
            
            {/* Dropdown Code for country*/}
            <select
            className="p-3 border border-color bg-secondary text-primary rounded-lg"
            value={userData.selectedCode}
            name="selectedCode"
            onChange={handleInput}>
            <option>Select Country</option>
             {countryCodes.map((c,index) => (
             <option key={index} value={c.code}>
            {c.name} ({c.code})
           </option>
          ))}
          </select>


            {/* Phone Input */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-3 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted"
              value={userData.phoneNumber}
              onChange={handleInput}/>
          </div>

          {/* Address */}
          <textarea
            value={userData.address}
            name="address"
            onChange={handleInput}          
            placeholder="Address"
            rows="3"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          ></textarea>

          {/* Password */}
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


          {/* Button */}
          <button className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition">
            Sign Up
          </button>
          </form>

          {/* Login link */}
          <p className="text-center mt-4 text-sm text-secondary">
            Already have an account? <Link to="/Login" className="hover-text-accent-secondary">
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default SignUp;
