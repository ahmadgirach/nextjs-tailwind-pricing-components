type Props = {
    children: JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return (
        <section className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-6 mt-16">
            {children}
        </section>
    )
}
