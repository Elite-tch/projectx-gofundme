import Navbar from "../components/Navbar";
import Hero from "../components/LandingPage/Hero";
import ContentPage from "../components/LandingPage/ContentPage";
const Home = () => {
	return (
		<div className='relative'>
			{/* Navbar */}
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>
<Hero />
<ContentPage />			
		</div>
	);
};

export default Home;
