import { PropsCategory } from "@/types/generics.types";
import Link from "next/link";

const CategoryCard: React.FC<PropsCategory> = ({category, hideDescription = false}) => {
    return ( 
        <Link href={`/category/${category.id}`} className="category-card">
            <h3>{category.name}</h3>
            {!hideDescription && <p>{category.description}</p>}
        </Link>
     );
}
 
export default CategoryCard;