import ScheduleTableRow from "./ScheduleTableRow.jsx";
import ScheduleTableFooter from "./ScheduleTableFooter.jsx";
import EmptyTableRow from "./EmptyTableRow.jsx";

const ScheduleTable = ({
  term,
  schedule,
  handleChangeCourse,
  handleAddCourse,
  handleDeleteCourse
}) => {
  return (
    <div className="schedule-term">
      <h3>{term.name}</h3>
      <table className="schedule-table">
        <thead>
          <tr key={0}>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {term.courses.map((course) => {
            return (
              <ScheduleTableRow
                course={course}
                schedule={schedule}
                term={term}
                key={course.course_id}
                handleChangeCourse={handleChangeCourse}
                handleDeleteCourse={handleDeleteCourse}
              />
            );
          })}

          <EmptyTableRow
            handleAddCourse={handleAddCourse}
            schedule={schedule}
            term={term}
          />
          <ScheduleTableFooter term={term} schedule={schedule}/>
        </tbody>
      </table>
    </div>
  );
};
export default ScheduleTable;
