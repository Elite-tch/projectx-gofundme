import Navbar from "../components/Navbar";
import laptop from "../assets/laptop.jpg";
import medicin2 from "../assets/medicin2.jpg";
import { Link } from "react-router-dom";

const Donate = () => {
	const items = [
		{
			image: laptop,
			label: "help frank get a laptop for final year studies",
			bgColor: "bg-slate-300",
			progress: "70",
			raised: "1000",
		},
		{
			image: medicin2,
			label: "Help Mary pay for her Kidney Transplant",
			bgColor: "bg-slate-300",
			progress: "40",
			raised: "3500",
		},
	];
	return (
		<div className='relative mx-10'>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='relative md:mt-52 mt-24  text-left text-6xl font-medium text-gray-800  mb:ml-10 ml:ml-24 '>
				<h2>
					Browse fundraisers <h2> by category</h2>
				</h2>
			</div>

			<p className='mt-6 text-left 4/5 text-2xl font-medium text-gray-600'>
				People around the world are raising money for what they are passionate
				about.
			</p>

			<div className='flex lg:items-start justify-center lg:justify-start mt-10'>
				<Link to='/create'>
					<button className='w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium'>
						Start a MetroFund
					</button>
				</Link>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
				{items.map((item, index) => (
					<div
						key={index}
						className='flex sm:flex-col items-center sm:items-center w-full mx-auto rounded-md transition-transform transform'
					>
						<div className='w-44 h-44 sm:w-full sm:h-64 mr-4'>
							<img
								src={item.image}
								alt={`${item.label} Icon`}
								className='w-full h-full object-cover rounded-xl'
							/>
						</div>
						<p className='text-sm font-medium text-left sm:text-left mt-2 sm:mt-4 text-gray-700'>
							{item.label}

							{/* Progress Bar */}
							<div className='w-full bg-gray-200 rounded-full h-1 mt-3'>
								<div
									className='bg-purple-500 h-1 rounded-full transition-all duration-300'
									style={{ width: `${item.progress}%` }} // dynamically set width
								></div>

								<p className='font-medium'> {item.raised} Eth</p>
							</div>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Donate;
