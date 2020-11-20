import React from "react";

class MovieCard extends React.Component {
  state = {
    category: this.props.category,
    title: this.props.title,
    description: this.props.description,
    poster: this.props.image,
  };
  render() {
    const { title, description, image, category } = this.props;
    return (
      <div className={category === "Netflix Originals" ? "show-wrapper show-wrapper-lg mr-2 " : "show-wrapper mr-2"}>
        <img className="show-img" src={image} />
        <div
          className={
            category === "Netflix Originals"
              ? "show-content-lg d-flex justify-content-center align-items-start flex-column px-4 py-2"
              : "show-content d-flex justify-content-center align-items-start flex-column px-4 py-2"
          }
        >
          <h5 className="mb-2">{title}</h5>
          <p className="mb-2">{description}</p>
          <button>
            <i className="fas fa-play pl-1 pr-2 py-2"></i>PLAY
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
