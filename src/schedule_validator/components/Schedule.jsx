import ScheduleTable from "./ScheduleTable.jsx";

const Schedule = ({ schedule, handleChangeCourse, handleAddCourse, handleDeleteCourse}) => {
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
            handleDeleteCourse={handleDeleteCourse}
          />
        );
      })}
    </div>
  );
};
export default Schedule;
