import { giphyApi } from "../api/giphy.api";
import type { GiphyResponse } from "../types/giphy.response";

export const getRandomGif = async () => {

    try {
        const { data } = await giphyApi.get<GiphyResponse>('/random')
        
        return data.data.images.original.url
    } catch (error) {
        console.log(error)
    }
}