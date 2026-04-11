import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/useTheme'

const HomePage = () => {
    const {toggleTheme} = useTheme()

    return (
        <>
            <div className='flex flex-col items-center justify-center p-3'>
                <p className='text-3xl'>Hola</p>
                <Button className='py-2 px-5 rounded-xl' onClick={toggleTheme}>Press</Button>
            </div>
        </>
    )
}

export default HomePage
