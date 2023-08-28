import { useState, useEffect } from "react";
import SearchCourse from "./SearchCourse";

const EmptyTableRow = ({ handleAddCourse, schedule, term }) => {
	const [courseInput, setCourseInput] = useState("");

	useEffect(() => {
		const fetchCourseAndSave = async () => {
			try {
				const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
				const response = await fetch(
					`${baseUrl}/courses/${courseInput.toUpperCase() || "none"}`
				);
				let courseJSON = await response.json();

				if (courseJSON !== null) {
					handleAddCourse(courseJSON, schedule, term);
					setCourseInput("");
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchCourseAndSave();
	}, [courseInput]);

	return (
		<tr className="empty-row">
			<td>
				<SearchCourse courseInput={courseInput} setCourseInput={setCourseInput} />
			</td>
			<td> </td>
			<td> </td>
		</tr>
	);
};

export default EmptyTableRow;
