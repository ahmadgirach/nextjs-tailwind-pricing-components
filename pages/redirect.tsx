import { InspiredBy } from "../components/Common/InspiredBy"
import { Features } from "../components/Redirect/Features"
import { Heading } from "../components/Redirect/Heading"
import { Pricing } from "../components/Redirect/Pricing"
import { PricingCardWrapper } from "../components/Redirect/PricingCardWrapper"

const Redirect = () => {

	const getFeature = () => ({
		name: "Lorem, ipsum dolor.",
		available: false,
	})

	const generateFeatures = (index: number) => {
		const features = [...baseFeatures].map((feature, i) => {
			let available = false;
			if (i <= index) {
				available = true
			}
			return {
				name: feature.name,
				available
			}
		})
		return features;
	}

	const baseFeatures = Array.from({ length: 10 }, getFeature)

	const basicFeatures = generateFeatures(2)
	const starterFeatures = generateFeatures(4)
	const businessFeatures = generateFeatures(7)
	const enterpriseFeatures = generateFeatures(baseFeatures.length - 1)

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<section className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-4 mt-16">

				<PricingCardWrapper>
					<Heading label="Basic" />
					<Features features={basicFeatures} />
					<Pricing price={0} />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Heading label="Starter" />
					<Features features={starterFeatures} />
					<Pricing price={19.99} />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Heading label="Business" />
					<Features features={businessFeatures} />
					<Pricing price={39.99} />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Heading label="Enterprise" />
					<Features features={enterpriseFeatures} />
					<Pricing price={59.99} />
				</PricingCardWrapper>

			</section>

			<button
				className="text-center w-1/6 min-w-fit rounded-md bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white px-2 py-3 font-bold uppercase mx-auto mt-2">
				Get Started
			</button>

			<InspiredBy href="https://redirect.pizza/pricing" label="Redirect Pizza Pricing" />
		</div>
	)
}

export default Redirect