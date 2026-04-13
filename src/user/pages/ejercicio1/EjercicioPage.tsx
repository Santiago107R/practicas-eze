import ButtonThemed from './components/ButtonThemed';
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import useTheme from '@/components/useTheme';

const EjercicioPage = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            {/* HEADER  */}
            <CustomHeader title='Tienda' list={[{name: 'Inicio', url: '#'}, {name: 'Contactanos', url: '#'}]} theme={theme} toggleTheme={toggleTheme}/>

            {/* MAIN  */}
            <div className='flex  justify-center items-center m-10'>

                <main className='flex grow items-center justify-center flex-col p-4'>
                    <p>Estado: {theme}</p>
                    <ButtonThemed className='p-4' onClick={toggleTheme}>Presionar</ButtonThemed>
                </main>
            </div>

            {/* FOOTER  */}
            <CustomFooter description={`© ${new Date().getFullYear()} Yo. todos los derechos reservados`} links={[{name: 'GitHub', url: '#'}, {name: 'Linkedin', url: '#'}]}/>
        </>
    )
}

export default EjercicioPage
