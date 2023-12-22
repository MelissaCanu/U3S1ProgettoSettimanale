import React from "react";
import NavBootstrap from "./Components/Navbar";
import "./App.css";
import Actionbar from "./Components/Actionbar";
import Gallery from "./Components/Gallery";
import Gallery2 from "./Components/Gallery2";
import Gallery3 from "./Components/Gallery3";

function App() {
	return (
		<div className="bg-dark">
			<NavBootstrap />
			<div className="container-fluid px-4"></div>
			<Actionbar />
			<Gallery />
			<Gallery2 />
			<Gallery3 />
		</div>
	);
}

export default App;
