import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import About from './pages/About';
import Contact from './Contact';
import CreateInitiative from "./pages/Create";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route index path='/Donate' element={<Donate />} />
				
					<Route index path='/donate' element={<Donate />} />
					<Route index path='/create' element={<CreateInitiative />} />
					<Route index path='/about' element={<About />} />
					<Route index path='/contact' element={<Contact />} />
				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
