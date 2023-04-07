import { PropsChildren } from "@/types/generics.types";
import { User, UserContextType } from "@/types/user.types";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsChildren> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}