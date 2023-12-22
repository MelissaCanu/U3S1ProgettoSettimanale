import React from "react";
import NavBootstrap from "./Components/Navbar";
import "./App.css";
import Actionbar from "./Components/Actionbar";

function App() {
	return (
		<div>
			<NavBootstrap />
			<div className="container-fluid px-4"></div>
			<Actionbar />
		</div>
	);
}

export default App;
