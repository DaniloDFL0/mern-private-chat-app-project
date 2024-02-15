import { useState } from "react"
import useConversation from "../zustand/useConversation"
import { toast } from "react-toastify"

const useSendMessage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { selectedConversation, messages, setMessages } = useConversation()

    const sendMessage = async (message) => {
        setIsLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            })

            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages, data ])
            
        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
 

    return {
        isLoading,
        sendMessage
    }
}

export default useSendMessage