import orderService from "@/services/order.service";
import { PropsOrders } from "@/types/generics.types";
import { table } from "console";
import Link from "next/link";

const Admin: React.FC<PropsOrders> = ({orders}) => {
    return ( 
        <section className="admin-container">
            <h1>Admin</h1>
            <Link href="/admin/product">My products</Link>
            <Link href="/admin/category">My categories</Link>
            <h2>Orders</h2>
            {orders.length > 0
            ? <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Client</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.user.name}</td>
                            <td>{order.items.map(item => (
                                <p key={item.id}>{item.product.name} x {item.quantity}</p>
                            ))}</td>
                            <td>{order.amount}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            : <p>No orders</p>
            }
        </section>
     );
}
 
export default Admin;

export const getServerSideProps = async () => {
    const orders = await orderService.getAll()
    return {
        props: {
            orders
        }
    }
}