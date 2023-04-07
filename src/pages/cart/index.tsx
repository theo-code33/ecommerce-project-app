import { OrderContext } from "@/context/cart.context";
import orderItemService from "@/services/orderItem.service";
import { OrderContextType } from "@/types/order.types";
import { OrderItem } from "@/types/orderItem.types";
import Image from "next/image";
import { useContext } from "react";

const Cart = () => {
    const {order, setOrder} = useContext(OrderContext) as OrderContextType;

    const handleRemove = async (item : OrderItem) => {
        try {
            await orderItemService.remove(item.id);
            if(order){
                setOrder({
                    ...order,
                    items: order.items.filter((orderItem) => orderItem.id !== item.id),
                    amount: order.amount - item.product.price * item.quantity
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <section className="cart">
            <h1>Cart</h1>
            {order && order.items.length > 0 ? (
                <div className="cart-items">
                    {order.items.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-image">
                                <Image
                                    src={item.product.image}
                                    alt={item.product.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="cart-item-info">
                                <h3>{item.product.name}</h3>
                                <p>{item.product.price} €</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div>
                                <button onClick={() => {handleRemove(item)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items in cart</p>
            )}
        </section>
     );
}
 
export default Cart;