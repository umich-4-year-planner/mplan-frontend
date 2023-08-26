import ScheduleForm from "./ScheduleForm";

const ScheduleToolbar = ({ yearInput, setYearInput, majorInput, setMajorInput, handleSubmit }) => {
	return (
		<div className="schedule-toolbar">
			<ScheduleForm
				yearInput={yearInput}
				setYearInput={setYearInput}
				majorInput={majorInput}
				setMajorInput={setMajorInput}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};
export default ScheduleToolbar;
