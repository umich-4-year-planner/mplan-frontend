import { useEffect, useState } from "react";

import SearchCourse from "./SearchCourse";

const ScheduleTableRow = ({ course, schedule }) => {
	const [newCourse, setNewCourse] = useState(course);
	const [courseInput, setCourseInput] = useState(course.course_id);

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/courses/${courseInput.toUpperCase() || "a"}`
				);
				let json = await response.json();

				if (json === null) {
					setNewCourse({
						name: "",
						course_id: "",
					});
				} else {
                    setNewCourse(json);
				}

			} catch (err) {
				console.log(err);
			}
		};
		fetchCourse();
	}, [courseInput]);

	return (
		<tr>
			<td>
				<SearchCourse courseInput={courseInput} setCourseInput={setCourseInput} />
			</td>
			<td>{newCourse.name}</td>
			<td>{newCourse.credits}</td>
		</tr>
	);
};
export default ScheduleTableRow;
