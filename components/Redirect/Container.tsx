type Props = {
    children: JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return (
        <section className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-4 mt-16">
            {children}
        </section>
    )
}
