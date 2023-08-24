import { useEffect, useState } from "react";

import Report from "./Report.jsx";
import Schedule from "./Schedule.jsx";

import generateEmptySchedule from "../lib/generateEmptySchedule.js";

const ScheduleValidator = () => {
	const [schedule, setSchedule] = useState(
		JSON.parse(localStorage.getItem("schedule")) ||
			generateEmptySchedule(2022, "Computer Engineering")
	);

	useEffect(() => {
		localStorage.setItem("schedule", JSON.stringify(schedule));
	}, [schedule]);

	return (
		<div className="schedule-validator">
			<Schedule schedule={schedule} setSchedule={setSchedule} />
			<Report schedule={schedule} />
		</div>
	);
};
export default ScheduleValidator;
