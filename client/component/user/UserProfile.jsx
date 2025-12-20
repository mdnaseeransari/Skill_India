import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, enrolled } = useLoaderData();
  const [activeTab, setActiveTab] = useState("enrolled");


  const visibleCourses =
    activeTab === "completed"
      ? enrolled.filter((item) => item.progress === 100)
      : enrolled;

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

        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-4 border border-color rounded-xl max-w-max p-1">
          <button
            onClick={() => setActiveTab("enrolled")}
            className={`px-5 py-2 rounded-xl ${activeTab === "enrolled"
                ? "bg-purple-600"
                : "bg-primary text-gray-400"
              }`}
          >Enrolled Courses
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-5 py-2 rounded-xl ${activeTab === "completed"
                ? "bg-purple-600"
                : "bg-primary text-gray-400"
              }`}
          >Completed Courses
          </button>
        </div>

        {/* Course Cards */}
        <div className="mt-10 flex flex-col gap-8 cursor-pointer">
          {visibleCourses.map((course) => (
            <div
              key={course.course._id}
              className="bg-secondary p-4 rounded-2xl shadow border border-color flex gap-3"
            >
              <div className="flex justify-center items-center">
                <img
                  src={course.course.img}
                  alt={course.course.title}
                  className="h-40 w-64 object-cover rounded-xl border border-color"
                />
              </div>
              <div className="flex justify-start flex-col w-full">
                <h3 className="text-xl font-bold text-primary">{course.course.title}</h3>
                <p className="text-secondary text-sm mb-2">
                  Level: {course.course.level}
                </p>
                <p className="text-secondary text-sm mb-1">Progress</p>
                <div className=" bg-gray-700 h-3 rounded-full">
                  <div
                    className="bg-purple-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <p className="text-sm text-right mt-1 text-secondary">
                  {course.progress}% complete
                </p>
                <button
                  onClick={() => navigate(`/dashboard/Learning/${course.course._id}`)}
                  className="bg-blue-600 px-3 py-2 rounded-xl text-white self-start"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profile;