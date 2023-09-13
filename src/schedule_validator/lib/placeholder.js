export const generatePlaceholderCourse = (course_id) => {
	if (!isPlaceholderID(course_id)) throw new Error("course id is not proper placeholder format");

	const subject = getSubjectFromID(course_id);
	const number = getNumberFromID(course_id);
	const name = validPlaceholderSubjects[subject] + " Placeholder";
	const credits = parseInt(number.toString()[2]);

	const course = {
		subject,
		number,
		course_id,
		name,
		credits,
		lsa_distributions: [],
		credit_exclusions: [],
		crosslists: [],
		repeatability: {
			credits: 100,
			elections: 100,
		},
		nonLSA: false,
		pre_requisites: [],
	};

	return course;
};

export const isPlaceholderID = (course_id) => {
	let number, subject;
	try {
		number = getNumberFromID(course_id);
		subject = getSubjectFromID(course_id);
	} catch {
		return false;
	}

	if (number.toString().length !== 3) return false;
	if (!Object.keys(validPlaceholderSubjects).includes(subject)) return false;

	return true;
};

const validPlaceholderSubjects = {
	CECORE: "Computer Engineering Core Electives",
	CEULCE: "Computer Engineering Upper Level Electives",
	CEMDE: "Computer Engineering Major Design Experience",
	CEEECS: "Computer Engineering EECS Elective",
	CEFLEX: "Computer Engineering Flexible Technical Electives",
	GEN: "General Electives",
	IB: "Intellectual Breadth",
	IBHU: "Intellectual Breadth",
};

const getSubjectFromID = (course_id) => {
	const regGetSubject = /[A-Za-z]+/;
	const subjectMatch = course_id.match(regGetSubject);
	if (!subjectMatch) throw new Error("not proper course id");
	const subject = subjectMatch[0];

	return subject;
};
const getNumberFromID = (course_id) => {
	const regGetDigits = /\d+/;
	const numberMatch = course_id.match(regGetDigits);
	if (!numberMatch) throw new Error("not proper course id");
	const number = numberMatch[0];

	return number;
};
