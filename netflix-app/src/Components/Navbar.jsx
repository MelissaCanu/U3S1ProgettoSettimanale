import React from "react";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg bg-dark"
			style={{ backgroundColor: "#221f1f !important" }}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#Home">
					<img
						src={process.env.PUBLIC_URL + "/assets/logo.png"}
						style={{ width: "100px", height: "55px" }}
						alt="Netflix Logo"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active fw-bold" href="#">
								Home
							</a>
						</li>
					</ul>
					<div className="d-flex align-items-center">
						<i className="bi bi-search icons">
							<BsSearch />
						</i>
						<div id="kids" className="fw-bold">
							KIDS
						</div>
						<i className="bi bi-bell icons">
							<BsBell />
						</i>
						<i className="bi bi-person-circle icons">
							<BsPersonCircle />
						</i>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
