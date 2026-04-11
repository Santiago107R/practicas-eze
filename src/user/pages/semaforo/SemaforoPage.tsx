import { useEffect, useState } from 'react';
import CircleThemed from './components/CircleThemed';

type Semaforo = 'red' | 'yellow' | 'green'

const SemaforoPage = () => {
    const [color, setColor] = useState<Semaforo>('red')

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor((prev) => prev === 'red' ? 'yellow' : prev === 'yellow' ? 'green' : 'red')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }  
    }, [color])

    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <div className='px-5 pt-5 m-10 bg-amber-400'>
                    <CircleThemed color={color === 'red' ? color : undefined} />
                    <CircleThemed color={color === 'yellow' ? color : undefined} />
                    <CircleThemed color={color === 'green' ? color : undefined} />
                </div>
            </div>
        </>
    )
}

export default SemaforoPage
