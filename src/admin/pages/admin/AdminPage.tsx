import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

const AdminPage = () => {
    const navigate = useNavigate()

    const navigateToMenu = () => {
        navigate('/')
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center m-10">
                <p className="text-2xl">Bienvenido Admin !!!</p>
                <Button onClick={navigateToMenu}>Inicio</Button>
            </div>
        </>
    )
}

export default AdminPage
