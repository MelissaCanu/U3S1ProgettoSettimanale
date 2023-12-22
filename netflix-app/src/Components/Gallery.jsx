import React, { Component } from "react";

class Gallery extends Component {
	state = {
		movies: [],
	};

	fetchMovies = async () => {
		try {
			const response = await fetch(
				"http://www.omdbapi.com/?apikey=b43efca6&s=scream"
			);
			const data = await response.json();
			this.setState({
				movies: data.Search
					? data.Search.slice(0, 6)
					: [] /* slice per avere solo 6 risultati per riga */,
			}); /* devo aggiungere sempre || [] per evitare problemi con null o undefined? ho cercato online ma non ho ben capito  */
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
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 md-4 bg-dark">
				{movies.map((movie) => (
					<div key={movie.imdbID} className="col-mb-4">
						<div class="col mb-2 text-center px-1">
							<img
								src={movie.Poster}
								className="img-fluid"
								alt={`Poster for ${movie.Title}`}
							/>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Gallery;