import Navbar from "../components/Navbar";

const CreateInitiative = () => {
	return (
		<div>
			<div className='fixed top-0 left-0 w-full z-10'>
				<Navbar />
			</div>
			<section className='bg-gray-100 flex items-center pt-28 justify-center min-h-screen'>
				<div className='bg-white shadow-lg rounded-lg p-8 max-w-lg w-full'>
					<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
						Create a Public Goods Initiative
					</h2>
					<form action='#' method='POST'>
						<div className='mb-4'>
							<label
								htmlFor='title'
								className='block text-gray-700 font-medium mb-2'
							>
								Initiative Title
							</label>
							<input
								type='text'
								id='title'
								name='title'
								placeholder='Enter title'
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='description'
								className='block text-gray-700 font-medium mb-2'
							>
								Description
							</label>
							<textarea
								id='description'
								name='description'
								rows='4'
								placeholder='Describe the initiative'
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
							></textarea>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='goal'
								className='block text-gray-700 font-medium mb-2'
							>
								Goal
							</label>
							<input
								type='number'
								id='goal'
								name='goal'
								placeholder='Enter Amount$'
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='contact'
								className='block text-gray-700 font-medium mb-2'
							>
								Contact Email
							</label>
							<input
								type='email'
								id='contact'
								name='contact'
								placeholder='you@example.com'
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
							/>
						</div>

						<div className='text-center'>
							<button
								type='submit'
								className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
							>
								Submit Initiative
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default CreateInitiative;
