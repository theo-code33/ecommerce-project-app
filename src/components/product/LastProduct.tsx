import { PropsProducts } from "@/types/generics.types";
import Link from "next/link";
import ProductCard from "./ProductCard";

const LastProduct: React.FC<PropsProducts> = ({products}) => {
    return ( 
        <div className="last-product d-flex flex-column w-100 mb-5">
            <div className="last-product-top d-flex justify-content-between align-items-center mb-5">
                <h2>Last Product</h2>
                <Link href="/product">See all</Link>
            </div>
            <div className="last-product-container d-flex align-items-start justify-content-between">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} hideCategory={true}/>
                ))}
            </div>
        </div>
     );
}
 
export default LastProduct; 