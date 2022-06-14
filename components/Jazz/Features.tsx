import React from "react";
import { numberFormatter } from "../../utils";

type Props = {
	features: string[]
}

export const Features = ({ features }: Props) => {
	return (
		<div className="text-gray-700">
			<p className="mb-4 font-bold">Includes:</p>
			{
				React.Children.toArray(
					features.map((feature) => {
						const splitted = feature.split("_")
						if (splitted.length > 1) {
							const [number, ...rest] = splitted
							const formatted = numberFormatter(number)
							const formattedFeature = [formatted, ...rest].join(" ")
							return (
								<p>&rarr; {formattedFeature}</p>
							)
						} else {
							return (
								<p>&rarr; {splitted[0]}</p>
							)
						}
					})
				)
			}
		</div>
	);
};
