type Props = {
	label: string,
	price: number
}

export const CardHeading = ({ label, price }: Props) => {
	return (
		<div>
			<h3 className="text-xl font-bold mb-2">{label}</h3>
			<p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet.</p>
			<p className="mb-4">
				<sup className="text-lg">$ </sup>
				<span className="text-4xl">{price}</span> / month
			</p>
		</div>
	);
};
