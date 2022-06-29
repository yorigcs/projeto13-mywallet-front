import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({email:'test@email.com', name:'teste'});

    return (
        <AuthContext.Provider
            value={{
                signed: !!userInfo,
                userInfo,
                setUserInfo
            }}>
            {children}

        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}