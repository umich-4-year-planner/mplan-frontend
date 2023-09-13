const FulfilledBy = ({ requirement }) => {
	return (
		<>
			Fulfilled By:{" "}
			{requirement.fulfilled_by.map((id, i) => {
				return (
					<span key={i}>
						{i === requirement.fulfilled_by.length - 1 ? <> {id} </> : <> {id}, </>}
					</span>
				);
			})}
		</>
	);
};
export default FulfilledBy;
