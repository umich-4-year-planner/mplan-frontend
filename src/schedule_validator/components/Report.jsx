import RequirementGroup from "./RequirementGroup";
import ReportContext from "../../context/ReportContext"

const Report = ({ report }) => {
	return (
		<ReportContext.Provider value={report}>
			<div className="report">
				{Object.keys(report).length !== 0 ? (
					<>
						{report.requirement_groups.map((group) => {
							return <RequirementGroup key={group.name} group={group} />;
						})}
					</>
				) : (
					<div></div>
				)}
			</div>
		</ReportContext.Provider>
	);
};
export default Report;
