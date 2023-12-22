import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

function NavBootstrap() {
	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src={process.env.PUBLIC_URL + "/assets/logo.png"}
						alt="Logo"
						style={{ width: "100px", height: "55px" }}
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#tv-shows">TV Shows</Nav.Link>
						<Nav.Link href="#movies">Movies</Nav.Link>
						<Nav.Link href="#recently-added">Recently Added</Nav.Link>
						<Nav.Link href="#my-list">My List</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<Nav className="ms-auto">
					<Nav.Link className="text-white">
						<BsSearch />
					</Nav.Link>
					<Nav.Link className="fw-bold text-white">KIDS</Nav.Link>
					<Nav.Link className="text-white">
						<BsBell />
					</Nav.Link>
					<Nav.Link className="text-white">
						<BsPersonCircle />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBootstrap;