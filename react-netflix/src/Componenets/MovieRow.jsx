import React from "react";

import MovieCard from "./MovieCard";

class MovieRow extends React.Component {
  state = {
    title: this.props.title,
    movieData: this.props.movieData,
  };

  render() {
    const { title, movieData } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div className="mb-4 shows-row rounded">
          {movieData.map((e) => {
            console.log(e);
            return (
              <MovieCard
                movieId={e.imdbID}
                title={e.Title}
                description={e.Plot}
                image={e.Poster}
                category={title}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default MovieRow;
