import { useQuery } from "@tanstack/react-query"
import useConversation from '../../zustand/conversation';

export const getMessages = () => {
    const { conversation,setMessage } = useConversation();

    const {data,isLoading } = useQuery({
        queryKey: ['getmessage',conversation?._id],
        queryFn: async () => {
          try {
            const request = await fetch(`/api/message/${conversation?._id}`,{
                method : 'GET'
            })
            
            const response = await request.json()
            setMessage(response)
            return response
          } catch (error) {
            console.log('Error in getMessage',error.message)
          }
        }
    })

    return {data,isLoading}
}