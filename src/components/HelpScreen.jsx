import scheduleFormImg from "../img/schedule-form1170x156.png";
import termImg from "../img/term764x606.png";
import reportImg from "../img/report964x906.png";
import placholderImg from "../img/placeholder938x282.png";
import placeholderTermImg from "../img/placeholder-term757x300.png";
import placeholderReportImg from "../img/placeholder-report918x342.png"

const HelpScreen = () => {
	return (
		<main className="main">
			<section className="instructions">
				<h1>How to Use</h1>
				<h2>Basics</h2>
				<p>
					First thing you need to do is choose your major and starting year using the form
					in figure 1
				</p>
				<figure>
					<img src={scheduleFormImg} alt="Schedule Form" />
					<figcaption>Figure 1 - Schedule Form</figcaption>
				</figure>
				<figure>
					<img src={termImg} alt="Schedule Term" />
					<figcaption>Figure 2 - Schedule Term</figcaption>
				</figure>
				<figure>
					<img src={reportImg} alt="Report" />
					<figcaption>Figure 3 - Report</figcaption>
				</figure>
				<p>
					After clicking create schedule, an empty schedule and report should pop up, from
					here you can start adding classes to the schedule. Classes are inputted in the
					format from the LSA Course guide, for example: EECS280 or MATH116. As you add
					classes to the schedule, the report should automatically start updating.
				</p>

				<h2>Using Placeholders</h2>
				<p>
					Some requirements have a lot of different course options that can fufill it. If
					you are unsure what class you want to take for this requirement, you can use a
					placeholder instead. Placeholders are in a similar form to regular courses. You
					can hover over a requirement to see what the placeholder code is for that
					requirement. Use this as the subject for the course. The number for the
					placeholder signifies the level and how many credits. the first digit is the
					level and the last digit is the number of credits. An example: INTBREADTH304
					would count as a 300 level , 4 credit intellecual breadth course
				</p>
				<figure>
					<img src={placholderImg} alt="Placeholder" />
					<figcaption>Figure 4 - Placeholder</figcaption>
				</figure>
				<figure>
					<img src={placeholderTermImg} alt="Placeholder Term" />
					<figcaption>Figure 5 - Placeholder Term</figcaption>
				</figure>
				<figure>
					<img src={placeholderReportImg} alt="Placeholder Report" />
					<figcaption>Figure 6 - Placeholder Report</figcaption>
				</figure>
			</section>
		</main>
	);
};
export default HelpScreen;
