import { useQuery } from "@tanstack/react-query"
import { getEmojis } from "../action/get-emojis.action"

const useEmojis = () => {
    const emojisQuery = useQuery({
        queryKey: ['emojis'],
        queryFn: getEmojis,
        staleTime: 60 * 5
    })
    
    return {
        emojisQuery,
    }
}

export default useEmojis
