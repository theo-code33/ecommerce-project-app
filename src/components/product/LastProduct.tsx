import { PropsProducts } from "@/types/generics.types";
import Link from "next/link";
import ProductCard from "./ProductCard";

const LastProduct: React.FC<PropsProducts> = ({products}) => {
    return ( 
        <div className="last-product">
            <div className="last-product-top">
                <h2>Last Product</h2>
                <Link href="/product">See all</Link>
            </div>
            <div className="last-product-container">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} hideCategory={true}/>
                ))}
            </div>
        </div>
     );
}
 
export default LastProduct;