import React from 'react'
import { Link } from "react-router-dom";
import { IoBookOutline, IoPeople } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";


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

      <div className="bg-secondary text-primary p-6 sm:p-14 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        <div className="flex flex-col items-center text-center">
          <IoBookOutline className="text-3xl sm:text-4xl mb-2" />
          <p className="font-bold text-3xl sm:text-4xl">10,000+</p>
          <p className="text-sm sm:text-base text-secondary">Active Courses</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <IoPeople className="text-3xl sm:text-4xl mb-2" />
          <p className="font-bold text-3xl sm:text-4xl">5M+</p>
          <p className="text-sm sm:text-base text-secondary">Students Enrolled</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaChalkboardTeacher className="text-3xl sm:text-4xl mb-2" />
          <p className="font-bold text-3xl sm:text-4xl">2500+</p>
          <p className="text-sm sm:text-base text-secondary">Expert Instructors</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaArrowTrendUp className="text-3xl sm:text-4xl mb-2" />
          <p className="font-bold text-3xl sm:text-4xl">98%</p>
          <p className="text-sm sm:text-base text-secondary">Success Rate</p>
        </div>
      </div>


      <div className='bg-secondary border border-color p-10 text-primary'>
        <h1 className="text-primary font-bold text-3xl mx-4 md:mx-22">Popular Categories</h1>
        <div className='flex flex-wrap justify-between mt-10 gap-4 mx-4 md:mx-22 '>
          {["FrontEnd", "Data Structure & Algorithm", "BackEnd", "FullStack"].map((cat, index) => (
            <Link key={index} to='/course'>
              <div
                key={index}
                className='border border-color w-60 h-25 flex items-center justify-center rounded-2xl cursor-pointer text-xl text-center hover-text-accent-primary'
              >
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='bg-secondary border border-color p-10 text-primary'>
        <div className='flex justify-between items-center'>
          <h1 className="text-primary font-bold text-3xl mx-4 md:mx-22">Featured Courses</h1>
          <Link to="/course">
            <p className='mr-4 md:mr-30 text-secondary hover-text-accent-primary font-bold'>View all</p>
          </Link>
        </div>
      </div>


    </>
  )
}

export default Home
