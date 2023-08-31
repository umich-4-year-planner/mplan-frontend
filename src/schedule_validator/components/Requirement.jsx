const Requirement = ({ requirement }) => {
	return (
		<div className="requirement">
			<div>{requirement.fufilled ? <>✅</> : <>❌</>}</div>
			<div className="req-name">{requirement.name}</div>

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
					<>
						Fufilled By:{" "}
						{requirement.fufilled_by.map((id, i) => {
							return i === requirement.fufilled_by.length - 1 ? (
								<> {id} </>
							) : (
								<> {id}, </>
							);
						})}
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Requirement;
