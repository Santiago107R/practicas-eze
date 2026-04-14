import CustomHeader from '@/components/CustomHeader';
import ButtonThemed from './components/ButtonThemed';
import useTheme from '@/components/useTheme';
import CustomFooter from '@/components/CustomFooter';

const ThemePage = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
          
            {/* MAIN  */}
            <div className='flex  justify-center items-center m-10'>

                <main className='flex grow items-center justify-center flex-col p-4'>
                    <p>Estado: {theme}</p>
                    <ButtonThemed className='p-4' onClick={toggleTheme}>Presionar</ButtonThemed>
                </main>
            </div>

            
        </>
    )
}

export default ThemePage
