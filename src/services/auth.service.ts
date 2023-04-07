import { UserLogin } from "@/types/user.types";
import axiosService from "./axios.service";

const END_POINT = "/auth";

const login = async (data: UserLogin) => {
    const response = await axiosService.post(`${END_POINT}/login`, data);
    return response.data;
}

const authServices = {
    login
}

export default authServices;