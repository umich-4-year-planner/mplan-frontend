import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public"
import HelpScreen from "./components/HelpScreen";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}> 
				<Route index element={<Public/>}/>
				<Route path="/how-to-use" element={<HelpScreen/>}/>
			</Route>
		</Routes>
	);
}

export default App;
