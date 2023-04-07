import { UserRegister } from "@/types/user.types";
import axiosService from "./axios.service";

const END_POINT = "/user";

const getById = async (id: string) => {
    const response = await axiosService.get(`${END_POINT}/${id}`);
    return response.data;
}
const create = async (data: UserRegister) => {
    const response = await axiosService.post(END_POINT, data);
    return response.data;
}

const userServices = {
    getById,
    create
}

export default userServices;