import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AdminProfile = () => {
  const user=useLoaderData();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };
  return (
    <>
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
      </div>
    </div>
    </>
  )
}

export default AdminProfile
