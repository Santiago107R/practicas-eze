import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@base-ui/react'

interface Props extends ButtonProps {
    children: string;
    className?: string;
}

const ButtonThemed = ({children, className, ...rest}: Props) => {
    return (
        <>
            <Button className={`bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-600 hover:dark:bg-indigo-700 text-white cursor-pointer ${className}`} {...rest}>{children}</Button>
        </>
    )
}

export default ButtonThemed
