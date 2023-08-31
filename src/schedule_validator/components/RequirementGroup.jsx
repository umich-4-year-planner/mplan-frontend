import Requirement from "./Requirement";

const RequirementGroup = ({ group }) => {
	return (
		<div className="requirement-group">
			<h3>{group.name}</h3>
			<div className="requirement-container">
				{group.requirements.map((requirement, i) => {
					return <Requirement key={i} requirement={requirement} />;
				})}
			</div>
		</div>
	);
};
export default RequirementGroup;
