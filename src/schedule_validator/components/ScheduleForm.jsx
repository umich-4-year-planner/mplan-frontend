import { useEffect } from "react";

const ScheduleForm = ({ scheduleMeta, handleSubmit }) => {
	const majors = ["Computer Engineering", "Robotic"];
	const years = [2020, 2021, 2022, 2023, 2024];

	return (
		<div>
			<form
				className="schedule-form"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label htmlFor="major">Major</label>
				<select name="major" id="major">
					{majors.map((mjr) => {
						return (
							<option key={mjr} value={mjr}>
								{mjr}
							</option>
						);
					})}
				</select>

				<label htmlFor="year">Year</label>
				<select name="year" id="year">
					{years.map((yr) => {
						return (
							<option key={yr} value={`${yr}`}>
								{yr}
							</option>
						);
					})}
				</select>

				<button type="submit"> Make New Schedule</button>
			</form>
		</div>
	);
};
export default ScheduleForm;
