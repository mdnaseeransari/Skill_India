import axios from "axios";

export async function courseDetailsLoader({ params }) {
    try {
        const res = await axios.get(
          `http://localhost:3000/courses/${params.courseId}`
        );
        return res.data; // single course object
      } catch (error) {
        console.log(error);
    }}
