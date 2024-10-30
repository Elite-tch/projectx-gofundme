import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import CategoryPage from "./pages/CategoryPage";
import Education from "./pages/Education";
import CreateInitiative from "./pages/Create";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route index path='/Donate' element={<Donate />} />
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route index path='category/education' element={<Education />} />
					<Route index path='/donate' element={<Donate />} />
					<Route index path='/create' element={<CreateInitiative />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
