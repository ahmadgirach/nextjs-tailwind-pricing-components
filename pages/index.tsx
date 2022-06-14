import type { NextPage } from 'next'
import { InspiredBy } from '../components/Common/InspiredBy';
import { Container } from '../components/Jazz/Container';
import { PricingCard } from '../components/Jazz/PricingCard';

const Home: NextPage = () => {

  const basicFeatures = ['1 User', '1 GB Storage', '100 SMS'];
  const starterFeatures = ['10 Users', '10 GB Storage', '10000_SMS'];
  const businessFeatures = ['100 Users', '100 GB Storage', '100000_SMS'];

  return (
    <>
      <Container>
        <PricingCard
          label='Basic'
          features={basicFeatures}
          price={0}
          gradientFromColor='from-blue-900'
          gradientToColor='to-purple-600'
        />

        <PricingCard
          label='Starter'
          features={starterFeatures}
          price={19}
          gradientFromColor='from-gray-600'
          gradientToColor='to-pink-500'
          tilted
        />

        <PricingCard
          label='Business'
          features={businessFeatures}
          price={39}
          gradientFromColor='from-yellow-500'
          gradientToColor='to-amber-900'
        />
      </Container>

      <InspiredBy href='https://www.jazzhr.com/pricing/' label='Jazz HR Pricing' />
    </>
  )
}

export default Home
