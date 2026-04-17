import CustomFooter from "@/components/CustomFooter"
import CustomHeader from "@/components/CustomHeader"
import { Outlet } from "react-router"

const UserLayout = () => {
    return (
        <>
            {/* HEADER  */}
            <CustomHeader title='Tienda' list={[{ name: 'Inicio', url: '/' }, { name: 'Contactanos', url: 'contact' }, {name: 'theme', url: 'theme'}, {name: 'gifs', url: 'gifs'}]}/>

            <Outlet />

            {/* FOOTER  */}
            <CustomFooter description={`© ${new Date().getFullYear()} Yo. todos los derechos reservados`} links={[{ name: 'GitHub', url: '#' }, { name: 'Linkedin', url: '#' }]} />
        </>
    )
}

export default UserLayout
