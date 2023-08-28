const RequirementGroup = ({ group }) => {
	return (
		<div className="requirement-group">
			<h3>{group.name}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Requirement</th>
                        <th>Fufilled</th>
                    </tr>
                </thead>
                <tbody>
                    {group.requirements.map(requirement => {
                        return (
                            <tr>
                                <td>{requirement.name}</td>
                                <td>{requirement.fufilled ? <>✅</> : <>❌</>}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
		</div>
	);
};
export default RequirementGroup;
