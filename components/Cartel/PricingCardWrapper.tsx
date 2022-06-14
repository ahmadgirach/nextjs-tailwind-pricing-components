type Props = {
    children: JSX.Element[]
}

export const PricingCardWrapper = ({ children }: Props) => {
    return (
        <div className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-200">
            {children}
        </div>
    )
}
