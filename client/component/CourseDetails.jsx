import React from 'react'
import { courses } from '../data/courses';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const params=useParams();
    console.log(params);
  return (
    <>
    <div className='flex bg-secondary text-primary justify-around mt-4 rounded-xl'>
        <div className='flex flex-col w-4xl gap-4'>
            <h1 className='text-4xl text-primary font-bold'>{courses[params.courseId-1].title}</h1>
            <h1 className='text-xl text-secondary'>{courses[params.courseId-1].description}</h1>
            <div className="flex items-center text-sm sm:text-base gap-2">
                <FaRegClock />
                <p className=''>{courses[params.courseId-1].time} total</p>
            </div>

        </div>
        <div className='flex flex-col gap-3 rounded-2xl bg-primary   border border-color'>
            <img src={`${courses[params.courseId-1].img}`} alt="loading" className='w-96 h-64 rounded-t-xl'/>
            <h1 className='text-3xl text-primary font-bold mx-4'>{courses[params.courseId-1].price}</h1>
            <button className='mx-4 px-4 py-3 rounded-xl text-button cursor-pointer hover-bg-accent-primary bg-accent-primary'>Buy Now</button>
            <div className='flex  justify-center items-center  gap-3 mx-4 my-2 px-4 py-3 rounded-xl text-button hover-bg-accent-primary bg-accent-primary cursor-pointer border border-color'>
            <FaCartShopping className="text-2xl cursor-pointer" />
            <button className=' cursor-pointer text-button'>Add to Cart</button>
            </div>
        </div>
    </div>
        {/* <div className='m-4'>
            <h1 className='text-2xl'>What you'll learn</h1>
            <div className='flex gap-6'>
                <p>Build Java applications from scratch</p>
                <p>Understand core Java syntax and object-oriented programming</p>
            </div>
            <div className='flex gap-6'>
                <p>Work with classes, objects, inheritance, and polymorphism</p>
                <p>Handle exceptions and manage files in Java</p>
            </div>
            <div className='flex gap-6'>
                <p>Use Java Collections and multithreading effectively</p>
                <p>Develop console and basic GUI-based applications</p>
            </div>
        </div> */}
    </>
  )
}

export default CourseDetails
