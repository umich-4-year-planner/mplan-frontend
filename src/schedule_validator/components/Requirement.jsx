import FufilledBy from "./FufilledBy";

const Requirement = ({ requirement }) => {
	const copyToClipboard = () => navigator.clipboard.writeText(requirement.placeholder);
	return (
		<div className="requirement">
			<div>{requirement.fufilled ? <>✅</> : <>❌</>}</div>
			<div className="req-name">
				{requirement.placeholder ? (
					<>
						<span className="placeholder-tooltip" onClick={copyToClipboard}>
							{requirement.name}
							<span className="placeholder-tooltiptext">
								Placeholder: {requirement.placeholder}
							</span>
						</span>
					</>
				) : (
					<>{requirement.name}</>
				)}
			</div>
			<div>
				{requirement.content.credit ? (
					<>
						{requirement.credits_fufilled + (requirement?.credits_overflow || 0)} /{" "}
						{requirement.content.credit}
					</>
				) : (
					<> </>
				)}
			</div>
			<div className="fufilled-by">
				{requirement.fufilled_by.length != 0 ? (
					<FufilledBy requirement={requirement}/>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Requirement;
