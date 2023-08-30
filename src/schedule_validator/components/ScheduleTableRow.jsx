import { useEffect, useState } from "react";
import { generatePlaceholderCourse, isPlaceholderID } from "../lib/placeholder";

import SearchCourse from "./SearchCourse";

const ScheduleTableRow = ({ course, schedule, term, handleChangeCourse, handleDeleteCourse }) => {
	const [newCourse, setNewCourse] = useState(course);
	const [courseInput, setCourseInput] = useState(course.course_id);
	const [showInfo, setShowInfo] = useState(!!newCourse.course_id);

	useEffect(() => {
		if (courseInput === "") {
			handleDeleteCourse(term, newCourse, schedule);
			return;
		}

		if (isPlaceholderID(courseInput)) {
			const courseJSON = generatePlaceholderCourse(courseInput);
			handleChangeCourse(term, schedule, courseJSON, newCourse);
			setNewCourse(courseJSON);
			setShowInfo(true);
			return;
		}

		const fetchCourseAndSave = async () => {
			try {
				const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
				const response = await fetch(
					`${baseUrl}/courses/${courseInput.toUpperCase() || "none"}`
				);
				let courseJSON = await response.json();

				if (courseJSON === null) {
					setShowInfo(false);
				} else {
					handleChangeCourse(term, schedule, courseJSON, newCourse);
					setNewCourse(courseJSON);
					setShowInfo(true);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchCourseAndSave();
	}, [courseInput]);

	const copyToClipboard = (e) => {
		navigator.clipboard.writeText(JSON.stringify(newCourse));
	};

	return (
		<tr>
			<td>
				<SearchCourse courseInput={courseInput} setCourseInput={setCourseInput} />
			</td>
			{showInfo ? (
				<>
					<td>
						<button onClick={copyToClipboard}>{newCourse.credits}</button>
					</td>
				</>
			) : (
				<>
					<td></td>
				</>
			)}
		</tr>
	);
};
export default ScheduleTableRow;
