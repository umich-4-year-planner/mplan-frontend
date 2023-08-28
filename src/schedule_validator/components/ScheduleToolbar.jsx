import ScheduleForm from "./ScheduleForm";

const ScheduleToolbar = ({ handleSubmit, scheduleMeta }) => {
	return (
		<div className="schedule-toolbar">
			<ScheduleForm
				handleSubmit={handleSubmit}
				scheduleMeta={scheduleMeta}
			/>
		</div>
	);
};
export default ScheduleToolbar;
