import ProductFormCreate from "@/components/product/ProductFormCreate";
import categoryService from "@/services/category.service";
import { PropsCategories } from "@/types/generics.types";

const CreateProduct: React.FC<PropsCategories> = ({categories}) => {
    return ( 
        <section>
            <h1>Create Product</h1>
            <ProductFormCreate categories={categories}/>
        </section>
     );
}
 
export default CreateProduct;

export const getStaticProps = async () => {
    const categories = await categoryService.getAll()
    return {
        props: {
            categories
        }
    }
}