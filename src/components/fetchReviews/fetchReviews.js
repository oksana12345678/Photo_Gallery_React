import axios from "axios";

const baseURL = "https://portfolio-js.b.goit.study/api";

const fetchReviews = async () => {
  const END_POINT = "/reviews";
  const url = `${baseURL}${END_POINT}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
export default fetchReviews;
