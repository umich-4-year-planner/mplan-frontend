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
	const [serverUp, setServerUp] = useState(false);
	const [report, setReport] = useState({});
 
	useEffect(() => {
		const testServerUp = async () => {
			try {
				const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
				const response = await fetch(`${baseUrl}/test`);
				let reportJSON = await response.json();
				setServerUp(true);
			} catch (err) {
				console.error(err);
			}
		};

		testServerUp();
	}, []);

	useEffect(() => {
		if (isEmptyObject(schedule)) {
			return;
		}
		console.log("schedule Use Effect")
		console.log(schedule)

		localStorage.setItem("schedule", JSON.stringify(schedule));
		const fetchReport = async (report) => {
			if (!report) return;
			try {
				const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
				const response = await fetch(
					`${baseUrl}/schedule-validator/validate-requirements/`,
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
	}, [scheduleMeta]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());

		setScheduleMeta(formJson);
		setSchedule(generateEmptySchedule(formJson));
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

	const copyToClipboard = (obj) => {
		navigator.clipboard.writeText(JSON.stringify(obj));
	};

	return (
		<>
			{" "}
			{serverUp ? (
				<div className="schedule-validator">
					<ScheduleToolbar handleSubmit={handleSubmit} scheduleMeta={scheduleMeta} />
					{/* <div>
				<button
					onClick={() => {
						copyToClipboard(schedule);
					}}
				>
					{" "}
					Copy Schedule{" "}
				</button>
				<button
					onClick={() => {
						copyToClipboard(report);
					}}
				>
					Copy Report
				</button>
			</div> */}
					<div className="total-credits">Total Credits: {report.total_credits}</div>
					<div className="schedule-report-container">
						{!isEmptyObject(schedule) ? (
							<>
								<div className="schedule-container">
									<Schedule
										schedule={schedule}
										setSchedule={setSchedule}
										handleAddCourse={handleAddCourse}
										handleChangeCourse={handleChangeCourse}
										handleDeleteCourse={handleDeleteCourse}
									/>
								</div>
								<Report report={report} />
							</>
						) : (
							<>
								<p></p>
							</>
						)}
					</div>
				</div>
			) : (
				<div> Server is Starting up, please wait a few seconds.</div>
			)}
		</>
	);
};
export default ScheduleValidator;

const isEmptyObject = (obj) => {
	return !obj || Object.keys(obj).length === 0;
};
