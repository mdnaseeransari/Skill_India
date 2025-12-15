import axios from "axios";
export async function courseLoader() {
    try {
        const res = await axios.get("http://localhost:3000/courses");
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
