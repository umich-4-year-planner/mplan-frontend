import ScheduleTable from "./ScheduleTable.jsx";

const Schedule = ({ schedule, handleChangeCourse, handleAddCourse}) => {
  return (
    <div className="schedule">
      {schedule.terms.map((term) => {
        return (
          <ScheduleTable
            key={term.id}
            term={term}
            schedule={schedule}
            handleChangeCourse={handleChangeCourse}
            handleAddCourse={handleAddCourse}
          />
        );
      })}
    </div>
  );
};
export default Schedule;
