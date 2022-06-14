type Props = {
    children: JSX.Element[]
}

export const PricingCardWrapper = ({ children }: Props) => {
    return (
        <div className="flex flex-col gap-4 border border-blue-200">
            {children}
        </div>
    )
}
