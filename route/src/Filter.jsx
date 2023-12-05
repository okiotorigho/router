import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <label>Title:</label>
      <input type="text" onChange={onTitleChange} />

      <label>Rating:</label>
      <input type="number" onChange={onRatingChange} />
    </div>
  );
};

export default Filter;
