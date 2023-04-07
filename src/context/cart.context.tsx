import orderService from "@/services/order.service";
import { PropsChildren } from "@/types/generics.types";
import { Order, OrderContextType } from "@/types/order.types";
import { UserContextType } from "@/types/user.types";
import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { UserContext } from "./user.context";

export const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider: React.FC<PropsChildren> = ({children}) => {
    const [order, setOrder] = useState<Order | null>(null);
    const { user } = useContext(UserContext) as UserContextType;
    const getOrder = async () => {
        if(!user) return
        const orderResponse = await orderService.getByUserId(user.id)
        const pendingOrder = orderResponse.find((order: Order) => order.status === "pending")
        setOrder(pendingOrder)
    }
    useEffect(() => {
        getOrder()
    }, [user])
    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}