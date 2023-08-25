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
      name: `Winter ${i + 1}`,
      year: i,
      id: `w${i - 2000 + 1}`,
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
        courses: [],
      },
      ...terms,
    ],
  };

  return schedule;
};

export default generateEmptySchedule;
