import Navbar from "../components/Navbar";
import education from "../assets/education.svg";
import medicine from "../assets/medicine.svg";
import environment from "../assets/environment.svg";
import business from "../assets/business.svg";
import investment from "../assets/investment.svg";
import family from "../assets/family.svg";
import pets from "../assets/pets.svg";
import events from "../assets/events.svg";
import community from "../assets/community.svg";
import competition from "../assets/competition.svg";
import volunteer from "../assets/volunteer.svg";
import opensource from "../assets/opensource.svg";
import { Link } from "react-router-dom";

const Donate = () => {
	const items = [
		{ image: education, label: "Education", bgColor: "bg-slate-300" },
		{ image: medicine, label: "Medicine", bgColor: "bg-slate-300" },
		{ image: environment, label: "environment", bgColor: "bg-slate-300" },
		{ image: business, label: "non-profit", bgColor: "bg-slate-300" },
		{ image: investment, label: "investment", bgColor: "bg-slate-300" },
		{ image: family, label: "family", bgColor: "bg-slate-300" },
		{ image: pets, label: "pets", bgColor: "bg-slate-300" },
		{ image: events, label: "events", bgColor: "bg-slate-300" },
		{ image: community, label: "community", bgColor: "bg-slate-300" },
		{ image: competition, label: "competition", bgColor: "bg-slate-300" },
		{ image: volunteer, label: "volunteer", bgColor: "bg-slate-300" },
		{ image: opensource, label: "opensource", bgColor: "bg-slate-300" },
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
				<button className='w-full lg:w-1/3 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 font-medium'>
					Start a GoFundMe
				</button>
			</div>

			<div className='grid grid-cols-3 lg:grid-cols-6 gap-6 mt-10'>
				{items.map((item, index) => (
					<Link
						to={`/category/${item.label.toLowerCase()}`}
						key={index}
						className={`flex flex-col items-center p-6 ${item.bgColor} rounded-lg w-full max-w-xs mx-auto transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl`}
					>
						<div
							key={index}
							className={`flex flex-col items-center  ${item.bgColor} rounded-lg w-full max-w-xs mx-auto transition-transform transform hover:scale-105 `}
						>
							<img
								src={item.image}
								alt={`${item.label} Icon`}
								className='w-20 mb-4'
							/>
							<p className='text-white text-sm font-medium text-center'>
								{item.label}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Donate;
