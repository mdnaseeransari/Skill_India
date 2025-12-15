import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const  Profile = () => {

  const {user}=useLoaderData();
  const [activeTab, setActiveTab] = useState("enrolled");

  // Temporary course data (replace later with backend data)
  const courses = [
    {
      id: 1,
      title: "FrontEnd Development",
      category: "Intermediate",
      students: 100,
      progress: 80,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      id: 2,
      title: "Full Stack Development",
      category: "Advanced",
      students: 300,
      progress: 100,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };

  const visibleCourses =
    activeTab === "completed"
      ? courses.filter((course) => course.progress === 100)
      : courses;

  return (
    <div className="bg-primary min-h-screen p-6">
      <div className="max-w-6xl mx-auto">

        {/*  Dashboard Header */}
        <div className="border-color border bg-primary p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer m-4">
          <div className="flex items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180"
              alt="profile"
              className="w-24 h-24 rounded-full border"
            />

            <div>
              <h2 className="text-2xl font-bold text-primary">{user.fullName}</h2>
              <p className="text-secondary text-sm">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="bg-purple-600 w-full md:w-auto px-6 py-2 rounded-xl border text-black transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setActiveTab("enrolled")}
            className={`px-5 py-2 rounded-xl ${
              activeTab === "enrolled"
                ? "bg-purple-600"
                : "bg-secondary text-gray-400"
            }`}
          >
            Enrolled Courses
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-5 py-2 rounded-xl ${
              activeTab === "completed"
                ? "bg-purple-600"
                : "bg-secondary text-gray-400"
            }`}
          >
            Completed Courses
          </button>
        </div>

        {/* Course Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="bg-secondary p-4 rounded-2xl shadow border border-color"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <p className="text-gray-400 text-sm">
                Level: {course.category}
              </p>
              <p className="text-gray-400 text-sm">
                Students: {course.students}
              </p>

              <div className="mt-4 bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-purple-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p className="text-sm text-right mt-1 text-gray-400">
                {course.progress}% complete
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default  Profile;

