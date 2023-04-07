import ProductCard from "@/components/product/ProductCard";
import productServices from "@/services/product.service";
import { PropsProducts } from "@/types/generics.types";
import React from "react";

const Product: React.FC<PropsProducts> = ({products}) => {
    return ( 
        <div className="d-flex align-items-start justify-content-start gap-5">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />  
            ))}
        </div>
    );
}
 
export default Product;

const getStaticProps = async () => {
    const products = await productServices.getAll()

    return {
        props: {
            products
        }
    }
}

export {getStaticProps}