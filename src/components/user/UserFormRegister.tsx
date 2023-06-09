import { UserContext } from "@/context/user.context";
import { setTokenFunction } from "@/function/localStorage.function";
import userServices from "@/services/user.service";
import { UserContextType, UserRegister } from "@/types/user.types";
import { useContext, useState } from "react";

const UserFormRegister = () => {
    const [crendentials, setCrendentials] = useState<UserRegister>({
        name: "",
        email: "",
        password: "",
        address: "",
        isAdmin: false
    })

    const { setToken } = useContext(UserContext) as UserContextType

    const handleChange = (e: React.FormEvent<HTMLInputElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCrendentials({...crendentials, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<React.SetStateAction<void>> => {
        e.preventDefault()
        try{
            const userToken = await userServices.create(crendentials)
            setTokenFunction(userToken.access_token)
            setToken(userToken.access_token)
        }catch(error){
            console.log(error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="name" onInput={handleChange} required/>
            <input type="text" name="email" id="email" placeholder="email" onInput={handleChange} required/>
            <input type="password" name="password" id="password" placeholder="password" onInput={handleChange} required/>
            <input type="text" name="address" id="address" placeholder="address"  onInput={handleChange} required/>
            <button type="submit">S'inscrire</button>
        </form>
     );
}
 
export default UserFormRegister;