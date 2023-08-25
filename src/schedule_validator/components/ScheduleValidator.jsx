import { useEffect, useState } from "react";

import Report from "./Report.jsx";
import Schedule from "./Schedule.jsx";

import generateEmptySchedule from "../lib/generateEmptySchedule.js";

const ScheduleValidator = () => {
  const [schedule, setSchedule] = useState(
    JSON.parse(localStorage.getItem("schedule")) ||
      generateEmptySchedule(2022, "Computer Engineering")
  );

  const [report, setReport] = useState({})

  useEffect(() => {
	console.log(`schedule useEffect called`)
	console.log(schedule)
    localStorage.setItem("schedule", JSON.stringify(schedule));

	const fetchReport = async (report) => {
		if (!report) return;

		try {
			const response = await fetch(
				`http://localhost:4000/schedule-validator/validate-requirements/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(schedule),
				}
			  );
			  let reportJSON = await response.json();
			  setReport(reportJSON)
		} catch (err) {
			console.log(err)
		}
	}

	fetchReport(report)
  }, [schedule]);


  const handleChangeCourse = (term, schedule, courseJSON, newCourse) => {
    let newSchedule = {...schedule};
    let termIndex = schedule.terms.findIndex((i) => i.id === term.id);
    let courseIndex = schedule.terms[termIndex].courses.findIndex(
      (i) => i.course_id === newCourse.course_id
    );


	//console.log(`term: ${termIndex}\ncourse: ${courseIndex}\n\n`)
    newSchedule.terms[termIndex].courses[courseIndex] = courseJSON;

	//console.log(`handleChangeCourse called`)
	//console.log(newSchedule.terms[0].courses[0],"---", schedule.terms[0].courses[0])

	setSchedule(newSchedule)
  };

  const handleAddCourse = (courseJSON, schedule, term) => {
	let newSchedule = {...schedule};
	let termIndex = schedule.terms.findIndex((i) => i.id === term.id);
	newSchedule.terms[termIndex].courses.push(courseJSON);
	setSchedule(newSchedule);
  }
  
  return (
    <div className="schedule-validator">
      <Schedule schedule={schedule} setSchedule={setSchedule} handleAddCourse={handleAddCourse}handleChangeCourse={handleChangeCourse} />
      <Report report={report} />
    </div>
  );
};
export default ScheduleValidator;
