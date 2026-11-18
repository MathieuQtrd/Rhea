import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({children}) {

    const [ user, setUser ] = useState(null)
    // user à null tant qu'il n'est pas connecté
    const [ token, setToken ] = useState(null)
    // token à null tant qu'on ne l'a pas récupéré lors de la connexion user

    useEffect(() => {
        // récupération depuis le localStorage
        // useEffect nécessaire car c'est un effet secondaire

        const savedUser = localStorage.getItem('user')
        const savedToken = localStorage.getItem('token')

        if(savedToken && savedUser) {
            setUser(JSON.parse(savedUser))
            setToken(savedToken)
        }

    }, [])

    const login = (userData, accessToken) => {
        // lors de la connexion
        setUser(userData)
        setToken(accessToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', accessToken)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}