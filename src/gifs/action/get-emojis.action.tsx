import { giphyApi } from "../api/giphy.api"
import type { GiphyEmojiResponse } from "../types/giphy.emojis.response"
import type { emoji } from "../types/emojis.type"

export const getEmojis = async (): Promise<emoji[]> => {
    try {
        const { data } = await giphyApi.get<GiphyEmojiResponse>('/emoji')

        const urlEmoji = data.data.map((emoji) => ({
            url: emoji.images?.original?.url
        }))

        return urlEmoji
    } catch (error) {
        console.log(error)
        return []
    }
} 