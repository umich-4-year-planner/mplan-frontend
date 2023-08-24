import Header from "./Header";
import Footer from "./Footer";
import ScheduleValidator from "./schedule_validator/components/ScheduleValidator.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<ScheduleValidator />
			</main>
			<Footer />
		</div>
	);
}

export default App;
