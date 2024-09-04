import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://greenagrichain-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosFetcher = (url) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
