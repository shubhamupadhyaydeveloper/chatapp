import { useMutation, useQueryClient } from '@tanstack/react-query';
import useConversation from '../../zustand/conversation';

export function useSendMessageMutation() {
    const { conversation ,setMessage ,message} = useConversation();
    const queryClient = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (textdata) => {
            try {
                const data = {text : textdata}
                const request = await fetch(`/api/message/send/${conversation?._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                if (!request.ok) return "Error in sendMessageApi" + await request.json();

                const response = await request.json();
                setMessage([response ,...message])
                return response;
            } catch (error) {
                console.log(error);
            }
        }, 
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ['getmessage']})
        }
    });

    return { mutateAsync, isPending };
}
