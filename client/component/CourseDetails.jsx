import { FaCartShopping } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
    const course = useLoaderData();
    const navigate = useNavigate();

async function handleEnrollCourse(courseId) {
  const token = localStorage.getItem("token");
  // Check login first
    if (!token) {
    alert("Please login to enroll in a course");
    navigate("/Login");
    return;
  }
  try {
    await axios.post(`http://localhost:3000/user/enroll`,{ courseId },{headers: {Authorization: `Bearer ${token}`}});
    alert("Course Enrolled Successfully");
    navigate("/dashboard/profile");
  } catch (err) {
    // If token expired or invalid
    if (err.response?.status === 401) {
      alert("Session expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/Login");
    } else {
      alert(err.response?.data?.message || "Enrollment failed");
    }
  }
}
  return (
    <>
    <div className='flex bg-primary text-primary justify-around'>
        <div className='flex flex-col w-4xl gap-4 my-16'>
            <h1 className='text-4xl text-primary font-bold'>{course.title}</h1>
            <h1 className='text-xl text-secondary'>{course.description}</h1>
            <div className="flex items-center text-sm sm:text-base gap-2">
                <FaRegClock />
                <p className=''>{course.duration} total</p>
            </div>
        </div>

        <div className='flex flex-col gap-3 rounded-2xl bg-primary my-4 border border-color'>
            <img src={`${course.img}`} alt="loading" className='w-96 h-64 rounded-t-xl'/>
            <h1 className='text-3xl text-primary font-bold mx-4'>{course.price}</h1>
            <button onClick={()=>handleEnrollCourse(course._id)} className='mx-4 px-4 py-3 rounded-xl text-button cursor-pointer hover-bg-accent-primary bg-accent-primary'>Buy Now</button>
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
