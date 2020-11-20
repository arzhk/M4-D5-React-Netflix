import React from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";

const MoviesContainer = () => {
  return (
    <div>
      <Container>
        <MovieRow title="title1" />

        <MovieRow title="title2" />

        <MovieRow title="title3" />
      </Container>
    </div>
  );
};
export default MoviesContainer;
