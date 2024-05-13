import axios from "axios";

const ACCESS_KEY = "_53SPA543-Ouwekulccwys4bavGPErzn8O6UOPMC_rc";
axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `/search/photos?page=1&query=${searchQuery}`,
      {
        params: {
          query: searchQuery,
          page: page,
          per_page: 30,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error fetching images:", error);
    throw error;
  }
};
export default fetchImages;
