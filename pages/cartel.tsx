import { InspiredBy } from "../components/Common/InspiredBy"

const Cartel = () => {
	return (
		<>
			<section className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-6 mt-16">

				<div className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-200">
					<div className="flex flex-col gap-3 bg-primary-100 px-32 py-20 text-center">
						<p>5 Products</p>
						<h3 className="text-2xl font-semibold">FREE!</h3>
						<p>No Credit Card required</p>
						<button className="text-white bg-black p-5 rounded-sm">Sign up free</button>
					</div>
					<div className="text-center bg-white py-10">
						<h3 className="text-lg font-bold my-4">Features</h3>
						<ul className="leading-relaxed">
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-200">
					<div className="flex flex-col gap-3 bg-primary-300 px-32 py-20 text-center">
						<p>50 Products</p>
						<h3 className="text-2xl font-semibold">$8.99 / month</h3>
						<p>No hidden charges</p>
						<button className="text-white bg-black p-5 rounded-sm">Sign up now</button>
					</div>
					<div className="text-center bg-white py-10">
						<h3 className="text-lg font-bold my-4">Features</h3>
						<ul className="leading-relaxed">
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-200">
					<div className="flex flex-col gap-3 bg-primary-700 px-32 py-20 text-center">
						<p>100 Products</p>
						<h3 className="text-2xl font-semibold">$19.99 / month</h3>
						<p>No hidden charges</p>
						<button className="text-white bg-black p-5 rounded-sm">Sign up now</button>
					</div>
					<div className="text-center bg-white py-10">
						<h3 className="text-lg font-bold my-4">Features</h3>
						<ul className="leading-relaxed">
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
							<li> &rarr; Lorem ipsum dolor sit amet.</li>
						</ul>
					</div>
				</div>

			</section>

			<InspiredBy href="https://www.bigcartel.com/pricing" label="Big Cartel Pricing" />
		</>
	)
}

export default Cartel