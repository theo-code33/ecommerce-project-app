import { getToken } from "@/function/localStorage.function";
import userServices from "@/services/user.service";
import { PropsChildren } from "@/types/generics.types";
import { JwtPayload, User, UserContextType } from "@/types/user.types";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsChildren> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        if(!token) return
        const decodedToken: JwtPayload = jwtDecode(token)
        const userResponse = await userServices.getById(decodedToken.sub)
        setUser(userResponse)
    }
    
    useEffect(() => {
        const tokenLocal = getToken()
        if(tokenLocal){
            setToken(tokenLocal)
        }
    },[])

    useEffect(() => {
        getUser()
    }, [token])
    return (
        <UserContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </UserContext.Provider>
    )
}