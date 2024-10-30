import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
<<<<<<< HEAD
import CategoryPage from "./pages/CategoryPage";
import Education from "./pages/education";
=======
import CreateInitiative from "./pages/Create";
>>>>>>> 573dbe5de09baa47c9ed0f3040616917aecaa137

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
<<<<<<< HEAD
					<Route index path='/Donate' element={<Donate />} />
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route index path='category/education' element={<Education />} />
=======
					<Route index path='/donate' element={<Donate />} />
					<Route index path='/create' element={<CreateInitiative />} />
>>>>>>> 573dbe5de09baa47c9ed0f3040616917aecaa137
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
