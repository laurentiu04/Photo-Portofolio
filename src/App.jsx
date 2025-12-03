import "./Home.css";
import { Routes, Route } from "react-router-dom";
import Home from"./Home.jsx";
import AboutMe from "./AboutMe.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about-me" element={<AboutMe />} />
		</Routes>
	);
}

export default App;
