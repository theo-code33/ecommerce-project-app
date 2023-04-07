import { OrderContext } from "@/context/cart.context";
import { UserContext } from "@/context/user.context";
import { removeToken } from "@/function/localStorage.function";
import { OrderContextType } from "@/types/order.types";
import { UserContextType } from "@/types/user.types";
import { useRouter } from "next/router";
import { useContext } from "react";

const Profil = () => {
    const { setOrder } = useContext(OrderContext) as OrderContextType
    const { user, setToken, setUser } = useContext(UserContext) as UserContextType
    const router = useRouter()

    const handleLogOut = () => {
        removeToken()
        setToken(null)
        setUser(null)
        setOrder(null)
        router.push('/')
    }
    return ( 
        <section>
            <h1>Profil</h1>
            <div>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Address: {user?.address}</p>
            </div>
            <div>
                <h2>My orders</h2>
                {user && user.orders.length > 0
                ? user?.orders.map(order => (
                    <div key={order.id}>
                        <p>Order n°{order.id}</p>
                        <p>Price: {order.amount}</p>
                        <p>Status: {order.status}</p>
                    </div>
                ))
                : <p>No orders</p>
                }
            </div>
            <button onClick={handleLogOut}>Logout</button>
        </section>
     );
}
 
export default Profil;