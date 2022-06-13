type Props = {
    price: number
}

export const Pricing = ({ price }: Props) => {
    return (
        <div>
            <h3 className="text-pink-500 text-2xl font-semibold inline-block mr-1">${price}</h3>
            <span>/ month</span>
        </div>
    )
}
