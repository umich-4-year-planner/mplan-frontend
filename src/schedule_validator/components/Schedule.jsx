import ScheduleTable from "./ScheduleTable.jsx";

const Schedule = ({ schedule, setSchedule }) => {
  const coursePath = []
	return (
		<div className="schedule">
			{schedule.terms.map((term) => {
				return <ScheduleTable key={term.id} term={term} schedule={schedule} coursePath={coursePath}/>;
			})}
		</div>
	);
};
export default Schedule;
