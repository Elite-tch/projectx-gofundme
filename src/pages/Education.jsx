import Navbar from "../components/Navbar";
import EduWall from "../assets/EduWall.jpg";

import medicine from "../assets/medicine.svg";
import environment from "../assets/environment.svg";
import business from "../assets/business.svg";
import investment from "../assets/investment.svg";
import family from "../assets/family.svg";
//
import laptop from "../assets/laptop.jpg";

const Education = () => {
	const items = [
		{
			image: laptop,
			label: "help frank get a laptop for final year studies",
			bgColor: "bg-slate-300",
		},
		{ image: medicine, label: "Medicine", bgColor: "bg-slate-300" },
		{ image: environment, label: "environment", bgColor: "bg-slate-300" },
		{ image: business, label: "non-profit", bgColor: "bg-slate-300" },
		{ image: investment, label: "investment", bgColor: "bg-slate-300" },
		{ image: family, label: "family", bgColor: "bg-slate-300" },
	];

	return (
		<div>
			{/* Navbar */}
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='relative flex justify-center md:mt-36 mt-24 px-4 md:px-16 lg:px-24'>
				<div className='flex flex-col lg:flex-row items-center justify-between max-w-screen-xl w-full'>
					{/* Text Section */}
					<div className='w-full lg:w-3/5 flex flex-col items-center text-center lg:text-left lg:items-start'>
						<h2 className='text-4xl lg:text-5xl font-bold mb-4 w-full'>
							FundRaise Educational projects on MetroSpace
						</h2>
						<p className='font-medium text-gray-700'>
							Help People Donate funds to their Educational projects or Start
							one for yourself.
						</p>

						<button className='w-full lg:w-1/3 mt-8 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium'>
							Start a GoFundMe
						</button>
					</div>

					{/* Image Section */}
					<div className='w-full h-96 lg:w-1/3 mt-6 lg:mt-0 flex justify-center'>
						<img
							src={EduWall}
							alt='Educational Projects'
							className='object-cover h-80 md:h-96 w-full max-w-md rounded-lg shadow-lg'
						/>
					</div>
				</div>
			</div>

			<div className='md:mt-16 mx-5 lg:mx-20'>
				<div className='w-full h-px bg-black '></div>

				<div>
					<h2 className='font-bold text-2xl '>Education</h2>

					<p className='font-medium text-gray-500'>
						We have Categories of people who are waiting on your Donations for
						their Educational Project.
					</p>
				</div>

				{/*  */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
					{items.map((item, index) => (
						<div
							key={index}
							className='flex sm:flex-col items-center sm:items-center w-full  mx-auto rounded-md transition-transform transform '
						>
							<img
								src={item.image}
								alt={`${item.label} Icon`}
								className='w-24 h-24 object-contain rounded-lg mr-4 sm:mr-0 sm:w-full sm:h-5/6'
							/>
							<p className='text-black text-sm font-medium text-left sm:text-center'>
								{item.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Education;
