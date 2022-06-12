import { CardHeading } from "./CardHeading";
import { Divider } from "./Divider";
import { Features } from "./Features";
import { PricingCardWrapper } from "./PricingCardWrapper";
import { SignupButton } from "./SignupButton";

type Props = {
	label: string,
	price: number,
	gradientFromColor: string,
	gradientToColor: string,
	features: string[],
	tilted?: Boolean,
}

export const PricingCard = ({ label, price, gradientFromColor, gradientToColor, features, tilted }: Props) => {
	return (
		<>
			<PricingCardWrapper tilted={tilted}>
				<CardHeading label={label} price={price} />
				<Divider gradientFromColor={gradientFromColor} gradientToColor={gradientToColor} />
				<Features features={features} />
				<SignupButton />
			</PricingCardWrapper>
		</>
	);
};
