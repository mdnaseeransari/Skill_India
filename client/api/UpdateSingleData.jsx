import axios from "axios";

export async function editCourseLoader({ params }) {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:3000/courses/${params.courseId}`,
          {headers: {Authorization: `Bearer ${token}`}}
        );
        return res.data; // single course object
      } catch (error) {
        console.log(error);
    }}
     