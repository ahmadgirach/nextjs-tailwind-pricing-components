type Props = {
    noOfProducts: number,
    price: number,
    message: string,
    buttonLabel: string
}

export const Header = ({ noOfProducts, price, message, buttonLabel }: Props) => {
    return (
        <div className="bg-primary-100 px-32 py-20 text-center space-y-3">
            <p>{noOfProducts} Products</p>
            <h3 className="text-2xl font-semibold">${price} / month</h3>
            <p>{message}</p>
            <button className="text-white bg-black p-5 rounded-sm">{buttonLabel}</button>
        </div>
    )
}
