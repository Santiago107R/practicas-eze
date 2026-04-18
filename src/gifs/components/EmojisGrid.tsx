import type { emoji } from "../types/emojis.type"
import EmojiCard from "./emojiCard";

interface Props {
    Emojis: emoji[];
}

const EmojisGrid = ({ Emojis }: Props) => {
    return (
        <>
            <div className="grid justify-center items-center m-10">
                {
                    Emojis.length > 0 ? Emojis.map((emoji) => (
                        <EmojiCard key={emoji.url} url={emoji.url} />
                    )) : (<p className="text-2xl">No hay resultados...</p>)
                }
            </div>
        </>
    )
}

export default EmojisGrid
