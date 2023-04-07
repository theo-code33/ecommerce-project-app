import { Product } from "./product.types";

export type Category = {
    id: string;
    name: string;
    description: string;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
export type CategoryCreate = {
    name: string;
    description: string;
}

export type CategoryUpdate = {
    name?: string;
    description?: string;
}