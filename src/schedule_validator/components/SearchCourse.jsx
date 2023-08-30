import { useRef } from "react";

const SearchCourse = ({courseInput, setCourseInput}) => {
	const inputRef = useRef();
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
				ref={inputRef}
				role="searchbox"
				autoComplete="off"
				value={courseInput}
				placeholder={"+ New Course"}
				onChange={(e) => {
					setCourseInput(e.target.value);
				}}
			/>
		</form>
	);
};
export default SearchCourse;
