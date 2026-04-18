import { useEffect, useState } from "react"
import { getRandomGif } from "../action/get-random-gif.action"

const useGif = () => {
    const [gif, setGif] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const getUrl = async () => {
        setLoading(true)
        try {
            const url = await getRandomGif()
            
            if (url) {
                setGif(url)
                setLoading(false)
            }

        } catch (error) {
            setGif(null)
            console.log(error)
        }
    }
    
    // useEffect(() => {
    //     getUrl()
    // }, [getUrl])
    
    return {
        gif,
        loading,
        getUrl,
    }
}

export default useGif
