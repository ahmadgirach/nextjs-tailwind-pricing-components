import { InspiredBy } from "../components/Common/InspiredBy"

const Crazzy = () => {
	return (
		<>
			<section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 mt-16">

				<div className="flex flex-col gap-4 border border-blue-200">
					<div className="text-center border border-blue-300 bg-blue-100 p-3">
						<h3 className="uppercase text-md font-semibold">Basic</h3>
						<p><sup className="text-lg">$ </sup><span className="text-3xl">0</span> / month</p>
					</div>

					<div className="text-center">
						<p>30,000</p>
						<p className="text-gray-600 text-sm">impressions / views</p>
					</div>

					<ul className="p-3 leading-relaxed">
						<li>&radic; 1 Account</li>
						<li>&radic; 1 User</li>
						<li>&radic; 1 GB Storage</li>
						<li>&radic; 100 Credits</li>
						<li>&radic; 100 API Calls</li>
					</ul>

					<div className="p-3">
						<button className="text-white bg-blue-500 rounded-sm font-bold px-4 py-2 w-full">Start Free Trial</button>
					</div>
				</div>

				<div className="flex flex-col gap-4 border border-blue-200">
					<div className="text-center border border-blue-300 bg-blue-100 p-3">
						<h3 className="uppercase text-md font-semibold">Standard</h3>
						<p><sup className="text-lg">$ </sup><span className="text-3xl">9</span> / month</p>
					</div>

					<div className="text-center">
						<p>60,000</p>
						<p className="text-gray-600 text-sm">impressions / views</p>
					</div>

					<ul className="p-3 leading-relaxed">
						<li>&radic; 5 Accounts</li>
						<li>&radic; 5 Users</li>
						<li>&radic; 10 GB Storage</li>
						<li>&radic; 1,000 Credits</li>
						<li>&radic; 10,000 API Calls</li>
					</ul>

					<div className="p-3">
						<button className="text-white bg-blue-500 rounded-sm font-bold px-4 py-2 w-full">Start Free Trial</button>
					</div>
				</div>

				<div className="flex flex-col gap-4 border border-blue-200 -mt-10">
					<div className="text-white bg-blue-600">
						<h3 className="uppercase text-md text-center font-semibold">Most Popular</h3>
					</div>
					<div className="text-center text-white border border-blue-300 bg-blue-500 p-3">
						<h3 className="uppercase text-md font-semibold">Business</h3>
						<p><sup className="text-lg">$ </sup><span className="text-3xl">19</span> / month</p>
					</div>

					<div className="text-center">
						<p>100,000</p>
						<p className="text-gray-600 text-sm">impressions / views</p>
					</div>

					<ul className="p-3 leading-relaxed">
						<li>&radic; 10 Accounts</li>
						<li>&radic; 100 Users</li>
						<li>&radic; 100 GB Storage</li>
						<li>&radic; 10,000 Credits</li>
						<li>&radic; 10,00,000 API Calls</li>
					</ul>

					<div className="p-3">
						<button className="text-white bg-blue-500 rounded-sm font-bold px-4 py-2 w-full">Start Free Trial</button>
					</div>
				</div>

				<div className="flex flex-col gap-4 border border-blue-200">
					<div className="text-center border border-blue-300 bg-blue-100 p-3">
						<h3 className="uppercase text-md font-semibold">Pro</h3>
						<p><sup className="text-lg">$ </sup><span className="text-3xl">39</span> / month</p>
					</div>

					<div className="text-center">
						<p>150,000</p>
						<p className="text-gray-600 text-sm">impressions / views</p>
					</div>

					<ul className="p-3 leading-relaxed">
						<li>&radic; 50 Accounts</li>
						<li>&radic; 1,000 Users</li>
						<li>&radic; 1 TB Storage</li>
						<li>&radic; 100,000 Credits</li>
						<li>&radic; 10M API Calls</li>
					</ul>

					<div className="p-3">
						<button className="text-white bg-blue-500 rounded-sm font-bold px-4 py-2 w-full">Start Free Trial</button>
					</div>
				</div>

			</section>

			<InspiredBy href="https://www.crazyegg.com/pricing" label="Crazzy Egg Pricing" />
		</>
	)
}

export default Crazzy