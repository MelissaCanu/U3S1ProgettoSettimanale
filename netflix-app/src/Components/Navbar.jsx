import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

function NavBootstrap() {
	/* search input, provo con hook perché non ho fatto classe*/
	const [searchVisibility, setSearchVisibility] = useState(false);
	const [searchMovie, setSearchMovie] = useState("");

	const toggleSearch = () => {
		setSearchVisibility(!searchVisibility);
	};

	const handleSearchChange = (e) => {
		setSearchMovie(e.target.value);
	};

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
					<Nav.Link
						className="text-white d-none d-lg-block"
						onClick={toggleSearch}
					>
						<BsSearch />
					</Nav.Link>
					{searchVisibility && (
						<input
							type="text"
							className="form-control ms-2"
							placeholder="Search movies here..."
							value={searchMovie}
							onChange={handleSearchChange}
						/>
					)}
					<Nav.Link className="fw-bold text-white d-none d-lg-block">
						KIDS
					</Nav.Link>
					<Nav.Link className="text-white d-none d-lg-block">
						<BsBell />
					</Nav.Link>
					<Nav.Link className="text-white d-none d-lg-block">
						<BsPersonCircle />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBootstrap;
