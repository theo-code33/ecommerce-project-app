import { PropsProduct } from "@/types/generics.types";
import Image from "next/image";
import Link from "next/link";

const ProductCard : React.FC<PropsProduct> = ({product, hideCategory = false}) => {
    return ( 
        <Link href={`/product/${product.id}`} className="product-card">
            <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
            />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            {!hideCategory && <p>{product.category.name}</p>}
        </Link>
     );
}
 
export default ProductCard;