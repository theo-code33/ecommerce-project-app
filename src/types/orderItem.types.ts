import { Order } from "./order.types";
import { Product } from "./product.types";

export type OrderItem = {
    id: string;
    order: Order;
    product: Product;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export type OrderItemCreate = {
    order: string;
    product: string;
    quantity: number;
}

export type OrderItemUpdate = {
    order?: Order;
    product?: Product;
    quantity?: number;
}