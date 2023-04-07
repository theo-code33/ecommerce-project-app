import { UserContext } from "@/context/user.context";
import { setTokenFunction } from "@/function/localStorage.function";
import authServices from "@/services/auth.service";
import { UserContextType, UserLogin } from "@/types/user.types";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const UserFormLogin = () => {
    const [crendentials, setCrendentials] = useState<UserLogin>({
        email: "",
        password: ""
    })
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const { setToken } = useContext(UserContext) as UserContextType
    const router = useRouter()

    const handleChange = (e: React.FormEvent<HTMLInputElement>): React.SetStateAction<void> => {
        const {name, value} = e.currentTarget
        setCrendentials({...crendentials, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<React.SetStateAction<void>> => {
        e.preventDefault()
        try {
            const token = await authServices.login(crendentials)
            setTokenFunction(token.access_token)

            setToken(token.access_token)
            setSuccess(true)
            router.push("/")
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" id="email" placeholder="email" onInput={handleChange}/>
            <input type="password" name="password" id="password" placeholder="password" onInput={handleChange}/>
            <button type="submit">Se connecter</button>
            {
                error && <p>Une erreur est survenue</p>
            }
        </form>
     );
}
 
export default UserFormLogin;