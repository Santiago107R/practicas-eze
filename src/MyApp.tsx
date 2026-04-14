import { RouterProvider } from "react-router"
import { AppRouter } from "./app.router"

const MyApp = () => {
    return (
        <div>
            <RouterProvider router={AppRouter}  />
        </div>
    )
}

export default MyApp
