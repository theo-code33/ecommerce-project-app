import { UpdateProduct } from "@/types/product.types";
import axiosService from "./axios.service";

const END_POINT = "/product";

const getAll = async () => {
    const response =  await axiosService.get(END_POINT);
    return response.data;
}

const getLastProducts = async () => {
    const response =  await axiosService.get(`${END_POINT}?limit=3&offset=0`);
    return response.data;
}

const getById = async (id: string) => {
    const response = await axiosService.get(`${END_POINT}/${id}`);
    return response.data;
}

const create = async (data: FormData) => {
    const response = await axiosService.post(END_POINT, data);
    return response.data;
}

const update = async (id: string, data: FormData) => {
    const product: UpdateProduct = {}
    data.forEach((value, key) => {
        product[key] = value;
    })


    const response = await axiosService.patch(`${END_POINT}/${id}`, product);
    return response.data;
}

const remove = async (id: string) => {
    const response = await axiosService.delete(`${END_POINT}/${id}`);
    return response.data;
}
const productServices = {
    getAll,
    getLastProducts,
    getById,
    create,
    update,
    remove
}
export default productServices;