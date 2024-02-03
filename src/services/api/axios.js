import axios from "axios";

const BASE_URL = ["https://skhole.onrender.com/api/v1", "http://localhost:3001/api/v1"];

const axiosInstance = axios.create({
  baseURL: BASE_URL[process.env.NODE_ENV === "production" ? 0 : 0],
});

export default axiosInstance;
