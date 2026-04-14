import type { links } from "../links";

interface Props {
    description: string;
    links?: links[];
}

const CustomFooter = ({description, links}: Props) => {
    return (
        <footer className='border-t-2  p-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                <p className='text-gray-500 text-sm'>
                    {description}
                </p>

                <div className="flex gap-6">
                    {
                        links?.map(({name, url}) => (
                            <a href={url} className="hover:text-blue-600 transition-colors">{name}</a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default CustomFooter
