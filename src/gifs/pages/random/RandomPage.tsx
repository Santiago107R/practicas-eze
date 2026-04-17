import { Button } from "@/components/ui/button"
import useGifs from "@/gifs/hooks/useGif"

const RandomPage = () => {
    const {gif, loading, getUrl} = useGifs()

    return (
        <div className="flex flex-col justify-center items-center m-10">
            <p className="text-2xl">Random</p>
            <div className="flex flex-col justify-center items-center m-2">
                {loading && <p className="text-2xl">Cargando gif.......</p>}
                {gif && <img key={gif} src={gif} alt="Gif aleatorio" className="rounded" />}  
            </div>
            <Button onClick={getUrl}>Generar</Button>
        </div>
    )
}

export default RandomPage
