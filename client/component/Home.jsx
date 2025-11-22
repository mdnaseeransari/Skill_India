import React from 'react'
import { Link } from "react-router-dom";
import { IoBookOutline, IoPeople } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";


const Home = () => {
  const courses = [
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      title: "FrontEnd Development",
      time: "10 hours",
      price: "$80"
    },
    {
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      title: "Full Stack Development",
      time: "12 hours",
      price: "$120"
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "UI/UX Design",
      time: "8 hours",
      price: "$60"
    },
    {
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      title: "React Basics",
      time: "6 hours",
      price: "$50"
    },
    {
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      title: "Node.js Course",
      time: "9 hours",
      price: "$70"
    },
    {
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      title: "JavaScript Mastery",
      time: "14 hours",
      price: "$150"
    }
  ];


  return (

    <>
      {/* first section  */}
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

      {/* second sections */}

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

      {/* third section */}
      <div className='bg-secondary border border-color p-10 text-primary'>
        <h1 className="text-primary font-bold text-3xl mx-4 md:mx-22">Popular Categories</h1>
        <div className='flex flex-wrap justify-between mt-10 gap-4 mx-4 md:mx-22 '>
          {["FrontEnd", "Data Structure & Algorithm", "BackEnd", "FullStack"].map((value, index) => (
            <Link key={index} to='/course'>
              <div
                key={index}
                className='border border-color w-60 h-25 flex items-center justify-center rounded-2xl cursor-pointer text-xl text-center hover-text-accent-primary'
              >
                {value}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* fourth section */}
      <div className='bg-secondary border border-color p-10 text-primary'>
        <div className='flex justify-between items-center'>
          <h1 className="text-primary font-bold text-3xl mx-4 md:mx-22">Featured Courses</h1>
          <Link to="/course">
            <p className='mr-4 md:mr-30 text-secondary hover-text-accent-primary font-bold'>View all</p>
          </Link>
        </div>

        <Link to="/course">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 sm:p-10">
            {courses.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-primary max-w-[350px] w-full mx-auto"
              >
                <img
                  src={value.img}
                  alt="course"
                  className="rounded-t-xl w-full h-48 object-cover"
                />

                <div className="m-4">
                  <h1 className="text-primary font-bold text-lg sm:text-xl lg:text-2xl hover-text-accent-primary">
                    {value.title}
                  </h1>

                  <div className="flex justify-between items-center pt-4 text-secondary">
                    <div className="flex items-center gap-2 text-sm sm:text-base">
                      <FaRegClock />
                      <p>{value.time}</p>
                    </div>

                    <div className="text-primary font-bold text-xl sm:text-2xl">
                      {value.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>


      {/* fifth section */}
      <div className='flex flex-col justify-center items-center text-primary bg-purple-800 p-20 gap-5'>
        <h1 className='font-bold text-4xl'>Ready to Start Learning?</h1>
        <h2 className='text-xl'>Join millions of learners around the world and transform your career today.</h2>
        <Link to="/course">
            <button className='bg-accent-secondary text-white px-6 py-4 mt-4 hover-bg-accent-secondary text-xl rounded-xl'>
              Get Started Now
            </button>
        </Link>
      </div>

    </>
  )
}

export default Home
