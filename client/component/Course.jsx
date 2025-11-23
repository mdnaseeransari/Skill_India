import React from "react";
import { courses } from "../data/courses";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const Course = () => {
  const featured = courses;
  const [open1, setOpen1] = useState(false);
  const [selected1, setSelected1] = useState("All");
  const [open2, setOpen2] = useState(false);
  const [selected2, setSelected2] = useState("All Levels");
  const [open3, setOpen3] = useState(false);
  const [selected3, setSelected3] = useState("Most Popular");
  const categories = [
    "All",
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Health & Fitness",
    "Music",
  ];
  const levels=[
    "All Levels",
    "Beginner",
    "Intermediate",
    "Advanced"
  ]
  const Dropdown3=[
    "Most Popular",
    "Highest Rated",
    "Price: Low to High",
    "Price: High to Low"
  ]
  return (
    <>
<div className="text-primary bg-primary">
  <div className="flex flex-col gap-3  justify-center items-center w-screen sm:flex-row">
    <div>

    {/* Dropdown Button */}
    <button
      onClick={() => setOpen1(!open1)}
      className="w-[200px] mt-4 px-4 py-2 bg-primary border border-color rounded-lg flex justify-between items-center shadow-sm"
    >
      {selected1}
      <FaChevronDown
        className={`transition-transform ${open1 ? "rotate-180" : ""}`}
      />
    </button>

    {/* Dropdown Items */}
    {open1 && (
      <div className="absolute z-20 mt-2 w-[200px] bg-primary text-primary shadow-lg rounded-xl border max-h-80 overflow-y-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected1(item);
              setOpen1(false);
            }}
            className={`cursor-pointer px-4 py-3 text-sm hover:bg-orange-500 rounded-lg ${
              selected1 === item
                ? "bg-orange-500 text-primary"
                : "text-primary "
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    )}
    </div>



<div>
    {/* Dropdown Button */}
    <button
      onClick={() => setOpen2(!open2)}
      className="w-[200px] mt-4 px-4 py-2 bg-primary border border-color rounded-lg flex justify-between items-center shadow-sm"
    >
      {selected2}
      <FaChevronDown
        className={`transition-transform ${open2 ? "rotate-180" : ""}`}
      />
    </button>

    {/* Dropdown Items */}
    {open2 && (
      <div className="absolute z-20 mt-2 w-[200px] bg-primary text-primary shadow-lg rounded-xl border max-h-80 overflow-y-auto">
        {levels.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected2(item);
              setOpen2(false);
            }}
            className={`cursor-pointer px-4 py-3 text-sm hover:bg-orange-500 rounded-lg ${
              selected2 === item
                ? "bg-orange-500 text-primary"
                : "text-primary "
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>


<div>
    {/* Dropdown Button */}
    <button
      onClick={() => setOpen3(!open3)}
      className="w-[200px] mt-4 px-4 py-2 bg-primary border border-color rounded-lg flex justify-between items-center shadow-sm"
    >
      {selected3}
      <FaChevronDown
        className={`transition-transform ${open3 ? "rotate-180" : ""}`}
      />
    </button>

    {/* Dropdown Items */}
    {open3 && (
      <div className="absolute z-20 mt-2 w-[200px] bg-primary text-primary shadow-lg rounded-xl border max-h-80 overflow-y-auto">
        {Dropdown3.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected3(item);
              setOpen3(false);
            }}
            className={`cursor-pointer px-4 py-3 text-sm hover:bg-orange-500 rounded-lg ${
              selected3 === item
                ? "bg-orange-500 text-primary"
                : "text-primary "
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
</div>


  {/* cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 sm:p-10">
    {featured.map((value, index) => (
      <div
        key={value.id}
        className="rounded-xl bg-primary max-w-[350px] w-full mx-auto border border-color"
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

          <p className="pt-2 text-secondary text-sm sm:text-base">
            Category: {value.category}
          </p>

          <div className="flex justify-between items-center pt-2 text-secondary text-sm sm:text-base">
            <p>Students: {value.students}</p>
            <p>Rating: {value.rating} ⭐</p>
          </div>

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
</div>


</>
);
};

export default Course;
