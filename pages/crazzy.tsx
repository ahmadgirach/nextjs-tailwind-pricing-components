import { InspiredBy } from "../components/Common/InspiredBy"
import { Meta } from "../components/Common/Meta"
import { Container } from "../components/Crazzy/Container"
import { Features } from "../components/Crazzy/Features"
import { Header } from "../components/Crazzy/Header"
import { NoOfViews } from "../components/Crazzy/NoOfViews"
import { PricingCardWrapper } from "../components/Crazzy/PricingCardWrapper"
import { SignUpButton } from "../components/Crazzy/SignUpButton"

const Crazzy = () => {

	const basicFeatures = ['1 Account', '1 User', '1 GB Storage', '100 Credits', '100 API Calls']
	const standardFeatures = ['5 Accounts', '5 Users', '10 GB Storage', '1000_Credits', '10000_API Calls']
	const businessFeatures = ['10 Accounts', '100 Users', '100 GB Storage', '10000_Credits', '1000000_API Calls']
	const proFeatures = ['50 Accounts', '1000_Users', '1 TB Storage', '100000_Credits', '100000000_API Calls']

	return (
		<>
			<Meta title='Pricing Component - Crazzy' />
			<Container>
				<PricingCardWrapper>
					<Header name="Basic" price={0} />
					<NoOfViews noOfViews={30000} />
					<Features features={basicFeatures} />
					<SignUpButton />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Header name="Standard" price={9} />
					<NoOfViews noOfViews={60000} />
					<Features features={standardFeatures} />
					<SignUpButton />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Header name="Business" price={19} popular />
					<NoOfViews noOfViews={100000} />
					<Features features={businessFeatures} />
					<SignUpButton />
				</PricingCardWrapper>

				<PricingCardWrapper>
					<Header name="Pro" price={39} />
					<NoOfViews noOfViews={150000} />
					<Features features={proFeatures} />
					<SignUpButton />
				</PricingCardWrapper>
			</Container>

			<InspiredBy href="https://www.crazyegg.com/pricing" label="Crazzy Egg Pricing" />
		</>
	)
}

export default Crazzy