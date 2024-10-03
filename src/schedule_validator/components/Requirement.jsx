import RequirementDetails from "./RequirementDetails";

const Requirement = ({ requirement }) => {
	const copyToClipboard = () => navigator.clipboard.writeText(requirement.placeholder);
	return (
		<div className="requirement">
			<div>{requirement.fulfilled ? <>✅</> : <>❌</>}</div>
			<div className="req-name">
				{requirement.placeholder ? (
					<>
						<span className="placeholder-tooltip" onClick={copyToClipboard}>
							<span className="placeholder-tooltiptext">
								Placeholder: {requirement.placeholder[0]}
							</span>
							{requirement.name}
						</span>
					</>
				) : (
					<>{requirement.name}</>
				)}
			</div>
			<div>
				{requirement.content.credit ? (
					<>
						{requirement.credits_fulfilled + (requirement?.credits_overflow || 0)} /{" "}
						{requirement.content.credit}
					</>
				) : (
					<> </>
				)}
			</div>
			<div className="fulfilled-by">
				{requirement.fulfilled_by.length !== 0 ? (
					<RequirementDetails requirement={requirement} />
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Requirement;
