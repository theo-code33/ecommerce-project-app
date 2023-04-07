import { Category } from "./category.types";
import { Order } from "./order.types";
import { Product } from "./product.types";

export type PropsChildren = {
    children: React.ReactNode;
}

export type PropsHome = {
    products: Product[];
    categories: Category[];
}

export type PropsProducts = {
    products: Product[];
}

export type PropsProduct = {
    product: Product;
    hideCategory?: boolean;
}

export type PropsProductUpdate = {
    product: Product;
    categories: Category[];
}

export type PropsCategories = {
    categories: Category[];
}

export type PropsCategory = {
    category: Category;
    hideDescription?: boolean;
}

export type PropsOrders = {
    orders: Order[];
}