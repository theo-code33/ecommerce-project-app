import categoryService from "@/services/category.service";
import productServices from "@/services/product.service";
import { CategoryCreate } from "@/types/category.types";
import { useRouter } from "next/router";
import { useState } from "react";

const CategoryFormCreate = () => {
    const [crendentials, setCrendentials] = useState<CategoryCreate>({
        name: "",
        description: ""
    })
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const router = useRouter()

    const handleChange = (e: React.FormEvent<HTMLInputElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCrendentials({...crendentials, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<React.SetStateAction<void>> => {
        e.preventDefault()
        try {
            await categoryService.create(crendentials)
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
            <input type="text" name="name"  id="name" onInput={handleChange}/>
            <input type="text" name="description"  id="description" onInput={handleChange}/>
            <button type="submit">Ajouter la catégorie</button>
        </form>
     );
}
 
export default CategoryFormCreate;