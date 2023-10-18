import axios from "axios";

const BASE_URL = ["https://skhole.onrender.com/api/v1", "http://localhost:3001/api/v1"];

const axiosInstance = axios.create({
  baseURL: BASE_URL[1],
});

export default axiosInstance;
