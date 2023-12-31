import React, { Component } from "react";

class Gallery2 extends Component {
	state = {
		movies: [],
	};

	fetchMovies = async () => {
		try {
			const response = await fetch(
				"http://www.omdbapi.com/?s&apikey=b43efca6&s=american-horror-story"
			);
			const data = await response.json();
			/* filtro i film in base all'anno di uscita */

			const movieYears = ["2018–", "2012", "2017", "tt4255166", "2016", "2019"];
			/* filtro per Year o imdbID perché non tutti hanno il poster */
			const filterMovies = data.Search
				? data.Search.filter(
						(movie) =>
							(movieYears.includes(movie.Year) ||
								movieYears.includes(movie.imdbID)) &&
							movie.Year !== "N/A"
				  )
				: [];
			/* sorto da vecchio a nuovo */
			const sortMovies = filterMovies.sort(
				(a, b) => parseInt(a.Year) - parseInt(b.Year)
			);

			// Slice per avere 6 risultati
			const slicedMovies = sortMovies.slice(0, 6);

			this.setState({
				movies: slicedMovies,
			});
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

	componentDidMount() {
		this.fetchMovies();
	}

	render() {
		const { movies } = this.state;

		return (
			<>
				<h2 style={{ fontSize: "1.5rem" }} className="text-white mx-4 mt-4">
					AHS Favorites
				</h2>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 md-4 bg-dark mx-1">
					{movies.map((movie) => (
						<div key={movie.imdbID} className="col-md-4">
							<div className="col text-center px-1">
								<img
									src={movie.Poster}
									className="img-fluid img-hover-effect"
									style={{
										height: "300px",
										width: "300px",
										objectFit: "cover",
										marginBottom: "20px",
									}}
									alt={`Poster for ${movie.Title}`}
								/>
							</div>
						</div>
					))}
				</div>
			</>
		);
	}
}

export default Gallery2;
