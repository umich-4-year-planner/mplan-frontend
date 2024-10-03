import { useContext, useState, useEffect } from "react";
import getOverflowCreditAmount from "../lib/getOverflowCreditAmount"
import ReportContext from "../../context/ReportContext"

const RequirementDetails = ({ requirement }) => {
	const report = useContext(ReportContext)
	const [creditOverflow, setCreditOverflow] = useState([])

	useEffect(() => {
		let credit_overflow = creditOverflow
		if (requirement?.overflow_from != undefined && requirement.overflow_from.length > 0) {
			credit_overflow = requirement.overflow_from.map((name) => {
				return getOverflowCreditAmount(report, name);
			})
		}
		setCreditOverflow(credit_overflow);
	}, [report]) 

	return (
		<>
			<div>
				{requirement.fulfilled_by.map((id, i) => {
					return (
						<span key={i}>
							{i === requirement.fulfilled_by.length - 1 ? <> {id} </> : <> {id}, </>}
						</span>
					);
				})}
			</div>
			{(requirement?.overflow_from != undefined && requirement.overflow_from.length > 0) ? (
				<div>
					<div className="req-name">Overflow Credits From:</div>
					{requirement.overflow_from.map((name, i) => {
						return (
							<div key={i}>
								{i === requirement.overflow_from.length - 1 ? (
									<> {name}: {creditOverflow[i]} </>
								) : (
									<> {name}: {creditOverflow[i]}, </>
								)}
							</div>
						);
					})}
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default RequirementDetails;
