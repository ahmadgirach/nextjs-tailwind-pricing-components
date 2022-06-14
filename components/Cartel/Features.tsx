import React from "react"

type Props = {
    features: string[]
}

export const Features = ({ features }: Props) => {
    return (
        <div className="text-center bg-white py-10">
            <h3 className="text-lg font-bold my-4">Features</h3>
            <ul className="leading-relaxed">
                {
                    React.Children.toArray(
                        features.map((feature) => <li> &rarr; {feature}</li>)
                    )
                }
            </ul>
        </div>
    )
}
