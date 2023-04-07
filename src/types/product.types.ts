import { Category } from "./category.types";

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export type CreateProduct = {
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
}