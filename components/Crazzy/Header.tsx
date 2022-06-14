type HeadingNameProps = {
    name: string
}

const HeadingName = ({ name }: HeadingNameProps) => {
    return (
        <h3 className="uppercase text-md font-semibold">{name}</h3>
    )
}

type HeadingPriceProps = {
    price: number
}

const HeadingPrice = ({ price }: HeadingPriceProps) => {
    return (
        <p>
            <sup className="text-lg">$ </sup>
            <span className="text-3xl">{price}</span> / month
        </p>
    )
}

type Props = {
    name: string,
    price: number,
    popular?: boolean
}

export const Header = ({ name, price, popular }: Props) => {
    return (
        <>
            {
                popular && (
                    <div className="text-white bg-blue-600 -mt-10">
                        <h3 className="uppercase text-md text-center font-semibold">Most Popular</h3>
                    </div>
                )
            }
            <div className="text-center border border-blue-300 bg-blue-100 p-3">
                <HeadingName name={name} />
                <HeadingPrice price={price} />
            </div>
        </>
    )
}
