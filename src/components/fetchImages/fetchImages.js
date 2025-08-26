import axios from "axios";

const ACCESS_KEY = "_53SPA543-Ouwekulccwys4bavGPErzn8O6UOPMC_rc";
axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchQuery, page, per_page) => {
  try {
    const response = await axios.get(
      `/search/photos?page=1&query=${searchQuery}`,
      {
        params: {
          page: page,
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
