import productServices from "@/services/product.service";
import { PropsCategories } from "@/types/generics.types";
import { CreateProduct } from "@/types/product.types";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductFormCreate: React.FC<PropsCategories> = ({categories}) => {
    const [credentials, setCredentials] = useState<CreateProduct>({
        name: "",
        description: "",
        price: 0,
        quantity: 1,
        category: categories[0].id
    })
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const router = useRouter()

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<React.SetStateAction<void>> => {
        e.preventDefault()
        try {
            const image = e.currentTarget.image.files[0]
            const formData = new FormData()
            formData.append("name", credentials.name)
            formData.append("description", credentials.description)
            formData.append("price", credentials.price.toString())
            formData.append("quantity", credentials.quantity.toString())
            formData.append("category", credentials.category)
            formData.append("image", image)
            await productServices.create(formData)
            setSuccess(true)
            setTimeout(() => {
                router.push("/admin/product")
            })
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" onInput={handleChange}/>
            <input type="text" name="description" id="description" onInput={handleChange}/>
            <input type="number" name="price" id="price" defaultValue={0} onInput={handleChange}/>
            <input type="number" name="quantity" id="quantity" defaultValue={1} onInput={handleChange}/>
            <input type="file" name="image" id="image" />
            <select name="category" id="category" onInput={handleChange}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit">Créer le produit</button>
        </form>
     );
}

export default ProductFormCreate;