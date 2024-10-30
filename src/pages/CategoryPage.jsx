import { useParams } from "react-router-dom";

const CategoryPage = () => {
	const { category } = useParams();

	return (
		<div>
			<h1>{category} Category</h1>
			<p>Information about {category} fundraising.</p>
		</div>
	);
};

export default CategoryPage;
