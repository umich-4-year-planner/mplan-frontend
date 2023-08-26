import { useEffect, useState } from "react";

const ScheduleTableFooter = ({ term, schedule }) => {
	const [credits, setCredits] = useState(0);

    console.log(`${term.name}: ${credits}`)

    useEffect(() => {
        let newCredits = 0
        const termIndex = schedule.terms.findIndex(x => x.id === term.id);
        schedule.terms[termIndex].courses.forEach(course => newCredits+=course.credits)
        setCredits(newCredits)
    }, [schedule])

	return (
		<tr className="schedule-table-footer">
			<td></td>
			<td>Total Credits</td>
			<td>{credits}</td>
		</tr>
	);
};
export default ScheduleTableFooter;
