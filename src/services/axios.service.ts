import axios from "axios";

const axiosService = axios.create({
    baseURL: `${process.env.API_URL}`,
})

export default axiosService;