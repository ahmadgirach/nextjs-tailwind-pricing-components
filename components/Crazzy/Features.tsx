import React from "react"
import { numberFormatter } from "../../utils"

type Props = {
    features: string[]
}

export const Features = ({ features }: Props) => {
    return (
        <ul className="p-3 leading-relaxed">
            {
                React.Children.toArray(
                    features.map((feature) => {
                        const splitted = feature.split("_")
                        if (splitted.length > 1) {
                            const [number, ...rest] = splitted
                            const formatted = numberFormatter(number)
                            const formattedFeature = [formatted, ...rest].join(" ")
                            return (
                                <li>&radic; {formattedFeature}</li>
                            )
                        } else {
                            return (
                                <li>&radic; {splitted[0]}</li>
                            )
                        }
                    })
                )
            }
        </ul>
    )
}
