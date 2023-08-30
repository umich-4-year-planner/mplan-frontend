import Requirement from "./Requirement";

const RequirementGroup = ({ group }) => {
	return (
		<div className="requirement-group">
			<h3>{group.name}</h3>
			<table>
				{/* <thead>
					<tr>
						<th>Requirement</th>
						<th>Fufilled</th>
                        <th>Fufilled By</th>
                        <th>Credits Fufilled</th>
					</tr>
				</thead> */}
				<tbody>
					{group.requirements.map((requirement) => {
						return <Requirement key={requirement.name} requirement={requirement} />;
					})}
				</tbody>
			</table>
		</div>
	);
};
export default RequirementGroup;
