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
      if(res.data.role=="admin") {
        navigate("/admin")
      }else{
        navigate("/dashboard");
      }

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
        
          {/* Login Button */}
          <button
            className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition cursor-pointer"
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
