// import React from 'react'

export default function Hero() {
	return (
		<div className='relative bg-gray-50 pt-24'>
			<div className='mx-auto max-w-screen-xl px-4 pb-16 md:pb-32 pt-8 md:pt-16 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto md:w-4/5 text-center'>
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						Access the full power of DeFi.
						<strong className='font-extrabold text-purple-700 pt-4 sm:block'>
							Your home for changing the world
						</strong>
					</h1>

					<div className='flex flex-col items-center justify-center md:flex-row gap-6 md:gap-8 mt-6 md:mt-10'>
						<img
							src='/aave.png'
							alt='DeFi Platform'
							className='md:pt-28 md:h-72 h-40 w-36 md:w-44 object-contain'
						/>
						<div className='md:w-2/3'>
							<p className='mt-4 sm:text-lg text-gray-700'>
								Streamline fundraising, marketing, and donor management in one
								powerful platform—rated for ease of use time and time again.
								Sign up for free
							</p>

							<div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
								<a
									className='block w-full sm:w-auto rounded bg-purple-700 px-8 py-3 text-sm font-medium text-white shadow hover:bg-purple-900 focus:outline-none focus:ring active:bg-purple-500'
									href='#'
								>
									Get Started
								</a>

								<a
									className='block w-full sm:w-auto rounded px-8 py-3 text-sm font-medium text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700 focus:outline-none focus:ring active:text-blue-500'
									href='#'
								>
									Learn More
								</a>
							</div>
						</div>
						<img
							src='/aave3.png'
							alt='DeFi Visual'
							className='md:h-64 hidden md:block object-contain'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
