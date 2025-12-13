import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Login = () => {
  let[userData,setUserData]=useState({
    username:"",
    password:""
  })

  function handleInput(e){
  setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  function handleFormSubmit(e){
  e.preventDefault();
  console.log(userData);
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
            placeholder="Username"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          <input
            name="password"
            value={userData.password}
            onChange={handleInput}
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
          />

          <button className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition">
            Login
          </button>
        </form>

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
      {/* </div> */}
    </>
  )
}

export default Login
