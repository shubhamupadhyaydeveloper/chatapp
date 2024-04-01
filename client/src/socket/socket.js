import useConversation from "../../zustand/conversation";
import io from 'socket.io-client'
import { useSelector } from "react-redux";
import { useEffect } from "react";

export function socketConnection () {
   const isUser = useSelector(state => state.user.isUser)
   const {setOnlineUser,socket,setSocket} = useConversation()

   useEffect(() => {
    if(isUser) {
        const newSocket = io('http://localhost:4000' , {
            query : {
                userId : isUser.id
            }
        })
        setSocket(newSocket)

        newSocket.on('newMessage',(newMessage) => {
            console.log('newMessage',newMessage);
        });

        newSocket.on('onlineUsers' ,  (users) => setOnlineUser(users))
        return () => newSocket.close()
    } else {
        if(socket) {
            socket.close()
            setSocket(null)
        }
    }
   },[isUser])
}

export default socketConnection;