const ScheduleForm = ({yearInput, setYearInput, majorInput, setMajorInput, handleSubmit }) => {
	const majors = ["Computer Engineering", "Robotic"];
    const years = [2020, 2021, 2022, 2023, 2024]
	return (
		<div>
			<form
				className="major-form"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label htmlFor="majors">Major</label>
				<select
					name="majors"
					id="majors"
                    value={majorInput}
					onChange={(e) => {
						setMajorInput(e.target.value);
					}}
				>
					{majors.map((mjr) => {
						return <option value={mjr}>{mjr}</option>;
					})}
				</select>

                <label htmlFor="years">Year</label>
				<select
					name="years"
					id="years"
                    value={yearInput}
					onChange={(e) => {
						setYearInput(e.target.value);
					}}
				>
					{years.map((yr) => {
						return <option value={`${yr}`}>{yr}</option>;
					})}
				</select>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default ScheduleForm;
