interface Props {
    url: string
}

const EmojiCard = ({url}: Props) => {
    return (
        <>
            <div className="flex justify-center items-center m-3">
                <img key={url} src={url} alt="Emoji cualquiera" />
            </div>
        </>
    )
}

export default EmojiCard
