import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import video1 from "./video.mp4"; 
import { useState } from "react";

const lessons = [
  { id: 1, title: "Introduction to the Course", video: video1, duration: "5:30" },
  { id: 2, title: "Getting Started", video: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "8:45" },
  { id: 3, title: "Core Concepts", video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", duration: "12:20" },
  { id: 4, title: "Practical Examples", video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", duration: "15:00" },
  { id: 5, title: "Advanced Topics", video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", duration: "18:30" },
  { id: 6, title: "Project Overview", video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4", duration: "10:15" },
  { id: 7, title: "Building the Project", video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4", duration: "25:10" },
  { id: 8, title: "Testing and Debugging", video: "https://samplelib.com/lib/preview/mp4/sample-1s.mp4", duration: "14:40" },
];

function Learning() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [watchedLessons, setWatchedLessons] = useState([]);

  const handleVideoEnd = () => {
    setWatchedLessons((prev) =>
      prev.includes(currentLesson) ? prev : [...prev, currentLesson]
    );

    if (currentLesson < lessons.length) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const allCompleted = watchedLessons.length === lessons.length;
  const currentVideo = lessons.find((l) => l.id === currentLesson)?.video;

  return (
    <div className="dark-mode bg-primary min-h-screen flex flex-col gap-5 p-5 md:p-16">

      <div className="text-secondary flex items-center w-fit text-lg cursor-pointer mb-3">
        <Link to="/"><IoIosArrowBack className="mr-1" /></Link>
        <Link to="/">Back to Profile</Link>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <video
          key={currentLesson}
          src={currentVideo}
          className="w-full md:w-[850px] h-[250px] md:h-[450px] rounded-2xl"
          controls
          autoPlay
          onEnded={handleVideoEnd}
        ></video>

        <div className="text-primary bg-secondary border border-color rounded-2xl p-5 flex-1 h-[450px] overflow-y-auto">
          <h1 className="text-xl font-bold mb-1">Course Content</h1>
          <h2 className="text-secondary text-sm mb-4">
            {watchedLessons.length} / {lessons.length} lessons completed
          </h2>

          {lessons.map((lesson) => {
            const isActive = currentLesson === lesson.id;
            const isWatched = watchedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => setCurrentLesson(lesson.id)}
                className={`flex justify-between items-center p-3 rounded-xl border border-color mb-3 cursor-pointer ${
                  isActive ? "bg-section text-primary" : "bg-secondary text-secondary"
                } hover:bg-section transition`}
              >
                <div>
                  <p className={`font-semibold ${isActive && "text-primary"}`}>
                    {lesson.title}
                  </p>
                  <p className="text-muted text-sm">{lesson.duration}</p>
                </div>

                {isWatched ? (
                  <FaRegCheckCircle className="text-green-400" size={22} />
                ) : (
                  <FaRegCircle className="text-muted" size={22} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-secondary border border-color text-primary rounded-2xl p-5 mt-5">
        <h1 className="text-2xl font-bold mb-2">
          Course
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet 
        </p>

        <div className="mt-5">
          <p className="text-secondary mb-1">Course Progress</p>
          <div className="w-full h-2 bg-muted rounded-full">
            <div
              className="bg-accent-primary h-2 rounded-full"
              style={{ width: `${(watchedLessons.length / lessons.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-5 mt-5 flex-wrap">
          <button
            className={`px-4 py-2 rounded-lg ${
              allCompleted
                ? "bg-accent-primary text-button"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={!allCompleted}
          >
            Completed
          </button>

          <button
            className="bg-secondary border border-color text-primary px-4 py-2 rounded-lg"
            onClick={() => {
              if (currentLesson < lessons.length) {
                setCurrentLesson(currentLesson + 1);
              }
            }}
          >
            Next Lesson
          </button>
        </div>
      </div>
    </div>
  );
}
export default Learning;