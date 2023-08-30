const Requirement = ({ requirement }) => {
	return (
		<>
			<tr className="requirement-row-1">
				<td>{requirement.fufilled ? <>✅</> : <>❌</>}</td>
				<td>{requirement.name}</td>
				<td>
					{requirement.content.credit ? (
						<>
							{requirement.credits_fufilled + (requirement?.credits_overflow || 0)} / {requirement.content.credit}
						</>
					) : (
						<> </>
					)}
				</td>
			</tr>
			<tr className="requirement-row-2">
				<td colSpan={3}>
					{requirement.fufilled_by.map((id, i) => {
						return i === requirement.fufilled_by.length - 1 ? (
							<> {id} </>
						) : (
							<> {id}, </>
						);
					})}
				</td>
			</tr>
		</>
	);
};
export default Requirement;
