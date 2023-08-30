const generateEmptySchedule = (scheduleMeta) => {
  const {major, year} = scheduleMeta;
  const yearInt = parseInt(year)

  let terms = [];
  for (let i = yearInt; i < yearInt + 4; i++) {
    terms.push({
      name: `Fall ${i}`,
      year: i,
      id: `f${i - 2000}`,
      courses: [],
    });

    terms.push({
      name: `Winter ${i + 1}`,
      year: i,
      id: `w${i - 2000 + 1}`,
      courses: [],
    });

    terms.push({
      name: `Spring/Summer ${i + 1}`,
      year: i,
      id: `s${i - 2000 + 1}`,
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
        year: parseInt(year),
        id: "tf",
        courses: [],
      },
      ...terms,
    ],
  };

  return schedule;
};

export default generateEmptySchedule;


