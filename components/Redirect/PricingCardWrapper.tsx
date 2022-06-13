type Props = {
    children: JSX.Element[]
}

export const PricingCardWrapper = ({ children }: Props) => {
    return (
        <div className="flex flex-col gap-4 bg-white p-8 rounded-lg min-w-[15rem]">
            {children}
        </div>
    )
}
