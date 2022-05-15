import React from "react";

const BirdListEntry = ({ bird }) => {
  return (
    <div className="entry">
      <div className="entry-image-wrapper">
        <img className="entry-image" src={bird.url} alt="bird(?)" />
      </div>
      <div className="entry-text">
        <div className="entry-name">
          <h3>{bird.name}</h3>
        </div>
        <div className="entry-category">
          <h4>{bird.isPideon ? "Is Pidgeon" : "Not a pidgeon"}</h4>
        </div>
      </div>
    </div>
  )
}

export default BirdListEntry;