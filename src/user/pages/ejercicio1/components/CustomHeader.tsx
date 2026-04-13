import useTheme from "@/components/useTheme";
import type { links } from "../links";
import { Moon, Sun } from "lucide-react";
import type { Theme } from "@/types/theme";

interface Props {
    title: string;
    list: links[];
    theme: Theme

    toggleTheme: () => void
}

const CustomHeader = ({title, list, theme, toggleTheme}: Props) => {
    return (
        <header className='flex justify-between items-center p-5 bg-indigo-400 dark:bg-indigo-600 text-white'>
            <h1 className="text-3xl">{title}</h1>
            <nav>
                <ul className='flex flex-row gap-2'>
                    {list.map(({name, url}) => (
                        <li key={name}><a className="hover:text-gray-300 transition-colors" href={url}>{name}</a></li>
                    ))}
                    <li><button onClick={toggleTheme}>{theme === 'dark' ? (<Moon />) : (<Sun />)}</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default CustomHeader
