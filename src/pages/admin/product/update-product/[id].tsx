import ProductFormUpdate from "@/components/product/ProductFormUpdate";
import categoryService from "@/services/category.service";
import productServices from "@/services/product.service";
import { PropsProductUpdate } from "@/types/generics.types";
import { Product } from "@/types/product.types";

const UpdateProduct: React.FC<PropsProductUpdate> = ({product, categories}) => {
    return ( 
        <section>
            <h1>Update Product</h1>
            <ProductFormUpdate product={product} categories={categories}/>
        </section>
     );
}
 
export default UpdateProduct;

export const getStaticPaths = async () => {
    const products = await productServices.getAll()
    const paths = products.map((product : Product ) => ({
        params: { id: product.id }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context : any) => {
    const product = await productServices.getById(context.params.id)
    const categories = await categoryService.getAll()
    return {
        props: {
            product,
            categories
        }
    }
}