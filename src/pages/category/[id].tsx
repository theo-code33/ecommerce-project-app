import ProductCard from "@/components/product/ProductCard";
import categoryService from "@/services/category.service";
import { Category } from "@/types/category.types";
import { PropsCategory } from "@/types/generics.types";

const CategoryPage: React.FC<PropsCategory> = ({category}) => {
    return ( 
        <section>
            <h1>{category.name}</h1>
            {category.products.length > 0 
            ? category.products.map(product => (
                <ProductCard key={product.id} product={product} hideCategory={true}/>
            ))
            : <p>No products</p>}
        </section>
     );
}
 
export default CategoryPage;

export const getStaticPaths = async () => {
    const categories = await categoryService.getAll()
    const paths = categories.map((category : Category ) => ({
        params: { id: category.id }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context : any) => {
    const category = await categoryService.getById(context.params.id)
    return {
        props: {
            category
        }
    }
}