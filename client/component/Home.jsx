import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <>
      <div className="bg-primary w-full h-auto p-6 md:p-16 lg:p-20">
        <div className="mx-4 md:mx-14">

          <h1 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl">
            Learn Without Limits
          </h1>

          <h2 className="text-secondary pt-8 text-base md:text-lg lg:text-xl w-full md:w-[70%] lg:w-[50%]">
            Start, switch, or advance your career with thousands of courses,
            Professional Certificates, and degrees from world-class universities and companies.
          </h2>

          <Link to="/course"><button className="bg-accent-primary text-button px-6 py-3 mt-10 rounded-xl">
            Explore Courses
          </button></Link>

        </div>

       
      </div>

    </>
  )
}

export default Home
