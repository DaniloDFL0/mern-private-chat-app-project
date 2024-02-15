import { BsSend } from "react-icons/bs"
import useSendMessage from "../hooks/useSendMessage"
import { useState } from "react"

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { isLoading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
        <div className="w-full relative">
            <input 
                type="text" 
                placeholder="Send a message"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="absolute inset-y-0 end-0 flex items-center pe-3" disabled={isLoading}>
                {isLoading ? (<span className="loading loading-spinner loading-sm"></span>) : (<BsSend />)}
            </button>
        </div>
    </form>
  )
}

export default MessageInput