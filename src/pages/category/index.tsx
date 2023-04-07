import CategoryCard from "@/components/category/CategoryCard";
import categoryService from "@/services/category.service";
import { PropsCategories } from "@/types/generics.types";

const Category: React.FC<PropsCategories>  = ({categories}) => {
    return ( 
        <section className="category-container">
            <h1>Category</h1>
            <div className="category-list">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
     );
}
 
export default Category;

const getStaticProps = async () => {
    const categories = await categoryService.getAll()

    return {
        props: {
            categories
        }
    }
}

export {getStaticProps}