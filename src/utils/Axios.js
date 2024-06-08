import axios from "axios";
import {baseURL} from "./EndPoint";
axios.defaults.withCredentials = true;


const axiosInstance = axios.create({
     baseURL:baseURL
})

export default axiosInstance;