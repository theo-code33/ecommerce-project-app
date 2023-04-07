import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { PropsCategories } from "@/types/generics.types";

const LastCategories: React.FC<PropsCategories> = ({categories}) => {
    return ( 
        <div className="last-categories d-flex flex-column w-100">
            <div className="last-categories-top d-flex justify-content-between align-items-center mb-5">
                <h2>Last Categories</h2>
                <Link href="/category">See all</Link>
            </div>
            <div className="last-categories-container d-flex align-items-start justify-content-start gap-5">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} hideDescription={true}/>
                ))}
            </div>
        </div>
     );
}
 
export default LastCategories;