import axios from "axios";

const ACCESS_KEY = "_53SPA543-Ouwekulccwys4bavGPErzn8O6UOPMC_rc";

const fetchImages = async (searchQuery, page, per_page) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}`,
      {
        params: {
          per_page: per_page,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching images:", error);
    throw error;
  }
};
export default fetchImages;
