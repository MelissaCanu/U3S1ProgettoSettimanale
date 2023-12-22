import React from "react";
import NavBootstrap from "./Components/Navbar";
import "./App.css";
import Actionbar from "./Components/Actionbar";
import Gallery from "./Components/Gallery";

function App() {
	return (
		<div>
			<NavBootstrap />
			<div className="container-fluid px-4"></div>
			<Actionbar />
			<Gallery />
		</div>
	);
}

export default App;
