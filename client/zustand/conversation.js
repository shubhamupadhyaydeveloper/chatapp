import { create } from 'zustand'

const useConversation = create((set) => ({
    lastMessage : null,
    setLastMessage : (lastMessage) => set({lastMessage}),
    socket : null,
    setSocket : (socket) => set({socket}),
    onlineUser : [],
    setOnlineUser : (onlineUser) => set({onlineUser}),
    conversation: null,
    setConversation: (conversation) => set({ conversation }),
    message: [],
    setMessage: (message) => set({ message })
}))

export default useConversation;