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
				movies: data.Search || [],
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
			<div>
				{movies.map((movie) => (
					<div key={movie.imdbID}>
						<img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
					</div>
				))}
			</div>
		);
	}
}

export default Gallery;
