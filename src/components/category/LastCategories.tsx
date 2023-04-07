import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { PropsCategories } from "@/types/generics.types";

const LastCategories: React.FC<PropsCategories> = ({categories}) => {
    return ( 
        <div className="last-categories">
            <div className="last-categories-top">
                <h2>Last Categories</h2>
                <Link href="/category">See all</Link>
            </div>
            <div className="last-categories-container">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} hideDescription={true}/>
                ))}
            </div>
        </div>
     );
}
 
export default LastCategories;