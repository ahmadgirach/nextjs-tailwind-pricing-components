type Props = {
    href: string,
    label: string
}

export const InspiredBy = ({ href, label }: Props) => {
    return (
        <p className="text-md text-center mx-auto mt-5">
            Inspired by {''}
            <a className='text-blue-600 font-bold' href={href} target='_blank' rel="noopener noreferrer">
                {label}
            </a>
        </p>
    )
}
