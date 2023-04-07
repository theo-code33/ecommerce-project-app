import categoryService from "@/services/category.service";
import { Category, CategoryUpdate } from "@/types/category.types";
import { PropsCategory } from "@/types/generics.types";
import { useRouter } from "next/router";
import { useState } from "react";

const CategoryFormUpdate: React.FC<PropsCategory> = ({category}) => {
    const [credentials, setCredentials] = useState<CategoryUpdate>({
        name: category.name,
        description: category.description
    })
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const router = useRouter()

    const handleChange = (e : React.FormEvent<HTMLInputElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>): Promise<React.SetStateAction<void>> => {
        e.preventDefault()
        try {
            await categoryService.update(category.id, credentials)
            setSuccess(true)
            setTimeout(() => {
                router.push("/admin/category")
            }, 2000)
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" defaultValue={credentials.name} onInput={handleChange}/>
            <input type="text" name="description" id="description" defaultValue={credentials.description} onInput={handleChange}/>
            <button type="submit">Modifier la catégorie</button>
        </form>
     );
}
 
export default CategoryFormUpdate;