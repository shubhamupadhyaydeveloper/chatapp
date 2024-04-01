import { useEffect } from "react";
import useConversation from "../../zustand/conversation";

const getRealTimeMessage = () => {
    const {socket,setMessage,message}  = useConversation()

    useEffect(() => {
      socket?.on('newMessage',(newMessage) => {
         setMessage([...message,newMessage])
      })

      return () => socket?.off('newMessage')
    },[socket,message,setMessage])

}

export default getRealTimeMessage;