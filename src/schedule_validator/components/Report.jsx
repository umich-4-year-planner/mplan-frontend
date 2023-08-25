import RequirementGroup from "./RequirementGroup";

const Report = ({ report }) => {
	console.log(`REPORT: `, !report, report);
	return (
		<div className="report">
			{!!report ? (
				<>
					{report.requirement_groups.map((group) => {
						return <RequirementGroup key={group.name} group={group} />;
					})}
				</>
			) : (
				<div></div>
			)}
		</div>
	);
};
export default Report;
