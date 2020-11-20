import React from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";
import request from "../request";
class MoviesContainer extends React.Component {
  state = {
    trendingMovies: [],
    NewMovies: [],
    OriginalNetflix: [],
  };
  componentDidMount = () => {
    this.fetchMovies();
  };
  fetchMovies = async () => {
    try {
      let response = await fetch(request.url + request.Key_API);

      let movies = response.json();
      this.setState({ trendingMovies: movies });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <Container>
          <MovieRow title="title1" />

          <MovieRow title="title2" />

          <MovieRow title="title3" />
        </Container>
      </div>
    );
  }
}
export default MoviesContainer;
