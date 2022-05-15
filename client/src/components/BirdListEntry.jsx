import React from "react";
import axios from 'axios';

const BirdListEntry = ({ bird, getAllTests }) => {

  const handleClick = async (event) => {
    //console.log('click name: ', bird.name, ' is pidgeon: ', bird.isPidgeon)
    let fieldName = event.target.dataset.field
    const response = prompt(`New value for ${fieldName}`);

    if (fieldName === 'isPidgeon' && (response !== 'true' && response !== 'false')) {
      alert("Value must be true or false!");
      return;
    }

    let data = {
      _id: bird._id,
      [fieldName]: response,
    }
    await axios({
      method: "patch",
      url: "/api/tests",
      data: data
    });
    console.log('patch request complete.');
    getAllTests();
  }

  const handleDelete = async () => {
    await axios({
      method: 'delete',
      url: '/api/tests',
      data: { _id: bird._id },
    })
    console.log('deleted!');
    getAllTests();
  }

  return (
    <div className="entry">
      <p onClick={handleDelete} className="delete-button">+</p>
      <div className="entry-image-wrapper">
        <img className="entry-image" src={bird.url} alt="bird(?)" />
      </div>
      <div className="entry-text">
        <div className="entry-name">
          <h3 data-field="name" onClick={handleClick}>{bird.name}</h3>
        </div>
        <div className="entry-category">
          <h4 data-field="isPidgeon" onClick={handleClick}>{bird.isPidgeon ? "Is Pidgeon" : "Not a pidgeon"}</h4>
        </div>
      </div>
    </div>
  )
}

export default BirdListEntry;