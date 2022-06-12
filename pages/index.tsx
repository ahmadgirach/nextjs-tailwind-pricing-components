import type { NextPage } from 'next'
import { PricingCard } from '../components/Jazz/PricingCard';

const Home: NextPage = () => {

  const basicFeatures = ['1 User', '1 GB Storage', '100 SMS'];
  const starterFeatures = ['10 Users', '10 GB Storage', '10,000 SMS'];
  const businessFeatures = ['100 Users', '100 GB Storage', '100,000 SMS'];

  return (
    <>
      <div className='font-inter'>
        <section className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 pt-20'>

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

        </section>

        <p className="text-md text-center mx-auto mt-5">
          Inspired by {''}
          <a className='text-blue-600 font-bold' href="https://www.jazzhr.com/pricing/" target='_blank' rel="noopener noreferrer">
            Jazz HR Pricing
          </a>
        </p>
      </div>
    </>
  )
}

export default Home
