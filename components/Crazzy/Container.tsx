type Props = {
    children: JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return (
        <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 mt-16">
            {children}
        </section>
    )
}
