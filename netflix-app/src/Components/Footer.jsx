import React from "react";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="mt-5">
			<Container>
				<Row className="justify-content-center">
					<Col sm={6}>
						<Row>
							<Col className="d-flex align-items-center">
								<SocialIcon
									className="social-icon"
									style={{
										height: 20,
										width: 20,
										marginRight: "8px",
										marginBottom: "10px",
									}}
									url="https://facebook.com"
								/>
								<SocialIcon
									className="social-icon"
									style={{
										height: 20,
										width: 20,
										marginRight: "8px",
										marginBottom: "10px",
									}}
									url="https://discord.com"
								/>
								<SocialIcon
									className="social-icon"
									style={{
										height: 20,
										width: 20,
										marginRight: "8px",
										marginBottom: "10px",
									}}
									url="https://twitter/x.com"
								/>
								<SocialIcon
									className="social-icon"
									style={{ height: 20, width: 20, marginBottom: "10px" }}
									url="https://youtube.com"
								/>
							</Col>
						</Row>
						<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
							<Col>
								<Row>
									<Col className="footer-links px-3">
										<p style={{ marginBottom: "3px" }}>
											<a
												href="#footerlink"
												className="text-secondary text-decoration-none link"
												alt="footer link"
											>
												Audio and Subtitles
											</a>
										</p>
										<p style={{ marginBottom: "3px" }}>
											<a
												href="#footerlink"
												className="text-secondary text-decoration-none link"
												alt="footer link"
											>
												Media Center
											</a>
										</p>
										<p style={{ marginBottom: "3px" }}>
											<a
												href="#footerlink"
												className="text-secondary text-decoration-none link"
												alt="footer link"
											>
												Privacy
											</a>
										</p>
										<p style={{ marginBottom: "3px" }}>
											<a
												href="#footerlink"
												className="text-secondary text-decoration-none link"
												alt="footer link"
											>
												Contact Us
											</a>
										</p>
									</Col>
								</Row>
							</Col>
							<Col className="px-3">
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Audio Description
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Investor Relations
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Legal Notices
									</a>
								</p>
							</Col>
							<Col className="px-3">
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Help Center
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Jobs
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Cookie Preferences
									</a>
								</p>
							</Col>
							<Col>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Gift Cards
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Terms of Use
									</a>
								</p>
								<p style={{ marginBottom: "3px" }}>
									<a
										href="#footerlink"
										className="text-secondary text-decoration-none link"
										alt="footer link"
									>
										Corporate information
									</a>
								</p>
							</Col>
						</Row>
						<Row>
							{/* parte sotto button e copyright */}{" "}
							{/* quando faccio hover sul btn non so perché si muove un po' la pagina intera */}
							<Col className="mb-2">
								<Button
									type="button"
									className="btn-footer btn btn-sm footer-button rounded-0 mt-3 border border-secondary text-secondary bg-transparent"
								>
									Service Code
								</Button>
							</Col>
						</Row>
						<Row>
							<Col
								style={{ fontSize: "0.7rem" }}
								className="mb-2 mt-2 copyright text-secondary"
							>
								{/* Copyright */}© 1997-2023 Netflix, Inc.
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
