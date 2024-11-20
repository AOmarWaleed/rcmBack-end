import axios from "axios";
import { EXTERNAL_API_BASE_URL } from "./env.js";


const axiosInstance = axios.create({
  baseURL: EXTERNAL_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
