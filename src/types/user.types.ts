import { Order } from "./order.types";

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    address: string;
    isAdmin: boolean;
    orders: Order[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}