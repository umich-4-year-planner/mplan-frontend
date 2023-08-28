import { useState, useEffect} from "react";
import SearchCourse from "./SearchCourse";

const EmptyTableRow = ({ handleAddCourse, schedule, term }) => {
  const [courseInput, setCourseInput] = useState("");

  useEffect(() => {
    const fetchCourseAndSave = async () => {
      const domain = process.env.NODE_ENV === "production" ? "https://mplan-api.onrender.com" : "http://localhost:4000";
      try {
        const response = await fetch(
          `${domain}/courses/${courseInput.toUpperCase() || "none"}`
        );
        let courseJSON = await response.json();

        if (courseJSON !== null) {
          handleAddCourse(courseJSON, schedule, term);
		  setCourseInput("")
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourseAndSave();
  }, [courseInput]);

  return (
    <tr className="empty-row">
      <td>
        <SearchCourse
          courseInput={courseInput}
          setCourseInput={setCourseInput}
        />
      </td>
      <td> </td>
      <td> </td>
    </tr>
  );
};

export default EmptyTableRow;
