import productServices from "@/services/product.service";
import { PropsProductUpdate } from "@/types/generics.types";
import { CreateProduct } from "@/types/product.types";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductFormUpdate: React.FC<PropsProductUpdate> = ({product, categories}) => {
    const [credentials, setCredentials] = useState<CreateProduct>({
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        category: product.category.id
    })
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const router = useRouter()
    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCredentials({...credentials, [name]: value})
        console.log(credentials);
        
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
            if(image){
                formData.append("image", image)
            }
            await productServices.update(product.id, formData)
            setSuccess(true)
            setTimeout(() => {
                router.push("/admin/product")
            }, 2000)
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" defaultValue={credentials.name} onInput={handleChange}/>
            <input type="text" name="description" id="description" defaultValue={credentials.description} onInput={handleChange}/>
            <input type="number" name="price" id="price" defaultValue={credentials.price} onInput={handleChange}/>
            <input type="number" name="quantity" id="quantity" defaultValue={credentials.quantity} onInput={handleChange}/>
            <input type="file" name="image" id="image" />
            <select name="category" id="category" onInput={handleChange}>
                {categories.map(category => (
                    <option key={category.id} value={category.id} defaultChecked={credentials.category == category.id ? true : false}>{category.name}</option>
                ))}
            </select>
            <button type="submit">Modifier le produit</button>
        </form>
     );
}
export default ProductFormUpdate;