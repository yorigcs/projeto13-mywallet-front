import { createContext, useContext, useState, useEffect } from "react";
import axiosI from "../services/axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem("MWAuthUser");
        const storagedToken = localStorage.getItem("MWAuthToken");

        if (storagedUser && storagedToken) {
            //send token if user is authenticated!
            axiosI.defaults.headers["Authorization"] = `Bearer ${storagedToken}`
            setUserInfo(JSON.parse(storagedUser));
        }
    }, [])

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