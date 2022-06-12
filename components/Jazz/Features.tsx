import React from "react";

type Props = {
	features: string[]
}

export const Features = ({ features }: Props) => {
	return (
		<div className="text-gray-700">
			<p className="mb-4 font-bold">Includes:</p>
			{
				// WE DON'T NEED TO ASSIGN KEY PROP HERE. :)
				React.Children.toArray(
					features.map((feature) => <p>&rarr; {feature}</p>)
				)
			}
		</div>
	);
};
