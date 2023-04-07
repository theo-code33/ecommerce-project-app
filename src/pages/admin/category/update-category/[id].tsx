import CategoryFormUpdate from "@/components/category/CategoryFormUpdate";
import categoryService from "@/services/category.service";
import { Category } from "@/types/category.types";
import { PropsCategory } from "@/types/generics.types";

const UpdateCategory: React.FC<PropsCategory> = ({category}) => {
    return ( 
        <section className="update-category">
            <CategoryFormUpdate category={category} />
        </section>
     );
}
 
export default UpdateCategory;

export const getStaticPaths = async () => {
    const categories = await categoryService.getAll()
    const paths = categories.map((category : Category ) => ({
            params: { id: category.id }
        })
    )

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