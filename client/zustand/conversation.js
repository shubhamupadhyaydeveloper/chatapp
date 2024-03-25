import { create } from 'zustand'

const useConversation = create((set) => ({
    conversation: null,
    setConversation: (conversation) => set({ conversation }),
    message: [],
    setMessage: (message) => set({ message })
}))

export default useConversation;