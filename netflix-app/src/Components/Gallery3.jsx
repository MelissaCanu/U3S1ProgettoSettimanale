import React, { Component } from "react";

class Gallery3 extends Component {
	state = {
		movies: [],
	};

	fetchMovies = async () => {
		try {
			const response1 = await fetch(
				"http://www.omdbapi.com/?s&apikey=b43efca6&s=alien"
			);
			const response2 = await fetch(
				"http://www.omdbapi.com/?s&apikey=b43efca6&s=aliens"
			);
			const response3 = await fetch(
				"http://www.omdbapi.com/?s&apikey=b43efca6&s=prometheus"
			);

			const data1 = await response1.json();
			const data2 = await response2.json();
			const data3 = await response3.json();

			const allMovies = [...data1.Search, ...data2.Search, ...data3.Search];

			/* filtro i film in base all'anno di uscita e IMDb ID */
			/* prof rinuncio, mi sto incasinando, ma gli ultimi due film sono nell'ordine sbagliato */
			const movieYears = ["1979", "1986", "1992", "1997", "tt1446714", "2017"];
			const filterMovies = allMovies
				.filter((movie) => movieYears.includes(movie.Year) && movie.imdbID)
				.sort((a, b) => a.imdbID.localeCompare(b.imdbID));

			/* localeCompare =se una stringa viene prima o dopo */

			// Slice per avere 6 risultati
			const slicedMovies = filterMovies.slice(0, 6);

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
					Alien Marathon
				</h2>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 md-4 bg-dark mx-1 py-3">
					{movies.map((movie) => (
						<div key={movie.imdbID} className="col-mb-4">
							<div class="col text-center px-1">
								<img
									src={movie.Poster}
									className="img-fluid"
									style={{
										height: "300px",
										width: "300px",
										objectFit: "cover",
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

export default Gallery3;
