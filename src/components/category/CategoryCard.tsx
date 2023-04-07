import { PropsCategory } from "@/types/generics.types";

const CategoryCard: React.FC<PropsCategory> = ({category, hideDescription = false}) => {
    return ( 
        <div className="category-card">
            <h3>{category.name}</h3>
            {!hideDescription && <p>{category.description}</p>}
        </div>
     );
}
 
export default CategoryCard;