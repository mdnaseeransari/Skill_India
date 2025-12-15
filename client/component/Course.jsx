import React from "react";
import {filter1, filter2} from "../data/courses";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const Course = () => {
  const featured = useLoaderData();
  console.log(featured);
  const [searchInput,setSearchInput]=useState("");
  const [open1, setOpen1] = useState(false);
  const [selected1, setSelected1] = useState("All");
  const [open2, setOpen2] = useState(false);
  const [selected2, setSelected2] = useState("All Levels");
  const categories = filter1;
  const levels=filter2;
  const navigate=useNavigate();

  const searchData=(featured).filter((curCard)=>{
    const mathSearch =curCard.title.toLowerCase().includes(searchInput.toLowerCase());
    const search1= selected1 === "All" || curCard.title.toLowerCase().includes(selected1.toLocaleLowerCase());
    const search2=selected2 ==="All Levels" || curCard.category.toLowerCase().includes(selected2.toLowerCase());
    return  mathSearch && search2 && search1;
  })
  return (
    <>
<div className="text-primary bg-primary">
  <div className="flex flex-col justify-center items-center">
  <div className="flex justify-center items-center m-3">
      <div className="relative flex justify-center items-center w-103">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg" />
        <input
          type="text"
          placeholder="Search for courses"
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
          className="bg-secondary pl-10 pr-3 py-2 w-full placeholder:text-muted bg-primary border border-color rounded-lg"
        />
      </div>
  </div>
  <div className="flex gap-3  justify-center items-center w-screen sm:flex-row">
    <div>

    {/* Dropdown Button */}
    <button
      onClick={() => setOpen1(!open1)}
      className="w-[200px]  px-4 py-2 bg-primary border border-color rounded-lg flex justify-between items-center shadow-sm"
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
      className="w-[200px]  px-4 py-2 bg-primary border border-color rounded-lg flex justify-between items-center shadow-sm"
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
</div>
</div>


  {/* cards */}


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 sm:p-10">
    {searchData.map((value) => (
      <div
        key={value._id}
        className="rounded-xl bg-primary max-w-[350px] w-full mx-auto border border-color"
        onClick={()=>navigate(`/course/${value._id}`)}
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
