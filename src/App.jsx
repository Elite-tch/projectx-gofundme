import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route index path='/Donate' element={<Donate />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
