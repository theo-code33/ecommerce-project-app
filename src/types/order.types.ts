import { OrderItem } from "./orderItem.types";
import { User } from "./user.types";

export type Order = {
    id: string;
    status: string;
    amount: number;
    user: User;
    items: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export type OrderContextType = {
    order: Order | null;
    setOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

export type OrderCreate = {
    status: string;
    amount: number;
    user: string | null;
}
export type OrderUpdate = {
    status?: string;
    amount?: number;
    items?: OrderItem[];
}