import CategoryCard from "@/components/category/CategoryCard";
import categoryService from "@/services/category.service";
import { Category } from "@/types/category.types";
import { PropsCategories } from "@/types/generics.types";
import Link from "next/link";
import { useState } from "react";

const CategoryAdmin: React.FC<PropsCategories> = ({categories}) => {
    const [categoriesState, setCategoriesState] = useState<Category[]>(categories)
    const handleRemove = async (category : Category) => {
        try {
            await categoryService.remove(category.id)
            setCategoriesState((categories) => {
                return categories.filter(categoryItem => categoryItem.id !== category.id)
            })
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <section className="category-admin">
            <h1>My Category</h1>
            <Link href="/admin/category/create-category">Create Category</Link>
            {categoriesState.length > 0
            ? categoriesState.map(category => (
                <div key={category.id}>
                    <CategoryCard category={category}/>
                    <Link href={`/admin/category/update-category/${category.id}`}>Update Category</Link>
                    <button onClick={() => {handleRemove(category)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
            ))
            : <p>No categories</p>
            }
        </section>
     );
}
 
export default CategoryAdmin;

export const getStaticProps = async () => {
    const categories = await categoryService.getAll()
    return {
        props: {
            categories
        }
    }
}