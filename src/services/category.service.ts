import { CategoryCreate, CategoryUpdate } from "@/types/category.types";
import axiosService from "./axios.service";

const END_POINT = "/category";

const getAll = async () => {
    const response =  await axiosService.get(END_POINT);
    return response.data;
}

const getLastCategories = async () => {
    const response = await axiosService.get(`${END_POINT}?limit=3&offset=0`);
    return response.data;
}

const getById = async (id: string) => {
    const response = await axiosService.get(`${END_POINT}/${id}`);
    return response.data;
}

const create = async (data: CategoryCreate) => {
    const response = await axiosService.post(END_POINT, data);
    return response.data;
}

const update = async (id: string, data: CategoryUpdate) => {
    const response = await axiosService.patch(`${END_POINT}/${id}`, data);
    return response.data;
}

const remove = async (id: string) => {
    const response = await axiosService.delete(`${END_POINT}/${id}`);
    return response.data;
}

const categoryService = {
    getAll,
    getLastCategories,
    getById,
    create,
    update,
    remove
}

export default categoryService;