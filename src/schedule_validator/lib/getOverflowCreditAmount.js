const getOverflowCreditAmount = (report, requirement_name) => {
    
    for (const requirement_group of report.requirement_groups) {
        for (const requirement of requirement_group.requirements) {
            if (requirement.name == requirement_name) {
                return requirement.credits_overflow
            }
        }
    }
}

export default getOverflowCreditAmount