import React from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";
class MoviesContainer extends React.Component {
  state = {
    trendingMovies: ["tt0241527", "tt0330373"],
    newMovies: ["tt1375666"],
    originalNetflix: [
      "tt3799232",
      "tt7984766",
      "tt7550000",
      "tt11127690",
      "tt4332232",
      "tt5519340",
      "tt9495224",
      "tt1464763",
      "tt10048342",
    ],
  };

  componentDidMount = async () => {
    let trendingMovies = [];
    let newMovies = [];
    let originalNetflix = [];
    this.state.trendingMovies.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      trendingMovies.push(data);
      this.setState({ trendingMovies: trendingMovies });
    });
    this.state.newMovies.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      newMovies.push(data);
      this.setState({ newMovies: newMovies });
    });
    this.state.originalNetflix.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      originalNetflix.push(data);
      this.setState({ originalNetflix: originalNetflix });
    });
  };

  fetchMovieByID = async (id) => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=925b91e7&i=${id}`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className="px-2">
          <MovieRow title="Trending Now" movieData={this.state.trendingMovies} />
        </div>
        <Container>
          <MovieRow title="New Releases" movieData={this.state.newMovies} />
          <MovieRow title="Netflix Originals" movieData={this.state.originalNetflix} />
        </Container>
      </div>
    );
  }
}
export default MoviesContainer;
