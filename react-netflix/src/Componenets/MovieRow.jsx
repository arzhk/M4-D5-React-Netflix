import React from "react";
import { Row } from "react-bootstrap";

import MovieCard from "./MovieCard";

function MovieRow(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="mb-5 shows-row">
        <MovieCard />
      </div>
    </>
  );
}
export default MovieRow;
