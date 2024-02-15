import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { toast } from "react-toastify"

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const success = handleInputErrors(username, password)
        if(!success) return

        setIsLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()

            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            
        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        login
    }
}

export default useLogin

const handleInputErrors = (username, password) => {
    if(!username || !password) {
        toast.error("Please fill in all fields.")
        return false
    }

    return true
}