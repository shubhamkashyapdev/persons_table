import React from "react";

export const Filter = ({ handleChange }) => {
  return (
    <div
      className='form-group'
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <label className='text-white' style={{ flex: "0 0 1" }}>
        <h4>Search Field</h4>
      </label>
      <input
        style={{ width: "60%" }}
        type='text'
        className='form control'
        placeholder='search...'
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
