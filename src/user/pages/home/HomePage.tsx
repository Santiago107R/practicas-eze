import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router'

const HomePage = () => {
    const navigate = useNavigate()

    const navigateToThemePage = () => {
        navigate('theme')
    }

    const navigateToAdminPage = () => {
        navigate('admin')
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center p-3'>
                <p className='text-3xl'>Bienvenido !!!</p>
                <Link to={'theme'}><Button className='py-2 px-5 rounded-xl cursor-pointer' >Link</Button></Link>
                <Button className='py-2 px-5 rounded-xl cursor-pointer mt-2' onClick={navigateToThemePage}>Navigate</Button>
                <Button className='py-2 px-5 rounded-xl cursor-pointer mt-2' onClick={navigateToAdminPage}>Navigate</Button>
            </div>
        </>
    )
}

export default HomePage
