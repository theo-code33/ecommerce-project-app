import { OrderCreate, OrderUpdate } from "@/types/order.types";
import axiosService from "./axios.service";

const END_POINT = "/order";

const getAll = async () => {
    const response = await axiosService.get(END_POINT);
    return response.data;
}

const getById = async (id: string) => {
    const response = await axiosService.get(`${END_POINT}/${id}`);
    return response.data;
}

const create = async (data: OrderCreate) => {
    const response = await axiosService.post(END_POINT, data);
    return response.data;
}

const update = async (id: string, data: OrderUpdate) => {
    const response = await axiosService.patch(`${END_POINT}/${id}`, data);
    return response.data;
}

const remove = async (id: string) => {
    const response = await axiosService.delete(`${END_POINT}/${id}`);
    return response.data;
}

const orderService = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default orderService;