import ProductCard from "@/components/product/ProductCard";
import productServices from "@/services/product.service";
import { PropsProducts } from "@/types/generics.types";
import { Product } from "@/types/product.types";
import Link from "next/link";
import { useState } from "react";

const ProductAdmin: React.FC<PropsProducts> = ({products}) => {
    const [productsState, setProductsState] = useState<Product[]>(products)
    const handleRemove = async (product : Product) => {
        try {
            await productServices.remove(product.id)
            setProductsState((products) => {
                return products.filter(productItem => productItem.id !== product.id)
            })
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <section className="product-admin">
            <h1>Product Admin</h1>
            <Link href="/admin/product/create-product">Create product</Link>
            {productsState.length > 0
            ? productsState.map(product => (
                <div key={product.id}>
                    <ProductCard product={product} hideCategory={true}/>
                    <Link href={`/admin/product/update-product/${product.id}`}>Update product</Link>
                    <button onClick={() => {handleRemove(product)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
            ))
            : <p>No products</p>
            }
        </section>
     );
}
 
export default ProductAdmin;


export const getStaticProps = async () => {
    const products = await productServices.getAll()
    return {
        props: {
            products
        }
    }
}