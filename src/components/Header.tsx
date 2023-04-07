import { OrderContext } from "@/context/cart.context";
import { OrderContextType } from "@/types/order.types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Header = () => {
    const [numberItems, setNumberItems] = useState<number>(0)
    const { order } = useContext(OrderContext) as OrderContextType
    const router = useRouter()

    const getNumberItems = () => {
        
        if (order !== null) {
            order.items.map(item => {
                setNumberItems((number) => number + item.quantity)
            })
            return
        }
        setNumberItems(0)
    }

    const handleCart = () => {
        router.push('/cart')
    }

    useEffect(() => {
        getNumberItems()
        console.log("numberItems => ", numberItems);
        
    }, [order])
    return ( 
        <nav className="header navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <Image
                        src="/logo.png"
                        alt="logo image"
                        width={150}
                        height={150}
                    />
                </Link>
                <div className="d-flex justify-content-end">
                    <ul className="navbar-nav flex-row gap-3">
                        <li className="nav-item">
                            <Link href="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/category">Categories</Link>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-primary position-relative" onClick={handleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {numberItems}
                            </span>
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;