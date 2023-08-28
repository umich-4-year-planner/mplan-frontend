import { useEffect, useState } from "react";

import SearchCourse from "./SearchCourse";

const ScheduleTableRow = ({ course, schedule, term, handleChangeCourse, handleDeleteCourse }) => {
	const [newCourse, setNewCourse] = useState(course);
	const [courseInput, setCourseInput] = useState(course.course_id);
	const [showInfo, setShowInfo] = useState(!!newCourse.course_id);

	useEffect(() => {
		if (courseInput === "") {
			handleDeleteCourse(term, newCourse, schedule);
			return
		}

		const domain = process.env.NODE_ENV === "production" ? "https://mplan-api.onrender.com" : "http://localhost:4000";
		const fetchCourseAndSave = async () => {
			try {
				const response = await fetch(
					`${domain}/courses/${courseInput.toUpperCase() || "none"}`
				);
				let courseJSON = await response.json();

				if (courseJSON === null) {
					setShowInfo(false);
				} else {
					console.log(`newCourse: ${newCourse.course_id}\ncourseInput: ${courseInput}`);
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

	return (
		<tr>
			<td>
				<SearchCourse courseInput={courseInput} setCourseInput={setCourseInput} />
			</td>
			{showInfo ? (
				<>
					<td>{newCourse.name}</td>
					<td>{newCourse.credits}</td>
				
				</>
			) : (
				<>
					<td></td>
					<td></td>
				</>
			)}
		</tr>
	);
};
export default ScheduleTableRow;
