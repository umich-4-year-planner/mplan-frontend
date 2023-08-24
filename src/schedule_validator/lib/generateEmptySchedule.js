const generateEmptySchedule = (year, major) => {
	let terms = [];
	for (let i = year; i < year + 4; i++) {
		terms.push({
			name: `Fall ${i}`,
			year: i,
			id: `f${i - 2000}`,
			courses: [],
		});

		terms.push({
			name: `Winter ${i}`,
			year: i,
			id: `w${i - 2000}`,
			courses: [],
		});
	}

	let schedule = {
		name: "My Schedule",
		majors: [major],
		minors: [],
		terms: [
			{
				name: "Transfer",
				year: year,
				id: "tf",
				courses: [
					{
						subject: "STATS",
						number: "180",
						course_id: "STATS180",
						name: "AP Statistics",
						credits: "3",
						lsa_distributions: [],
						credit_exclusions: [],
						crosslists: [],
						repeatability: { credits: 0, elections: 0 },
						nonLSA: true,
						preRequisites: [],
						atlasLink: "https://atlas.ai.umich.edu/course/STATS%20180/",
					},
				],
			},
			...terms,
		],
	};

	return schedule;
};

export default generateEmptySchedule;
