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

export type UserLogin = {
    email: string;
    password: string;
}

export type UserRegister = {
    name: string;
    email: string;
    password: string;
    address: string;
    isAdmin: boolean;
}

export type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export type JwtPayload = {
    sub: string;
}