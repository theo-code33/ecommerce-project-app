import { OrderContext } from "@/context/cart.context";
import orderService from "@/services/order.service";
import orderItemService from "@/services/orderItem.service";
import productServices from "@/services/product.service";
import { PropsProduct } from "@/types/generics.types";
import { OrderContextType } from "@/types/order.types";
import { Product } from "@/types/product.types";
import Image from "next/image";
import { useContext } from "react";


const productItem: React.FC<PropsProduct> = ({product}) => {
    const { order, setOrder } = useContext(OrderContext) as OrderContextType;

    const addToCart = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const quantity = parseInt(e.currentTarget.quantity.value)
        if (quantity > 0) {
            if(order){
                const existingOrderItem = order.items.find((item) => item.product.id === product.id)
                console.log("existing => ", existingOrderItem);
                
                if (existingOrderItem) {
                    try {
                        const updatedOrderItem = await orderItemService.update(existingOrderItem.id, {
                            quantity: existingOrderItem.quantity + quantity
                        })
                        const updateOrder = await orderService.update(order.id, {
                            amount: order.amount + product.price * quantity
                        })
                        setOrder({
                            ...order,
                            items: order.items.map((item) => item.id === updatedOrderItem.id ? updatedOrderItem : item),
                            amount: order.amount + product.price * quantity
                        })
                    } catch (error) {
                        console.log(error);
                    }
                    return;
                }
                try {
                    const orderItem = await orderItemService.create({
                        order: order.id,
                        quantity: quantity,
                        product: product.id,
                    })
                    const updatedOrder = await orderService.update(order.id, {
                        amount: order.amount + product.price * quantity
                    })
                    setOrder({
                        ...order,
                        items: [...order.items, orderItem],
                        amount: updatedOrder.amount
                    })            
                } catch (error) {
                    console.log(error);
                }

            }else{
                try {
                    const newOrder = await orderService.create({
                        status: "pending",
                        amount: product.price * quantity,
                        user: "245626e9-dc48-4a71-9ebd-a5280504dc6f"
                    })
                    const orderItem = await orderItemService.create({
                        order: newOrder.id,
                        quantity,
                        product: product.id
                    })
                    setOrder({
                        ...newOrder,
                        items: [orderItem]
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    return (
        <section className="product-page-item">
            <h1 className="m-5">{product.name}</h1>
            <Image 
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                style={{width: "100%", objectFit: "cover"}}
            />
            <div className="d-flex gap-3 m-3">
                <span className="badge bg-info p-3">{product.category.name}</span>
                <span className="badge bg-info p-3">{product.price} €</span>
            </div>
            <p className="m-3">{product.description}</p>
            <form onSubmit={addToCart}>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" defaultValue="1"/>
                </div>
                <button type="submit" className="btn btn-primary">Add to cart</button>
            </form>
        </section>
     );
}
 
export default productItem;

export const getStaticPaths = async () => {
    const products = await productServices.getAll()
    const paths = products.map((product : Product ) => ({
            params: { id: product.id }
        })
    )

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context : any) => {
    const product = await productServices.getById(context.params.id)
    return {
        props: {
            product
        }
    }
}