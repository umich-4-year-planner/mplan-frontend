const FufilledBy = ({ requirement }) => {
	return (
		<>
			Fufilled By:{" "}
			{requirement.fufilled_by.map((id, i) => {
				return (
					<span key={i}>
						{i === requirement.fufilled_by.length - 1 ? <> {id} </> : <> {id}, </>}
					</span>
				);
			})}
		</>
	);
};
export default FufilledBy;
