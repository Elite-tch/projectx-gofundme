import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const navLinksLeft = [
		{ title: "Donate", to: "/Donate" },
		{ title: "Home", to: "/" },
	];
	const navLinksRight = [
		{ title: "About", to: "/About" },
		{ title: "Contact Us", to: "/Contact" },
		{ title: "Start a GoFundMe", to: "#" },
	];

	const [isOpen, setIsOpen] = useState(false);

	// Function to handle the Start a GoFundMe click
	const handleBookNowClick = (e) => {
		e.preventDefault();
		alert("Booking functionality coming soon!");
	};

	return (
		<div className='w-full mx-auto px-5 lg:px-10 bg-white shadow-2xl'>
			<div className='flex justify-between items-center py-2 lg:py-2'>
				{/* Desktop Links for the  Left Side */}
				<div className='hidden lg:flex lg:items-center space-x-5'>
					{navLinksLeft.map((link, index) => (
						<a
							key={index}
							href={link.to === "#" ? handleBookNowClick : link.to}
							className='text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition duration-300'
						>
							{link.title}
						</a>
					))}
				</div>

				{/* Logo which is placed in the  Center for desktop view */}
				<Link to='/'>
					<img src='logo2.png' alt='Logo' className='w-32 md:w-44 ' />
				</Link>

				{/* Desktop Links for the Right hand Side */}
				<div className='hidden lg:flex lg:items-center space-x-5 '>
					{navLinksRight.map((link, index) => (
						<a
							key={index}
							href={link.to === "#" ? undefined : link.to}
							onClick={
								link.title === "Start a GoFundMe"
									? handleBookNowClick
									: undefined
							}
							className={`text-sm cursor-pointer font-medium hover:text-gray-900 transition duration-300 ${
								link.title === "Start a GoFundMe"
									? "text-white bg-purple-700 px-4 py-2 rounded-full"
									: "text-gray-700"
							}`}
						>
							{link.title}
						</a>
					))}
				</div>

				{/* Mobile Hamburger Menu */}
				<div className='lg:hidden'>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<IoCloseCircleOutline size='1.5rem' />
						) : (
							<GiHamburgerMenu size='1.5rem' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile slidin Menu */}
			<div
				className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out w-4/5 max-w-xs shadow-lg z-50 px-2 ${
					isOpen ? "transform translate-x-0" : "transform translate-x-full"
				}`}
			>
				<div className='flex justify-between items-center p-5'>
					{/* Logo since we dont have any logo for now */}
					<Link to='/' onClick={() => setIsOpen(false)}>
						<img src='logo2.png' alt='Logo' className='h-10' />
					</Link>

					{/* Close X Button */}
					<button onClick={() => setIsOpen(false)}>
						<IoCloseCircleOutline size='1.5rem' />
					</button>
				</div>
				<div className='mt-4 space-y-4'>
					{[...navLinksLeft, ...navLinksRight].map((link, index) => (
						<a
							key={index}
							href={link.to === "#" ? undefined : link.to}
							onClick={() => {
								setIsOpen(false);
								if (link.title === "Start a GoFundMe") handleBookNowClick();
							}}
							className={`block text-lg font-medium px-4 py-2 transition duration-200 rounded-lg ${
								link.title === "Start a GoFundMe"
									? "text-white bg-purple-700 rounded-full"
									
									: "text-gray-700 bg-gray-200 hover:bg-gray-300"
							}`}
						>
							{link.title}
						</a>
					))}
				</div>
			</div>

			{/*Black Overlay for mobile menu */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black opacity-50 z-40'
					onClick={() => setIsOpen(false)}
				></div>
			)}
		</div>
	);
};

export default Navbar;
