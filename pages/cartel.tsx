import { Container } from "../components/Cartel/Container"
import { Features } from "../components/Cartel/Features"
import { Header } from "../components/Cartel/Header"
import { PricingCardWrapper } from "../components/Cartel/PricingCardWrapper"
import { InspiredBy } from "../components/Common/InspiredBy"

const Cartel = () => {

	const features = Array.from({ length: 8 }, () => 'Lorem ipsum dolor sit amet.')

	return (
		<>
			<Container>
				<PricingCardWrapper>
					<Header
						noOfProducts={5}
						price={0}
						message="No Credit Card required"
						buttonLabel="Sign up free"
					/>
					<Features features={features} />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Header
						noOfProducts={50}
						price={8.99}
						message="No hidden Charges"
						buttonLabel="Sign up now"
					/>
					<Features features={features} />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Header
						noOfProducts={100}
						price={19.99}
						message="No hidden Charges"
						buttonLabel="Sign up now"
					/>
					<Features features={features} />
				</PricingCardWrapper>
			</Container>

			<InspiredBy href="https://www.bigcartel.com/pricing" label="Big Cartel Pricing" />
		</>
	)
}

export default Cartel