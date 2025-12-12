import React, { useState } from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="bg-primary min-h-screen p-6 text-white text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold">You are not logged in</h1>
      </div>
    );
  }

  const courses = [
    {
      id: 1,
      title: "FrontEnd Development",
      category: "Intermediate",
      rating: 4.5,
      hours: 10,
      students: 100,
      progress: 80,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      id: 2,
      title: "Full Stack Development",
      category: "Advanced",
      rating: 5,
      hours: 12,
      students: 300,
      progress: 100,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    }
  ];

  const [tab, setTab] = useState("enrolled");

  return (
    <div className="bg-primary min-h-screen p-5 md:p-10 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Profile Section */}
        <div className="bg-secondary p-6 md:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">

          {/* User info */}
          <div className="flex items-center gap-6">
            <img
              src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt="profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-400"
            />

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-400 text-sm md:text-base">{user.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
            className="bg-accent-secondary w-full md:w-auto px-6 py-2 rounded-xl text-button hover-bg-accent-secondary transition cursor-pointer"
          >
            Logout
          </button>

        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className={`px-5 py-2 rounded-xl ${
              tab === "enrolled" ? "bg-purple-600" : "bg-secondary text-gray-400"
            }`}
            onClick={() => setTab("enrolled")}
          >
            Enrolled Courses
          </button>

          <button
            className={`px-5 py-2 rounded-xl ${
              tab === "completed" ? "bg-purple-600" : "bg-secondary text-gray-400"
            }`}
            onClick={() => setTab("completed")}
          >
            Completed
          </button>
        </div>

        {/* Course Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-secondary p-4 rounded-2xl shadow-lg">

              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl mb-4 h-40 object-cover w-full"
              />

              <h2 className="text-lg md:text-xl font-bold">{course.title}</h2>
              <p className="text-gray-400">Category: {course.category}</p>
              <p className="text-gray-400">Students: {course.students}</p>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-purple-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p className="text-sm text-right text-gray-400 mt-1">
                {course.progress}% Complete
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profile;
