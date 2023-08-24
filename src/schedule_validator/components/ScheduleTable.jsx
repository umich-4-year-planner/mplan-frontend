import { useEffect, useState } from "react";

import ScheduleTableRow from "./ScheduleTableRow.jsx";

const ScheduleTable = ({ term, schedule, coursePath }) => {
	const [emptyRows, setEmptyRows] = useState(
		4 - term.courses.length > 0 ? 4 - term.courses.length : 0
	);

	useEffect(() => {
		setEmptyRows(4 - term.courses.length);
	}, [schedule]);

	coursePath.push("term.id");

	return (
		<div className="schedule-term">
			<h3>{term.name}</h3>
			<table className="schedule-table">
				<thead>
					<tr key={0}>
						<th>Course ID</th>
						<th>Course Name</th>
						<th>Credits</th>
					</tr>
				</thead>
				<tbody>
					{term.courses.map((course) => {
						console.log(course);
						return (
							<ScheduleTableRow
								course={course}
								schedule={schedule}
								coursePath={coursePath}
								key={course.course_id}
							/>
						);
					})}
					{Array.from(Array(emptyRows)).map((row, i) => {
						return (
							<tr key={`row${i}`} className="empty-row">
								<td> </td>
								<td> </td>
								<td> </td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default ScheduleTable;
