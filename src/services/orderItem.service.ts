import { OrderItemCreate, OrderItemUpdate } from "@/types/orderItem.types";
import axiosService from "./axios.service";

const END_POINT = "/order-item";

const getAll = async () => {
    const response = await axiosService.get(END_POINT);
    return response.data;
}

const getById = async (id: string) => {
    const response = await axiosService.get(`${END_POINT}/${id}`);
    return response.data;
}

const create = async (data: OrderItemCreate) => {
    const response = await axiosService.post(END_POINT, data);
    return response.data;
}

const update = async (id: string, data: OrderItemUpdate) => {
    const response = await axiosService.patch(`${END_POINT}/${id}`, data);
    return response.data;
}

const remove = async (id: string) => {
    const response = await axiosService.delete(`${END_POINT}/${id}`);
    return response.data;
}

const orderItemService = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default orderItemService;