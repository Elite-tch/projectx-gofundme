import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContentPage() {
	useEffect(() => {
		AOS.init();
	}, []);

	const contentData = [
		{
			id: 1,
			src: "/avax.png",
			title: "Avalanche",
			description:
				"Fast and cheaper transaction. Earn rewards in AVAX for borrowing or supplying liquidity.",
		},
		{
			id: 2,
			src: "/opt.png",
			title: "Optimism",
			description:
				"Optimism is an EVM equivalent Rollup chain. Designed to be fast, simple, and secure.",
		},
		{
			id: 3,
			src: "/arc.png",
			title: "Aave Arc",
			description:
				"A permissioned DeFi market for institutions, wealth managers, and private funds.",
		},
		{
			id: 4,
			src: "/eth.png",
			title: "Ethereum",
			description:
				"Fast and cheaper transactions with rewards for liquidity providers.",
		},
		{
			id: 5,
			src: "/base.png",
			title: "Base",
			description:
				"A layer 2 blockchain by Coinbase, built for secure, fast transactions.",
		},
		{
			id: 6,
			src: "/ab.png",
			title: "Arbitrum",
			description:
				"Ethereum security with speed. A layer 2 rollup for secure, fast transactions.",
		},
		{
			id: 7,
			src: "/poly.png",
			title: "Polygon",
			description:
				"Fast transactions and lower fees make Polygon ideal for high-volume transactions.",
		},
		{
			id: 8,
			src: "/gen.png",
			title: "Gnosis",
			description:
				"One of the first Ethereum Chains, operating at a lower cost than the Ethereum mainnet.",
		},
	];

	return (
		<div className='bg-gray-900 text-gray-500 py-10'>
			<div className='md:w-4/5 mx-auto px-6 md:px-0'>
				<div className='flex flex-col md:flex-row justify-between gap-8'>
					<div className='md:w-2/5'>
						<h2 className='text-gray-100 text-3xl'>$20,888,734,456.00</h2>
						<p>of liquidity in Aave across 8 networks and over 15 markets</p>
					</div>
					<div className='md:w-2/5 flex flex-col gap-4'>
						<div className='flex items-center gap-4'>
							<p>Supply</p>
							<p>Stake</p>
							<p>Borrow</p>
							<p>Vote</p>
						</div>
						<div className='w-full bg-gray-600 rounded-full'>
							<div
								className='bg-blue-900 h-0.5 rounded-full'
								style={{ width: "70%" }}
							></div>
						</div>
						<p>
							Participate in Aave governance and vote on new proposals, new
							assets, and protocol upgrades
						</p>
					</div>
				</div>

				<div className='pt-12'>
					<h2 className='text-2xl text-gray-200'>Aave Markets</h2>
					<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
						{contentData.map((item) => (
							<div
								key={item.id}
								data-aos='zoom-in-up'
								className='flex flex-col gap-2 bg-gray-800 py-4 px-6 rounded-xl shadow-xl'
							>
								<img src={item.src} alt={item.title} className='w-12' />
								<h3 className='text-gray-400 text-2xl'>{item.title}</h3>
								<p className='text-sm text-gray-600'>{item.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className='bg-gray-800 mt-12 p-8 rounded-lg text-gray-600'>
					<h4 className='text-gray-300 text-lg'>And more to come...</h4>
					<p className='text-sm'>
						Submit a proposal to deploy a new Aave ecosystem. You can learn from
						Aave governance.
					</p>
					<button className='bg-slate-200 py-3 px-6 hover:bg-gray-300 rounded-full mt-6'>
						Learn more
					</button>
				</div>

				<div className='flex flex-col items-center justify-center pt-12'>
					<h2 className='text-gray-300 text-3xl font-bold text-center pb-2'>
						Governed by the community
					</h2>
					<p className='text-gray-500 text-center text-sm'>
						Aave is a fully decentralized community-governed protocol with
						166,224 token holders.
					</p>
					<button className='bg-slate-200 hover:bg-gray-300 py-3 px-6 rounded-xl mt-6'>
						Governors Forum
					</button>
					<img src='/emoji.png' alt='emoji' className='pt-4 w-4/5 max-w-md' />
				</div>

				<div className='pt-12'>
					<h2 className='text-gray-300 text-center font-bold text-2xl pb-2'>
						How it Works
					</h2>
					<div className='flex flex-wrap justify-center gap-8 w-full mx-auto pt-6'>
						{[
							{
								step: "01",
								title: "Submit Aave Request for Comment",
								description: "Discuss with community feedback.",
							},
							{
								step: "02",
								title: "Create a Snapshot",
								description: "Gauge community sentiment on new proposals.",
							},
							{
								step: "03",
								title: "Submit an Aave Request for Improvement",
								description: "Submit the proposal for community voting.",
							},
						].map((item, index) => (
							<div key={index} className='flex gap-8 text-gray-500'>
								<div className='flex items-center justify-center flex-col'>
									<div className='bg-gray-800 px-3 py-2 rounded-full text-gray-400'>
										{item.step}
									</div>
									<div className='bg-gray-800 w-0.5 h-32'></div>
								</div>
								<div>
									<h4 className='text-gray-200 font-medium'>{item.title}</h4>
									<p className='text-sm'>{item.description}</p>
									{index === 0 && (
										<button className='text-gray-200 text-sm mt-2'>
											Visit Docs
										</button>
									)}
									{index === 1 && (
										<button className='text-gray-200 text-sm mt-2'>
											How to create a Snapshot
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
