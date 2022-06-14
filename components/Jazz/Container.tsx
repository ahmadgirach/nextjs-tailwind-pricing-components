type Props = {
    children: JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return (
        <section className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 pt-20'>
            {children}
        </section>
    )
}
