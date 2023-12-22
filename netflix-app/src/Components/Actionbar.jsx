import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import { BsGrid, BsGrid3X3 } from "react-icons/bs";

function Actionbar() {
	return (
		<div className="d-flex justify-content-between bg-dark" variant="dark">
			<div className="d-flex mx-3">
				<h2 className="mb-4 text-white">TV Shows</h2>
				<ButtonGroup className="ms-4 mt-1">
					<Dropdown>
						<Dropdown.Toggle
							variant="secondary"
							size="sm"
							className="rounded-0"
							style={{ backgroundColor: "#221f1f" }}
						>
							Genres
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#">Comedy</Dropdown.Item>
							<Dropdown.Item href="#">Drama</Dropdown.Item>
							<Dropdown.Item href="#">Thriller</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</ButtonGroup>
			</div>
			<div className="mx-3 d-none d-md-flex">
				<BsGrid className="icons me-2 text-white" />
				<BsGrid3X3 className="icons text-white" />
			</div>
		</div>
	);
}

export default Actionbar;
