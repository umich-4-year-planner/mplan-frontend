const SearchCourse = ({courseInput, setCourseInput}) => {
	return (
		<form
			className="search-course"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<label htmlFor="search">Search</label>
			<input
				type="text"
				id="search"
				role="searchbox"
				value={courseInput}
				onChange={(e) => {
					setCourseInput(e.target.value);
				}}
			/>
		</form>
	);
};
export default SearchCourse;
