import { useEffect, useRef } from "react"
import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./MessageSkeleton"
import useListenMessages from "../hooks/useListenMessages"

const Messages = () => {
  const { isLoading, messages } = useGetMessages()
  const lastMessageRef = useRef(null)

  useListenMessages()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!isLoading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message}/>
        </div>
      ))}

      {isLoading && [...Array(3)].map((_, index) => <MessageSkeleton key={index}/>)}
      {!isLoading && messages.length === 0 && (
        <div className="text-center">Send a message to start a conversation</div>
      )}
    </div>
  )
}

export default Messages