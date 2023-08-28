import Header from "./Header";
import Footer from "./Footer";
import Construction from "./Construction";
import ScheduleValidator from "./schedule_validator/components/ScheduleValidator.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<Construction />
				{/* <ScheduleValidator /> */}
			</main>
			<Footer />
		</div>
	);
}

export default App;
