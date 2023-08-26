import { useEffect, useState } from "react";

import Report from "./Report.jsx";
import Schedule from "./Schedule.jsx";
import ScheduleToolbar from "./ScheduleToolbar.jsx";

import generateEmptySchedule from "../lib/generateEmptySchedule.js";

const ScheduleValidator = () => {
	const [major, setMajor] = useState(localStorage.getItem("major") || "");
	const [year, setYear] = useState(localStorage.getItem("year") || 0);

	const [majorInput, setMajorInput] = useState("");
	const [yearInput, setYearInput] = useState(2020);

	const [schedule, setSchedule] = useState(
		JSON.parse(localStorage.getItem("schedule")) ||
			generateEmptySchedule(2022, "Computer Engineering")
	);

	const [report, setReport] = useState({});

	useEffect(() => {
		localStorage.setItem("schedule", JSON.stringify(schedule));

		const fetchReport = async (report) => {
			if (!report) return;

			try {
				const response = await fetch(
					`http://localhost:4000/schedule-validator/validate-requirements/`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(schedule),
					}
				);
				let reportJSON = await response.json();
				setReport(reportJSON);
			} catch (err) {
				console.log(err);
			}
		};

		fetchReport(report);
	}, [schedule]);

	useEffect(() => {
		localStorage.setItem("major", major);
	}, [major])

	useEffect(() => {
		localStorage.setItem("year", year);
	}, [major])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!majorInput || !yearInput) return;
		setMajor(majorInput);
		setYear(yearInput);
	};

	const handleChangeCourse = (term, schedule, courseJSON, newCourse) => {
		let newSchedule = structuredClone(schedule);
		let termIndex = schedule.terms.findIndex((i) => i.id === term.id);
		let courseIndex = schedule.terms[termIndex].courses.findIndex(
			(i) => i.course_id === newCourse.course_id
		);
		newSchedule.terms[termIndex].courses[courseIndex] = courseJSON;
		setSchedule(newSchedule);
	};

	const handleAddCourse = (courseJSON, schedule, term) => {
		let newSchedule = structuredClone(schedule);
		let termIndex = schedule.terms.findIndex((i) => i.id === term.id);
		newSchedule.terms[termIndex].courses.push(courseJSON);
		setSchedule(newSchedule);
	};

	const handleDeleteCourse = (term, newCourse, schedule) => {
		let newSchedule = structuredClone(schedule);
		let termIndex = schedule.terms.findIndex((i) => i.id === term.id);
		let courseIndex = schedule.terms[termIndex].courses.findIndex(
			(i) => i.course_id === newCourse.course_id
		);
		newSchedule.terms[termIndex].courses.splice(courseIndex, 1);
		setSchedule(newSchedule);
	};

	return (
		<div className="schedule-validator">
			<ScheduleToolbar
				yearInput={yearInput}
				setYearInput={setYearInput}
				majorInput={majorInput}
				setMajorInput={setMajorInput}
				handleSubmit={handleSubmit}
			/>
			<div>
				{major} {year}
			</div>
			<div className="schedule-report-container">
				{year !== 0 ? (
					<>
						<Schedule
							schedule={schedule}
							setSchedule={setSchedule}
							handleAddCourse={handleAddCourse}
							handleChangeCourse={handleChangeCourse}
							handleDeleteCourse={handleDeleteCourse}
						/>
						<Report report={report} />
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default ScheduleValidator;
