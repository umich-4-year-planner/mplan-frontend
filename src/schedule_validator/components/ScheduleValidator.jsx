import { useEffect, useState } from "react";

import Report from "./Report.jsx";
import Schedule from "./Schedule.jsx";
import ScheduleToolbar from "./ScheduleToolbar.jsx";

import generateEmptySchedule from "../lib/generateEmptySchedule.js";


const ScheduleValidator = () => {
	const [scheduleMeta, setScheduleMeta] = useState({
		major: localStorage.getItem("major") || "",
		year: localStorage.getItem("year") || "",
	});
	const [schedule, setSchedule] = useState(JSON.parse(localStorage.getItem("schedule")) || {});

	const [report, setReport] = useState({});

	useEffect(() => {
		if (isEmptyObject(schedule)) {
			return;
		}

		localStorage.setItem("schedule", JSON.stringify(schedule));
		const domain = process.env.NODE_ENV === "production" ? "https://mplan-api.onrender.com" : "http://localhost:4000";

		const fetchReport = async (report) => {
			if (!report) return;
			try {
				const response = await fetch(
					`http://${domain}/schedule-validator/validate-requirements/`,
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
				console.error(err);
			}
		};

		fetchReport(report);
	}, [schedule]);

	useEffect(() => {
		const { major, year } = scheduleMeta;
		if (major) localStorage.setItem("major", major);
		if (year) localStorage.setItem("year", year);

		if (scheduleMeta.major && scheduleMeta.year) {
			setSchedule(generateEmptySchedule(scheduleMeta));
		}

	}, [scheduleMeta]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		setScheduleMeta(formJson)
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
				handleSubmit={handleSubmit}
				scheduleMeta={scheduleMeta}
			/>
			<div className="schedule-report-container">
				{!isEmptyObject(schedule) ? (
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
					<>
						<p>empty</p>
					</>
				)}
			</div>
		</div>
	);
};
export default ScheduleValidator;

const isEmptyObject = (obj) => {
	return !obj || Object.keys(obj).length === 0;
};
