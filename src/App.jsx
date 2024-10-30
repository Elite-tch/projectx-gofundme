import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import CreateInitiative from "./pages/Create";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route index path='/donate' element={<Donate />} />
					<Route index path='/create' element={<CreateInitiative />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
