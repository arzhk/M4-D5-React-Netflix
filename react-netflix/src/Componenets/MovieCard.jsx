import React from "react";

export default function MovieCard(props) {
  return (
    <div className="show-wrapper mr-1">
      <img className="show-img" src="" />
      <div className="show-content d-flex justify-content-center align-items-start flex-column px-4 py-2">
        <h5 className="mb-2">cgvbhnjmk</h5>
        <p className="mb-2">szdxfcgvhbjn</p>
        <button>
          <i className="fas fa-play pl-1 pr-2 py-2"></i>PLAY
        </button>
      </div>
    </div>
  );
}
