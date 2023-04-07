import orderService from "@/services/order.service";
import { PropsChildren } from "@/types/generics.types";
import { Order, OrderContextType } from "@/types/order.types";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider: React.FC<PropsChildren> = ({children}) => {
    const [order, setOrder] = useState<Order | null>(null);
    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}